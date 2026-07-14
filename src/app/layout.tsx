import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getGameServer } from "@/lib/game-server";
import "./globals.css";

getGameServer();

export const metadata: Metadata = {
  title: "Свет и Тьма — браузерная MMO",
  description: "Браузерная ролевая игра: ходьба по клику, способности, таланты, кузница, порталы между локациями.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
