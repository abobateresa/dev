import { Server as NetServer } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";
import { getGameServer } from "@/lib/game-server";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ioHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (!res.socket.server.io) {
    console.log("[Socket.IO] Initializing server...");
    
    const httpServer: NetServer = res.socket.server as any;
    const ioServer = getGameServer(httpServer);
    
    res.socket.server.io = ioServer?.getIO();
  }
  
  res.end();
};

export default ioHandler;