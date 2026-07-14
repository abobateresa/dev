(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/game/AuthScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthScreen",
    ()=>AuthScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AuthScreen({ onAuthed }) {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password2, setPassword2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function submit(e) {
        e.preventDefault();
        setError(null);
        if (mode === "register" && password !== password2) {
            setError("Пароли не совпадают.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(`/api/auth/${mode}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    username,
                    password
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Ошибка");
                setLoading(false);
                return;
            }
            onAuthed(data.user);
        } catch  {
            setError("Ошибка соединения с сервером.");
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex bg-[#0a0806]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex md:w-1/2 lg:w-3/5 flex-col items-center justify-center bg-cover bg-center relative",
                style: {
                    backgroundImage: "linear-gradient(rgba(6,4,2,0.4), rgba(6,4,2,0.6)), url(/images/ground-city.png)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fade-in",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/logo/war-cry.png",
                        alt: "War Cry",
                        width: 350,
                        height: 140,
                        className: "drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/AuthScreen.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/AuthScreen.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-8 bg-gradient-to-br from-[#1a1108] via-[#0d0804] to-[#0a0604] relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-72 h-72 bg-amber-800 rounded-full blur-[100px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fade-in w-full max-w-md relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden mb-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/logo/war-cry.png",
                                    alt: "War Cry",
                                    width: 200,
                                    height: 80,
                                    className: "drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/AuthScreen.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border-2 border-amber-700/50 bg-gradient-to-b from-[#2a1a0f]/98 via-[#1f1209]/98 to-[#140a05]/98 backdrop-blur-sm p-8 shadow-[0_25px_70px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,191,0,0.1)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 h-px bg-gradient-to-r from-transparent to-amber-700/50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-3xl font-black tracking-wide text-amber-300 drop-shadow-[0_2px_8px_rgba(255,191,0,0.5)]",
                                                        children: mode === "login" ? "Авторизация" : "Регистрация"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 h-px bg-gradient-to-l from-transparent to-amber-700/50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 p-1.5 rounded-xl bg-black/40 border border-amber-900/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("login"),
                                                        className: `flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${mode === "login" ? "bg-gradient-to-b from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-900/50" : "text-amber-400/70 hover:text-amber-300 hover:bg-amber-950/30"}`,
                                                        children: "Вход"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMode("register"),
                                                        className: `flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${mode === "register" ? "bg-gradient-to-b from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-900/50" : "text-amber-400/70 hover:text-amber-300 hover:bg-amber-950/30"}`,
                                                        children: "Регистрация"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: submit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold uppercase tracking-wider text-amber-400/90",
                                                        children: "Логин"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: username,
                                                            onChange: (e)=>setUsername(e.target.value),
                                                            required: true,
                                                            minLength: 3,
                                                            maxLength: 20,
                                                            className: "w-full rounded-xl border-2 border-amber-900/60 bg-black/50 px-4 py-3 text-amber-50 outline-none transition-all focus:border-amber-600 focus:bg-black/70 focus:shadow-[0_0_15px_rgba(217,119,6,0.3)] placeholder:text-amber-900/50",
                                                            placeholder: "Введите логин"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold uppercase tracking-wider text-amber-400/90",
                                                        children: "Пароль"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            value: password,
                                                            onChange: (e)=>setPassword(e.target.value),
                                                            required: true,
                                                            minLength: 4,
                                                            className: "w-full rounded-xl border-2 border-amber-900/60 bg-black/50 px-4 py-3 text-amber-50 outline-none transition-all focus:border-amber-600 focus:bg-black/70 focus:shadow-[0_0_15px_rgba(217,119,6,0.3)] placeholder:text-amber-900/50",
                                                            placeholder: "Введите пароль"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            mode === "register" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold uppercase tracking-wider text-amber-400/90",
                                                        children: "Повторите пароль"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            value: password2,
                                                            onChange: (e)=>setPassword2(e.target.value),
                                                            required: true,
                                                            minLength: 4,
                                                            className: "w-full rounded-xl border-2 border-amber-900/60 bg-black/50 px-4 py-3 text-amber-50 outline-none transition-all focus:border-amber-600 focus:bg-black/70 focus:shadow-[0_0_15px_rgba(217,119,6,0.3)] placeholder:text-amber-900/50",
                                                            placeholder: "Повторите пароль"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this),
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-shake rounded-xl border-2 border-red-700/60 bg-gradient-to-br from-red-950/80 to-red-900/60 px-4 py-3 text-sm font-semibold text-red-200 shadow-lg shadow-red-900/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg",
                                                            children: "⚠"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: error
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                className: "group relative w-full overflow-hidden rounded-xl border-2 border-amber-600/80 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 py-3.5 font-black text-white shadow-[0_8px_20px_rgba(217,119,6,0.4)] transition-all duration-200 hover:shadow-[0_12px_30px_rgba(217,119,6,0.6)] hover:brightness-110 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-white/0 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative text-base tracking-wide drop-shadow-lg",
                                                        children: loading ? "Загрузка..." : mode === "login" ? "🗝 Войти в игру" : "⚔ Создать аккаунт"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/AuthScreen.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/AuthScreen.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/AuthScreen.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/AuthScreen.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(AuthScreen, "PDbsa4f+glWrGLk583B3PU1cW3w=");
_c = AuthScreen;
var _c;
__turbopack_context__.k.register(_c, "AuthScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/game-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared game constants: used both on server (character init) and client (UI/logic).
// No server-only imports here so it can run in the browser bundle too.
__turbopack_context__.s([
    "CLASSES",
    ()=>CLASSES,
    "CLASS_ABILITIES",
    ()=>CLASS_ABILITIES,
    "EQUIPMENT_SLOTS",
    ()=>EQUIPMENT_SLOTS,
    "FACTIONS",
    ()=>FACTIONS,
    "MAX_EQUIP_LEVEL",
    ()=>MAX_EQUIP_LEVEL,
    "MONSTER_TYPES",
    ()=>MONSTER_TYPES,
    "RACES",
    ()=>RACES,
    "ROLE_LIST",
    ()=>ROLE_LIST,
    "TALENT_BRANCHES",
    ()=>TALENT_BRANCHES,
    "TALENT_RANKS",
    ()=>TALENT_RANKS,
    "computeStats",
    ()=>computeStats,
    "expForLevel",
    ()=>expForLevel,
    "getClass",
    ()=>getClass,
    "talentPointsForLevel",
    ()=>talentPointsForLevel,
    "upgradeCost",
    ()=>upgradeCost
]);
const FACTIONS = [
    {
        id: "light",
        name: "Свет",
        description: "Люди и эльфы, хранители старого мира."
    },
    {
        id: "dark",
        name: "Тьма",
        description: "Орки и нежить, дети разрушенных земель."
    }
];
const RACES = {
    light: [
        {
            id: "human",
            name: "Человек"
        },
        {
            id: "elf",
            name: "Эльф"
        }
    ],
    dark: [
        {
            id: "orc",
            name: "Орк"
        },
        {
            id: "undead",
            name: "Нежить"
        }
    ]
};
const CLASSES = [
    {
        id: "warrior",
        name: "Воин",
        role: "Танк / ближний бой",
        description: "Крепкий боец переднего края, держит удар и рубит врагов.",
        baseStr: 9,
        baseAgi: 4,
        baseInt: 2,
        baseVit: 10,
        icon: "sword",
        color: "#c94b4b"
    },
    {
        id: "rogue",
        name: "Разбойник",
        role: "Ближний бой / крит",
        description: "Быстрый убийца, наносящий серию точных ударов.",
        baseStr: 6,
        baseAgi: 10,
        baseInt: 2,
        baseVit: 6,
        icon: "dagger",
        color: "#7a5cff"
    },
    {
        id: "mage",
        name: "Маг",
        role: "Дальний бой / маг",
        description: "Повелитель стихийной магии, наносит урон по площади.",
        baseStr: 2,
        baseAgi: 4,
        baseInt: 11,
        baseVit: 5,
        icon: "fireball",
        color: "#4b9bff"
    },
    {
        id: "priest",
        name: "Жрец",
        role: "Поддержка / лекарь",
        description: "Служитель света, исцеляет союзников и карает врагов.",
        baseStr: 2,
        baseAgi: 3,
        baseInt: 10,
        baseVit: 7,
        icon: "heal",
        color: "#ffd24b"
    },
    {
        id: "archer",
        name: "Стрелок",
        role: "Дальний бой",
        description: "Меткий лучник, атакующий на расстоянии.",
        baseStr: 5,
        baseAgi: 10,
        baseInt: 3,
        baseVit: 6,
        icon: "bow",
        color: "#4bcf7a"
    },
    {
        id: "berserker",
        name: "Берсерк",
        role: "Ближний бой / урон",
        description: "Неистовый воин, жертвующий защитой ради разрушительной силы.",
        baseStr: 11,
        baseAgi: 6,
        baseInt: 1,
        baseVit: 6,
        icon: "axe",
        color: "#ff7a4b"
    },
    {
        id: "merchant",
        name: "Торговец",
        role: "Универсал",
        description: "Хитрый делец, использующий золото и снаряжение как оружие.",
        baseStr: 5,
        baseAgi: 6,
        baseInt: 5,
        baseVit: 6,
        icon: "coin",
        color: "#d4af37"
    },
    {
        id: "shaman",
        name: "Шаман",
        role: "Поддержка / маг",
        description: "Заклинатель духов, сочетающий магию стихий и исцеление.",
        baseStr: 4,
        baseAgi: 4,
        baseInt: 9,
        baseVit: 7,
        icon: "totem",
        color: "#3fd4c4"
    },
    {
        id: "druid",
        name: "Друид",
        role: "Гибрид",
        description: "Хранитель природы, владеет когтями и целебными травами.",
        baseStr: 6,
        baseAgi: 6,
        baseInt: 7,
        baseVit: 7,
        icon: "leaf",
        color: "#6ac24b"
    }
];
function getClass(id) {
    return CLASSES.find((c)=>c.id === id) ?? CLASSES[0];
}
const CLASS_ABILITIES = {
    warrior: [
        {
            id: "w1",
            name: "Рубящий удар",
            icon: "sword",
            type: "damage",
            cooldown: 3,
            manaCost: 8,
            power: 1.3,
            description: "Мощный удар мечом по цели.",
            targeted: true
        },
        {
            id: "w2",
            name: "Щитовой бросок",
            icon: "shield",
            type: "damage",
            cooldown: 6,
            manaCost: 12,
            power: 1.1,
            description: "Бросок щита, оглушающий врага.",
            targeted: true
        },
        {
            id: "w3",
            name: "Боевой клич",
            icon: "star",
            type: "buff_atk",
            cooldown: 18,
            manaCost: 15,
            power: 0.25,
            description: "Увеличивает силу атаки на время.",
            targeted: false
        },
        {
            id: "w4",
            name: "Неукротимость",
            icon: "shield",
            type: "buff_def",
            cooldown: 20,
            manaCost: 15,
            power: 0.3,
            description: "Увеличивает защиту на время.",
            targeted: false
        },
        {
            id: "w5",
            name: "Разрушительный удар",
            icon: "sword",
            type: "damage",
            cooldown: 12,
            manaCost: 25,
            power: 2.2,
            description: "Сокрушительный удар по врагу.",
            targeted: true
        }
    ],
    rogue: [
        // === ГЕНЕРАТОРЫ (генерируют комбо-очки) ===
        {
            id: "r1",
            name: "Коварный удар",
            icon: "dagger",
            type: "damage",
            cooldown: 1.5,
            manaCost: 35,
            power: 0.65,
            description: "Генерирует 1 комбо-очко. Базовая атака.",
            targeted: true
        },
        {
            id: "r2",
            name: "Удар в спину",
            icon: "dagger",
            type: "damage",
            cooldown: 2.5,
            manaCost: 40,
            power: 0.85,
            description: "Мощный удар со спины. Генерирует 1 комбо-очко.",
            targeted: true
        },
        // === ФИНИШЕРЫ (тратят комбо-очки) ===
        {
            id: "r3",
            name: "Отравление",
            icon: "skull",
            type: "dot",
            cooldown: 8,
            manaCost: 25,
            power: 1.1,
            description: "Финишер: усиливает яды и наносит урон.",
            targeted: true
        },
        {
            id: "r4",
            name: "Потрошение",
            icon: "dagger",
            type: "damage",
            cooldown: 10,
            manaCost: 30,
            power: 1.4,
            description: "Мощный финишер. Урон растёт с комбо-очками.",
            targeted: true
        },
        {
            id: "r5",
            name: "Ядовитый клинок",
            icon: "skull",
            type: "dot",
            cooldown: 12,
            manaCost: 35,
            power: 1.6,
            description: "Сильный DoT-финшер (специализация Отравление).",
            targeted: true
        },
        // === Утилити ===
        {
            id: "r6",
            name: "Шаг тени",
            icon: "star",
            type: "buff_def",
            cooldown: 18,
            manaCost: 30,
            power: 0.3,
            description: "Телепортируется за спину цели.",
            targeted: true
        }
    ],
    mage: [
        {
            id: "m1",
            name: "Огненный шар",
            icon: "fireball",
            type: "damage",
            cooldown: 3,
            manaCost: 12,
            power: 1.4,
            description: "Сгусток пламени по цели.",
            targeted: true
        },
        {
            id: "m2",
            name: "Ледяная стрела",
            icon: "fireball",
            type: "damage",
            cooldown: 6,
            manaCost: 14,
            power: 1.2,
            description: "Замедляет и наносит урон холодом.",
            targeted: true
        },
        {
            id: "m3",
            name: "Цепная молния",
            icon: "lightning",
            type: "damage",
            cooldown: 9,
            manaCost: 18,
            power: 1.6,
            description: "Разряд молнии по врагу.",
            targeted: true
        },
        {
            id: "m4",
            name: "Метеор",
            icon: "fireball",
            type: "damage",
            cooldown: 16,
            manaCost: 30,
            power: 2.6,
            description: "Огненная глыба с небес.",
            targeted: true
        },
        {
            id: "m5",
            name: "Щит из маны",
            icon: "shield",
            type: "buff_def",
            cooldown: 20,
            manaCost: 20,
            power: 0.3,
            description: "Поглощает часть входящего урона.",
            targeted: false
        }
    ],
    priest: [
        {
            id: "p1",
            name: "Лечение",
            icon: "heal",
            type: "heal",
            cooldown: 4,
            manaCost: 14,
            power: 1.4,
            description: "Восстанавливает здоровье.",
            targeted: false
        },
        {
            id: "p2",
            name: "Малое лечение",
            icon: "heal",
            type: "heal",
            cooldown: 2,
            manaCost: 7,
            power: 0.7,
            description: "Быстрое и дешёвое лечение.",
            targeted: false
        },
        {
            id: "p3",
            name: "Благословение",
            icon: "star",
            type: "buff_atk",
            cooldown: 18,
            manaCost: 15,
            power: 0.25,
            description: "Благословляет, повышая силу атаки.",
            targeted: false
        },
        {
            id: "p4",
            name: "Кара",
            icon: "lightning",
            type: "damage",
            cooldown: 6,
            manaCost: 14,
            power: 1.2,
            description: "Урон светом по врагу.",
            targeted: true
        },
        {
            id: "p5",
            name: "Возрождение",
            icon: "heal",
            type: "heal",
            cooldown: 22,
            manaCost: 32,
            power: 3.0,
            description: "Мощное исцеление.",
            targeted: false
        }
    ],
    archer: [
        {
            id: "a1",
            name: "Точный выстрел",
            icon: "bow",
            type: "damage",
            cooldown: 3,
            manaCost: 8,
            power: 1.35,
            description: "Точный выстрел по цели.",
            targeted: true
        },
        {
            id: "a2",
            name: "Быстрые стрелы",
            icon: "bow",
            type: "damage",
            cooldown: 5,
            manaCost: 10,
            power: 1.1,
            description: "Серия быстрых выстрелов.",
            targeted: true
        },
        {
            id: "a3",
            name: "Ядовитая стрела",
            icon: "skull",
            type: "dot",
            cooldown: 10,
            manaCost: 16,
            power: 1.0,
            description: "Стрела с ядом.",
            targeted: true
        },
        {
            id: "a4",
            name: "Град стрел",
            icon: "bow",
            type: "damage",
            cooldown: 12,
            manaCost: 22,
            power: 1.9,
            description: "Стрелы дождём по области.",
            targeted: true
        },
        {
            id: "a5",
            name: "Выстрел в голову",
            icon: "bow",
            type: "execute",
            cooldown: 15,
            manaCost: 26,
            power: 2.5,
            description: "Смертельно точный выстрел.",
            targeted: true
        }
    ],
    berserker: [
        {
            id: "b1",
            name: "Дикий удар",
            icon: "axe",
            type: "damage",
            cooldown: 3,
            manaCost: 8,
            power: 1.4,
            description: "Неистовый удар топором.",
            targeted: true
        },
        {
            id: "b2",
            name: "Кровожадность",
            icon: "star",
            type: "buff_atk",
            cooldown: 16,
            manaCost: 12,
            power: 0.35,
            description: "Повышает урон ценой защиты.",
            targeted: false
        },
        {
            id: "b3",
            name: "Свирепость",
            icon: "axe",
            type: "damage",
            cooldown: 7,
            manaCost: 14,
            power: 1.5,
            description: "Серия жестоких ударов.",
            targeted: true
        },
        {
            id: "b4",
            name: "Игнорирование боли",
            icon: "heal",
            type: "heal",
            cooldown: 14,
            manaCost: 16,
            power: 1.0,
            description: "Восстанавливает часть здоровья.",
            targeted: false
        },
        {
            id: "b5",
            name: "Ярость берсерка",
            icon: "axe",
            type: "damage",
            cooldown: 14,
            manaCost: 24,
            power: 2.4,
            description: "Разрушительная серия ударов.",
            targeted: true
        }
    ],
    merchant: [
        {
            id: "t1",
            name: "Бросок монет",
            icon: "coin",
            type: "damage",
            cooldown: 3,
            manaCost: 8,
            power: 1.2,
            description: "Бросает тяжёлые монеты во врага.",
            targeted: true
        },
        {
            id: "t2",
            name: "Выгодная сделка",
            icon: "coin",
            type: "buff_def",
            cooldown: 16,
            manaCost: 14,
            power: 0.25,
            description: "Повышает защиту на время.",
            targeted: false
        },
        {
            id: "t3",
            name: "Приманка",
            icon: "skull",
            type: "dot",
            cooldown: 10,
            manaCost: 15,
            power: 0.9,
            description: "Ослабляет врага ловушкой.",
            targeted: true
        },
        {
            id: "t4",
            name: "Тяжёлый кошель",
            icon: "coin",
            type: "damage",
            cooldown: 9,
            manaCost: 18,
            power: 1.7,
            description: "Оглушающий удар кошелём с золотом.",
            targeted: true
        },
        {
            id: "t5",
            name: "Инвестиция",
            icon: "heal",
            type: "heal",
            cooldown: 18,
            manaCost: 20,
            power: 1.6,
            description: "Вкладывает золото в собственное здоровье.",
            targeted: false
        }
    ],
    shaman: [
        {
            id: "s1",
            name: "Удар молнии",
            icon: "lightning",
            type: "damage",
            cooldown: 3,
            manaCost: 10,
            power: 1.35,
            description: "Разряд молнии по врагу.",
            targeted: true
        },
        {
            id: "s2",
            name: "Тотем исцеления",
            icon: "totem",
            type: "heal",
            cooldown: 8,
            manaCost: 16,
            power: 1.3,
            description: "Призывает тотем, исцеляющий шамана.",
            targeted: false
        },
        {
            id: "s3",
            name: "Оковы земли",
            icon: "skull",
            type: "dot",
            cooldown: 10,
            manaCost: 14,
            power: 0.9,
            description: "Замедляет и наносит урон земли.",
            targeted: true
        },
        {
            id: "s4",
            name: "Духи волков",
            icon: "lightning",
            type: "damage",
            cooldown: 12,
            manaCost: 22,
            power: 1.9,
            description: "Призрачные волки атакуют врага.",
            targeted: true
        },
        {
            id: "s5",
            name: "Очищение",
            icon: "heal",
            type: "heal",
            cooldown: 20,
            manaCost: 26,
            power: 2.6,
            description: "Снимает усталость и исцеляет.",
            targeted: false
        }
    ],
    druid: [
        {
            id: "d1",
            name: "Удар когтями",
            icon: "leaf",
            type: "damage",
            cooldown: 3,
            manaCost: 8,
            power: 1.3,
            description: "Удар когтями оборотня.",
            targeted: true
        },
        {
            id: "d2",
            name: "Природное исцеление",
            icon: "heal",
            type: "heal",
            cooldown: 6,
            manaCost: 14,
            power: 1.3,
            description: "Целебная сила природы.",
            targeted: false
        },
        {
            id: "d3",
            name: "Ядовитый шип",
            icon: "skull",
            type: "dot",
            cooldown: 10,
            manaCost: 15,
            power: 1.0,
            description: "Шип с ядом наносит урон со временем.",
            targeted: true
        },
        {
            id: "d4",
            name: "Обличье медведя",
            icon: "shield",
            type: "buff_def",
            cooldown: 18,
            manaCost: 15,
            power: 0.35,
            description: "Превращение, повышающее защиту.",
            targeted: false
        },
        {
            id: "d5",
            name: "Гнев природы",
            icon: "leaf",
            type: "damage",
            cooldown: 14,
            manaCost: 24,
            power: 2.3,
            description: "Мощный природный катаклизм.",
            targeted: true
        }
    ]
};
const TALENT_BRANCHES = [
    {
        id: "strength",
        name: "Сила",
        icon: "sword",
        description: "Увеличивает силовой урон."
    },
    {
        id: "vitality",
        name: "Стойкость",
        icon: "shield",
        description: "Увеличивает здоровье и защиту."
    },
    {
        id: "spirit",
        name: "Дух",
        icon: "star",
        description: "Увеличивает ману и силу заклинаний."
    }
];
const TALENT_RANKS = 5;
function talentPointsForLevel(level) {
    return Math.max(0, level - 1);
}
const EQUIPMENT_SLOTS = [
    {
        id: "weapon",
        name: "Оружие",
        icon: "sword"
    },
    {
        id: "armor",
        name: "Броня",
        icon: "shield"
    },
    {
        id: "amulet",
        name: "Амулет",
        icon: "star"
    }
];
const MAX_EQUIP_LEVEL = 10;
function upgradeCost(level) {
    return Math.round(20 * Math.pow(level + 1, 1.6));
}
function computeStats(ch) {
    const cls = getClass(ch.className);
    const lvl = ch.level;
    const str = cls.baseStr + Math.floor(lvl * 0.8);
    const agi = cls.baseAgi + Math.floor(lvl * 0.6);
    const intel = cls.baseInt + Math.floor(lvl * 0.6);
    const vit = cls.baseVit + Math.floor(lvl * 0.7);
    const tStr = ch.talents.strength ?? 0;
    const tVit = ch.talents.vitality ?? 0;
    const tSpirit = ch.talents.spirit ?? 0;
    const weaponLvl = ch.equipment.weapon ?? 0;
    const armorLvl = ch.equipment.armor ?? 0;
    const amuletLvl = ch.equipment.amulet ?? 0;
    const attack = Math.round(str * 2.2 + weaponLvl * 4 + tStr * 6);
    const spellPower = Math.round(intel * 2.2 + weaponLvl * 3 + tStr * 3 + tSpirit * 4);
    const defense = Math.round(vit * 1.2 + armorLvl * 3 + tVit * 5);
    const maxHp = Math.round(80 + lvl * 16 + vit * 5 + armorLvl * 6 + tVit * 22);
    const maxMp = Math.round(40 + lvl * 8 + intel * 4 + amuletLvl * 4 + tSpirit * 16);
    const critChance = Math.min(60, Math.round(agi * 0.6 + amuletLvl * 1.2));
    return {
        str,
        agi,
        int: intel,
        vit,
        attack,
        spellPower,
        defense,
        maxHp,
        maxMp,
        critChance
    };
}
function expForLevel(level) {
    return Math.round(80 * Math.pow(level, 1.35));
}
const MONSTER_TYPES = [
    {
        id: "wolf",
        name: "Лесной волк",
        level: 3,
        maxHp: 120,
        attack: 8,
        expReward: 24,
        goldReward: 6
    },
    {
        id: "spirit",
        name: "Дух леса",
        level: 5,
        maxHp: 180,
        attack: 12,
        expReward: 40,
        goldReward: 10
    },
    {
        id: "bandit",
        name: "Разбойник-изгой",
        level: 7,
        maxHp: 260,
        attack: 16,
        expReward: 60,
        goldReward: 16
    },
    {
        id: "ogre",
        name: "Лесной огр",
        level: 10,
        maxHp: 420,
        attack: 22,
        expReward: 100,
        goldReward: 28
    }
];
const ROLE_LIST = CLASSES.map(_c = (c)=>c.id);
_c1 = ROLE_LIST;
var _c, _c1;
__turbopack_context__.k.register(_c, "ROLE_LIST$CLASSES.map");
__turbopack_context__.k.register(_c1, "ROLE_LIST");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/Icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icon",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Icon({ name, className }) {
    const common = {
        className,
        fill: "none",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
    };
    switch(name){
        case "sword":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.5 2.5 21.5 9.5 12 19 5 22 2 19 9 12 14.5 2.5Z",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 12 5 8",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13 3.6 20.4 11",
                        stroke: "currentColor",
                        strokeWidth: "1.2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this);
        case "dagger":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2 15 6 12 15 9 6 12 2Z",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 13h8l-1.5 3h-5L8 13Z",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 16v6",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this);
        case "fireball":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1.5-.8-2.2-1.2-3 .9.6 3.2 2.6 3.2 6a6 6 0 1 1-12 0c0-4 2.6-6.4 4-10Z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Icon.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this);
        case "heal":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "9.5",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 7v10M7 12h10",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this);
        case "bow":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 3c-2 4-2 14 0 18",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 3 20 12 6 21",
                        stroke: "currentColor",
                        strokeWidth: "1.3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 12h13",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this);
        case "axe":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 3 3 5l6 6",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 9 19 3c1.5 3 1.5 6-1 8l-4 3",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M11 11 4 19l1 1 8-7",
                        stroke: "currentColor",
                        strokeWidth: "1.7",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this);
        case "coin":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "9",
                        stroke: "currentColor",
                        strokeWidth: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "12",
                        y: "16",
                        textAnchor: "middle",
                        fontSize: "10",
                        fill: "currentColor",
                        stroke: "none",
                        children: "G"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this);
        case "totem":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2v20M8 6h8M7 12h10M6 18h12",
                    stroke: "currentColor",
                    strokeWidth: "1.6",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Icon.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this);
        case "leaf":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 18 18 6",
                        stroke: "currentColor",
                        strokeWidth: "1.3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this);
        case "shield":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2 20 5v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z",
                    stroke: "currentColor",
                    strokeWidth: "1.6",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Icon.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this);
        case "star":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2 14.5 9 22 9.5 16 14 18 21.5 12 17.3 6 21.5 8 14 2 9.5 9.5 9 12 2Z",
                    stroke: "currentColor",
                    strokeWidth: "1.3",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Icon.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this);
        case "skull":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2a8 8 0 0 0-8 8c0 3 1.5 4.8 3 6v3h3v-2h4v2h3v-3c1.5-1.2 3-3 3-6a8 8 0 0 0-8-8Z",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9.5",
                        cy: "10.5",
                        r: "1.3",
                        fill: "currentColor",
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "14.5",
                        cy: "10.5",
                        r: "1.3",
                        fill: "currentColor",
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this);
        case "lightning":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13 2 4 14h6l-1 8 10-13h-6l0-7Z",
                    stroke: "currentColor",
                    strokeWidth: "1.4",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Icon.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this);
        case "backpack":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 8V6a4 4 0 0 1 8 0v2",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "5",
                        y: "8",
                        width: "14",
                        height: "13",
                        rx: "2",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 12h6M9 16h6",
                        stroke: "currentColor",
                        strokeWidth: "1.3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this);
        case "gear":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "3.2",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 3v2.3M12 18.7V21M21 12h-2.3M5.3 12H3M18 6l-1.6 1.6M7.6 16.4 6 18M18 18l-1.6-1.6M7.6 7.6 6 6",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this);
        case "book":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 5c3-1.3 6-1.3 8 0 2-1.3 5-1.3 8 0v14c-3-1.3-6-1.3-8 0-2-1.3-5-1.3-8 0V5Z",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 5v14",
                        stroke: "currentColor",
                        strokeWidth: "1.2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this);
        case "map":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 4v14M15 6v14",
                        stroke: "currentColor",
                        strokeWidth: "1.2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this);
        case "lock":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "5",
                        y: "10",
                        width: "14",
                        height: "10",
                        rx: "2",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 10V7a4 4 0 0 1 8 0v3",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this);
        case "chat":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 5h16v10H9l-4 4V15H4V5Z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Icon.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this);
        case "anvil":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 14h6l2-2h6l2 2v2H4v-2Z",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 16v4h4v-4",
                        stroke: "currentColor",
                        strokeWidth: "1.4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 4h4v4H8z",
                        stroke: "currentColor",
                        strokeWidth: "1.4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this);
        case "question":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "9.5",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.5 9.5c0-1.5 1.2-2.5 2.6-2.5s2.4 1 2.4 2.2c0 1.6-2.4 1.8-2.4 3.8",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "17",
                        r: "0.9",
                        fill: "currentColor",
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this);
        case "potionHp":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3V3Z",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 12v6M9 15h6",
                        stroke: "#ff5b5b",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this);
        case "potionMp":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3V3Z",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 11v7",
                        stroke: "#4b9bff",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this);
        case "portal":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "12",
                        cy: "12",
                        rx: "7",
                        ry: "9",
                        stroke: "currentColor",
                        strokeWidth: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "12",
                        cy: "12",
                        rx: "3.2",
                        ry: "5",
                        stroke: "currentColor",
                        strokeWidth: "1.2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this);
        case "expand":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5",
                    stroke: "currentColor",
                    strokeWidth: "1.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Icon.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this);
        case "user":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "8",
                        r: "3.5",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 20c1.5-4 4-5.5 7-5.5S18.5 16 20 20",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Icon.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this);
        case "close":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5 5 19 19M19 5 5 19",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Icon.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this);
        case "arrowRight":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...common,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5 12h14M13 6l6 6-6 6",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Icon.tsx",
                    lineNumber: 240,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/Icon.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
_c = Icon;
var _c;
__turbopack_context__.k.register(_c, "Icon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/CharacterSelectScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CharacterSelectScreen",
    ()=>CharacterSelectScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CharacterSelectScreen({ characters, username, onPlay, onCreateNew, onDeleted, onLogout }) {
    _s();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedChar, setSelectedChar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(characters[0] || null);
    async function handleDelete(id) {
        if (!confirm("Удалить персонажа безвозвратно?")) return;
        setBusy(id);
        await fetch(`/api/characters/${id}`, {
            method: "DELETE",
            credentials: "include"
        });
        setBusy(null);
        if (selectedChar?.id === id) {
            setSelectedChar(characters.filter((c)=>c.id !== id)[0] || null);
        }
        onDeleted(id);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-cover bg-center overflow-hidden",
        style: {
            backgroundImage: "linear-gradient(rgba(6,4,2,0.88), rgba(6,4,2,0.94)), url(/images/ground-forest.png)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/logo/war-cry.png",
                    alt: "War Cry",
                    width: 140,
                    height: 56,
                    className: "drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg bg-black/70 border border-amber-700/60 backdrop-blur-sm px-3 py-2 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] font-bold uppercase text-amber-500/80",
                            children: "Аккаунт"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-black text-amber-200",
                            children: username
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 right-4 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onLogout,
                    className: "rounded-lg border border-red-700/70 bg-red-950/80 backdrop-blur-sm px-4 py-2 text-sm font-bold text-red-200 hover:brightness-125 transition-all shadow-lg",
                    children: "🚪 Выйти"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full flex items-center justify-center gap-3 px-4 py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[340px] h-[600px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-2xl border-2 border-amber-700/60 bg-gradient-to-b from-[#2a1a0f]/98 to-[#1f1209]/98 backdrop-blur-md p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-5 pb-4 border-b-2 border-amber-800/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl",
                                            children: "�"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-black text-amber-300 drop-shadow-lg",
                                            children: "Новости"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 overflow-y-auto h-[calc(100%-80px)] pr-2 scrollbar-thin scrollbar-thumb-amber-800 scrollbar-track-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl bg-gradient-to-br from-amber-950/50 to-black/60 border border-amber-800/40 p-4 hover:border-amber-600/60 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-md bg-amber-600/80 text-[10px] font-black text-white uppercase tracking-wider",
                                                            children: "Обновление"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-amber-600/70 font-semibold",
                                                            children: "13.07.2026"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-amber-100 mb-2",
                                                    children: "🎉 Добро пожаловать!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-amber-300/80 leading-relaxed",
                                                    children: "Легендарная игра War Cry возвращается! Создайте своего героя и отправляйтесь в эпическое приключение по миру света и тьмы."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl bg-gradient-to-br from-blue-950/50 to-black/60 border border-blue-800/40 p-4 hover:border-blue-600/60 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-md bg-blue-600/80 text-[10px] font-black text-white uppercase tracking-wider",
                                                            children: "Событие"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-amber-600/70 font-semibold",
                                                            children: "10.07.2026"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-blue-100 mb-2",
                                                    children: "⚔️ Новые классы"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-amber-300/80 leading-relaxed",
                                                    children: "Доступно 10 уникальных классов: воин, маг, лучник, разбойник и другие! Каждый со своими способностями."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl bg-gradient-to-br from-purple-950/50 to-black/60 border border-purple-800/40 p-4 hover:border-purple-600/60 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-md bg-purple-600/80 text-[10px] font-black text-white uppercase tracking-wider",
                                                            children: "Фичи"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-amber-600/70 font-semibold",
                                                            children: "05.07.2026"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-purple-100 mb-2",
                                                    children: "🏆 PvP Арены"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-amber-300/80 leading-relaxed",
                                                    children: "Сражайтесь с другими игроками на аренах, в подземельях и открытом мире!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl bg-gradient-to-br from-green-950/50 to-black/60 border border-green-800/40 p-4 hover:border-green-600/60 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-md bg-green-600/80 text-[10px] font-black text-white uppercase tracking-wider",
                                                            children: "Система"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-amber-600/70 font-semibold",
                                                            children: "01.07.2026"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-green-100 mb-2",
                                                    children: "🛡️ Экипировка"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-amber-300/80 leading-relaxed",
                                                    children: "Собирайте легендарное оружие, броню и артефакты для усиления персонажа."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 max-w-[500px] h-[600px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-2xl border-2 border-amber-700/60 bg-gradient-to-b from-[#2a1a0f]/98 to-[#1f1209]/98 backdrop-blur-md shadow-[0_25px_70px_rgba(0,0,0,0.9)]",
                            children: selectedChar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex flex-col p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex h-40 w-40 items-center justify-center rounded-3xl border-4 shadow-2xl",
                                            style: {
                                                borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(selectedChar.className).color,
                                                background: `radial-gradient(circle at 40% 40%, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(selectedChar.className).color}88, #0f0805)`,
                                                boxShadow: `0 25px 50px rgba(0,0,0,0.8), 0 0 40px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(selectedChar.className).color}44, inset 0 2px 20px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(selectedChar.className).color}33`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(selectedChar.className).icon,
                                                    className: "h-24 w-24 text-white drop-shadow-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-3xl",
                                                    style: {
                                                        background: `radial-gradient(circle at 50% 50%, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(selectedChar.className).color}22, transparent 70%)`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-5xl font-black text-center text-amber-100 mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]",
                                        children: selectedChar.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-3 text-amber-400/90 mb-6 text-sm font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 rounded-lg bg-amber-900/40 border border-amber-700/50",
                                                children: [
                                                    "Уровень ",
                                                    selectedChar.level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: selectedChar.faction === "light" ? "⚡ Свет" : "🌙 Тьма"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-300",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(selectedChar.className).name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3 mb-6 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-gradient-to-br from-red-950/60 to-black/70 border-2 border-red-800/50 p-4 shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-red-400/80 mb-1 font-bold uppercase tracking-wide",
                                                        children: "Здоровье"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-black text-red-200 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "❤️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: selectedChar.hp
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-gradient-to-br from-blue-950/60 to-black/70 border-2 border-blue-800/50 p-4 shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-blue-400/80 mb-1 font-bold uppercase tracking-wide",
                                                        children: "Мана"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-black text-blue-200 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "💧"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: selectedChar.mp
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-gradient-to-br from-amber-950/60 to-black/70 border-2 border-amber-800/50 p-4 shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-amber-400/80 mb-1 font-bold uppercase tracking-wide",
                                                        children: "Золото"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-black text-amber-200 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "💰"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: selectedChar.gold
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-gradient-to-br from-purple-950/60 to-black/70 border-2 border-purple-800/50 p-4 shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-purple-400/80 mb-1 font-bold uppercase tracking-wide",
                                                        children: "Опыт"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-black text-purple-200 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "⭐"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: selectedChar.exp
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onPlay(selectedChar),
                                        className: "group relative overflow-hidden rounded-2xl border-3 border-amber-500 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 py-5 font-black text-2xl text-white shadow-[0_10px_30px_rgba(217,119,6,0.6),0_0_40px_rgba(217,119,6,0.3)] transition-all duration-200 hover:shadow-[0_15px_40px_rgba(217,119,6,0.8),0_0_50px_rgba(217,119,6,0.5)] hover:scale-[1.02] active:scale-[0.98]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-white/0 via-white/20 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] flex items-center justify-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-3xl",
                                                        children: "⚔️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Войти в игру"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex flex-col items-center justify-center p-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-8xl mb-6 opacity-30",
                                        children: "🎭"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-amber-300 mb-3",
                                        children: "Нет персонажа"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-400/70 mb-8 max-w-xs",
                                        children: "Выберите персонажа из списка справа или создайте нового героя"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onCreateNew,
                                        className: "rounded-xl border-2 border-amber-600 bg-gradient-to-b from-amber-600 to-amber-800 px-8 py-4 text-lg font-bold text-white hover:brightness-110 transition-all shadow-lg",
                                        children: "✨ Создать персонажа"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[340px] h-[600px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-2xl border-2 border-amber-700/60 bg-gradient-to-b from-[#2a1a0f]/98 to-[#1f1209]/98 backdrop-blur-md p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-5 pb-4 border-b-2 border-amber-800/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl",
                                            children: "⚔️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-black text-amber-300 drop-shadow-lg",
                                            children: "Персонажи"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-auto px-2.5 py-1 rounded-lg bg-amber-900/50 border border-amber-700/50 text-sm font-black text-amber-300",
                                            children: [
                                                characters.length,
                                                "/5"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 overflow-y-auto h-[calc(100%-160px)] pr-2 mb-4 scrollbar-thin scrollbar-thumb-amber-800 scrollbar-track-transparent",
                                    children: [
                                        characters.map((c)=>{
                                            const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(c.className);
                                            const isSelected = selectedChar?.id === c.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setSelectedChar(c),
                                                className: `cursor-pointer rounded-xl border-2 transition-all duration-200 ${isSelected ? "border-amber-500 bg-gradient-to-br from-amber-900/60 to-amber-950/40 shadow-[0_0_20px_rgba(217,119,6,0.3)] scale-[1.02]" : "border-amber-900/50 bg-black/40 hover:border-amber-700 hover:bg-black/60 hover:scale-[1.01]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 shadow-lg",
                                                                style: {
                                                                    borderColor: cls.color,
                                                                    background: `radial-gradient(circle at 30% 30%, ${cls.color}66, #0f0805)`,
                                                                    boxShadow: `0 4px 12px rgba(0,0,0,0.5), 0 0 15px ${cls.color}33`
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                    name: cls.icon,
                                                                    className: "h-8 w-8 text-white drop-shadow-lg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "truncate font-black text-amber-100",
                                                                        children: c.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "truncate text-xs text-amber-400/80 font-semibold",
                                                                        children: [
                                                                            "Ур.",
                                                                            c.level,
                                                                            " • ",
                                                                            cls.name
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                        lineNumber: 270,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 23
                                                            }, this),
                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-amber-400 text-xl",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 21
                                                    }, this),
                                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-3 pb-3 pt-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: busy === c.id,
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleDelete(c.id);
                                                            },
                                                            className: "w-full rounded-lg border-2 border-red-800/70 bg-gradient-to-br from-red-950/70 to-red-900/50 px-3 py-2 text-xs font-bold text-red-200 hover:brightness-110 disabled:opacity-40 transition-all shadow-md",
                                                            children: "🗑️ Удалить персонажа"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, c.id, true, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 248,
                                                columnNumber: 19
                                            }, this);
                                        }),
                                        characters.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-12 text-amber-400/60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-3 opacity-40",
                                                    children: "👤"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm",
                                                    children: "Нет персонажей"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                characters.length < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onCreateNew,
                                    className: "w-full rounded-xl border-2 border-dashed border-amber-600/70 bg-gradient-to-br from-amber-950/40 to-black/30 py-4 text-amber-300 hover:border-amber-500 hover:bg-gradient-to-br hover:from-amber-900/50 hover:to-black/40 transition-all font-bold text-lg shadow-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: "✨"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 312,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Создать персонажа"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                                lineNumber: 313,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/CharacterSelectScreen.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(CharacterSelectScreen, "F2LzCf7RRiW1egH2mNmtK0rmYdc=");
_c = CharacterSelectScreen;
var _c;
__turbopack_context__.k.register(_c, "CharacterSelectScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/CharacterCreateScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CharacterCreateScreen",
    ()=>CharacterCreateScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CharacterCreateScreen({ onCreated, onCancel, canCancel }) {
    _s();
    const [faction, setFaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [race, setRace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RACES"].light[0].id);
    const [className, setClassName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLASSES"][0].id);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const races = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CharacterCreateScreen.useMemo[races]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RACES"][faction]
    }["CharacterCreateScreen.useMemo[races]"], [
        faction
    ]);
    const selectedClass = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLASSES"].find((c)=>c.id === className);
    function chooseFaction(f) {
        setFaction(f);
        setRace(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RACES"][f][0].id);
    }
    async function submit(e) {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const res = await fetch("/api/characters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    name,
                    faction,
                    race,
                    className
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Ошибка");
                setLoading(false);
                return;
            }
            onCreated(data.character);
        } catch  {
            setError("Ошибка соединения с сервером.");
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex flex-col items-center justify-center overflow-y-auto bg-cover bg-center p-4",
        style: {
            backgroundImage: "linear-gradient(rgba(6,4,2,0.78), rgba(6,4,2,0.9)), url(/images/ground-city.png)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fade-in mb-3 mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/logo/war-cry.png",
                    alt: "War Cry",
                    width: 180,
                    height: 72,
                    className: "drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: submit,
                className: "fade-in w-full max-w-3xl rounded-2xl border-2 border-amber-800 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mb-5 text-2xl font-black text-amber-300",
                        children: "Создание персонажа"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-sm font-semibold text-amber-300/80",
                                children: "Фракция"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FACTIONS"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>chooseFaction(f.id),
                                        className: `rounded-xl border-2 p-3 text-left transition ${faction === f.id ? "border-amber-400 bg-amber-900/40" : "border-amber-900/50 bg-black/20 hover:border-amber-700"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-amber-100",
                                                children: f.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-amber-300/70",
                                                children: f.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, f.id, true, {
                                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-sm font-semibold text-amber-300/80",
                                children: "Раса"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: races.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setRace(r.id),
                                        className: `rounded-xl border-2 px-3 py-2 text-sm font-semibold transition ${race === r.id ? "border-amber-400 bg-amber-900/40 text-amber-100" : "border-amber-900/50 bg-black/20 text-amber-300/80 hover:border-amber-700"}`,
                                        children: r.name
                                    }, r.id, false, {
                                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-sm font-semibold text-amber-300/80",
                                children: "Роль (класс)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-2 sm:grid-cols-5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLASSES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setClassName(c.id),
                                        title: c.role,
                                        className: `flex flex-col items-center gap-1 rounded-xl border-2 p-2.5 transition ${className === c.id ? "border-amber-400 bg-amber-900/40" : "border-amber-900/50 bg-black/20 hover:border-amber-700"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-10 w-10 items-center justify-center rounded-lg border-2",
                                                style: {
                                                    borderColor: c.color,
                                                    background: `radial-gradient(circle at 30% 30%, ${c.color}55, #1a1108)`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: c.icon,
                                                    className: "h-6 w-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-semibold text-amber-100",
                                                children: c.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-amber-300/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-amber-200",
                                        children: selectedClass.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    " — ",
                                    selectedClass.role,
                                    ". ",
                                    selectedClass.description
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-1 block text-sm font-semibold text-amber-300/80",
                                children: "Имя персонажа"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                required: true,
                                minLength: 2,
                                maxLength: 16,
                                placeholder: "Введите имя",
                                className: "w-full rounded-lg border border-amber-900/60 bg-black/40 px-3 py-2 text-amber-50 outline-none focus:border-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 rounded-lg border border-red-800 bg-red-950/50 px-3 py-2 text-sm text-red-200",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                        lineNumber: 155,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            canCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onCancel,
                                className: "flex-1 rounded-lg border border-amber-800 py-2.5 font-semibold text-amber-300 hover:bg-amber-900/30",
                                children: "Назад"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "flex-1 rounded-lg border border-amber-600 bg-gradient-to-b from-amber-600 to-amber-800 py-2.5 font-bold text-white shadow-lg hover:brightness-110 disabled:opacity-50",
                                children: loading ? "Создание..." : "Создать героя"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/CharacterCreateScreen.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(CharacterCreateScreen, "ifTYxVi/O4oUumqqtLQUT1Nw77o=");
_c = CharacterCreateScreen;
var _c;
__turbopack_context__.k.register(_c, "CharacterCreateScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/world-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCATIONS",
    ()=>LOCATIONS,
    "WORLD_MAP",
    ()=>WORLD_MAP,
    "rectsIntersect",
    ()=>rectsIntersect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-client] (ecmascript)");
;
function monster(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONSTER_TYPES"].find((m)=>m.id === id);
}
const WORLD_MAP = {
    width: 2400,
    height: 1800,
    locations: [
        {
            id: "city",
            x: 1100,
            y: 920,
            name: "Ривендол"
        },
        {
            id: "forest",
            x: 620,
            y: 620,
            name: "Тёмный лес"
        },
        {
            id: "plains",
            x: 1580,
            y: 580,
            name: "Зелёные равнины"
        },
        {
            id: "hills",
            x: 1820,
            y: 1120,
            name: "Холмы Ветров"
        },
        {
            id: "swamp",
            x: 380,
            y: 1220,
            name: "Туманное болото"
        },
        {
            id: "mountains",
            x: 1480,
            y: 280,
            name: "Горный перевал"
        },
        {
            id: "ruins",
            x: 920,
            y: 380,
            name: "Руины храма"
        },
        {
            id: "desert",
            x: 380,
            y: 420,
            name: "Пески Забвения"
        },
        {
            id: "lake",
            x: 1720,
            y: 1480,
            name: "Озеро Зеркал"
        },
        {
            id: "dungeon",
            x: 720,
            y: 1480,
            name: "Подземелье Теней"
        },
        {
            id: "village",
            x: 1320,
            y: 1420,
            name: "Деревня Эльдара"
        }
    ],
    connections: [
        [
            "city",
            "forest"
        ],
        [
            "city",
            "plains"
        ],
        [
            "city",
            "hills"
        ],
        [
            "forest",
            "desert"
        ],
        [
            "forest",
            "ruins"
        ],
        [
            "plains",
            "mountains"
        ],
        [
            "plains",
            "hills"
        ],
        [
            "hills",
            "lake"
        ],
        [
            "hills",
            "village"
        ],
        [
            "swamp",
            "dungeon"
        ],
        [
            "swamp",
            "forest"
        ],
        [
            "ruins",
            "mountains"
        ],
        [
            "desert",
            "swamp"
        ],
        [
            "lake",
            "village"
        ],
        [
            "dungeon",
            "village"
        ]
    ]
};
// ==================== ГОРОД РИВЕНДОЛ — ЖИВОЙ ИЗОМЕТРИЧЕСКИЙ ГОРОД ====================
// Основные здания
const cityBuildings = [
    // Крупные здания
    {
        id: "guild",
        x: 920,
        y: 380,
        w: 480,
        h: 320,
        label: "Гильдия воинов"
    },
    {
        id: "weapon",
        x: 1520,
        y: 340,
        w: 360,
        h: 280,
        label: "Оружейная"
    },
    {
        id: "armor",
        x: 1520,
        y: 680,
        w: 360,
        h: 280,
        label: "Бронная"
    },
    {
        id: "magic",
        x: 1520,
        y: 1020,
        w: 360,
        h: 280,
        label: "Магическая лавка"
    },
    {
        id: "bank",
        x: 480,
        y: 920,
        w: 400,
        h: 280,
        label: "Банк Ривендола"
    },
    {
        id: "tavern",
        x: 120,
        y: 1240,
        w: 420,
        h: 300,
        label: "Таверна «Золотой Дракон»"
    },
    {
        id: "temple",
        x: 580,
        y: 480,
        w: 320,
        h: 260,
        label: "Храм Света"
    },
    {
        id: "forge",
        x: 1080,
        y: 820,
        w: 280,
        h: 220,
        label: "Кузница"
    },
    // Рыночные ларьки (как на картинке)
    {
        id: "stall1",
        x: 680,
        y: 720,
        w: 140,
        h: 110,
        label: "Овощи"
    },
    {
        id: "stall2",
        x: 860,
        y: 740,
        w: 140,
        h: 110,
        label: "Фрукты"
    },
    {
        id: "stall3",
        x: 1040,
        y: 720,
        w: 140,
        h: 110,
        label: "Мясо"
    },
    {
        id: "stall4",
        x: 1220,
        y: 740,
        w: 140,
        h: 110,
        label: "Хлеб"
    },
    {
        id: "stall5",
        x: 1400,
        y: 720,
        w: 140,
        h: 110,
        label: "Рыба"
    },
    {
        id: "stall6",
        x: 1580,
        y: 740,
        w: 140,
        h: 110,
        label: "Специи"
    },
    {
        id: "stall7",
        x: 720,
        y: 920,
        w: 140,
        h: 110,
        label: "Ткани"
    },
    {
        id: "stall8",
        x: 900,
        y: 940,
        w: 140,
        h: 110,
        label: "Кожа"
    },
    {
        id: "stall9",
        x: 1080,
        y: 920,
        w: 140,
        h: 110,
        label: "Оружие"
    },
    {
        id: "stall10",
        x: 1260,
        y: 940,
        w: 140,
        h: 110,
        label: "Броня"
    },
    {
        id: "stall11",
        x: 680,
        y: 1120,
        w: 140,
        h: 110,
        label: "Зелья"
    },
    {
        id: "stall12",
        x: 860,
        y: 1140,
        w: 140,
        h: 110,
        label: "Книги"
    },
    {
        id: "stall13",
        x: 1040,
        y: 1120,
        w: 140,
        h: 110,
        label: "Ювелир"
    },
    {
        id: "stall14",
        x: 1220,
        y: 1140,
        w: 140,
        h: 110,
        label: "Артефакты"
    }
];
// Дороги
const cityRoads = [
    {
        x: 600,
        y: 680,
        w: 1100,
        h: 90
    },
    {
        x: 820,
        y: 380,
        w: 90,
        h: 520
    },
    {
        x: 420,
        y: 1080,
        w: 1360,
        h: 80
    },
    {
        x: 1120,
        y: 920,
        w: 90,
        h: 380
    }
];
// Деревья + декор
const cityTrees = [
    // Деревья
    {
        id: "ct1",
        x: 180,
        y: 240,
        scale: 1.4,
        collide: true
    },
    {
        id: "ct2",
        x: 320,
        y: 160,
        scale: 1.2
    },
    {
        id: "ct3",
        x: 620,
        y: 220,
        scale: 1.5,
        collide: true
    },
    {
        id: "ct4",
        x: 1680,
        y: 200,
        scale: 1.3
    },
    {
        id: "ct5",
        x: 1820,
        y: 480,
        scale: 1.1
    },
    {
        id: "ct6",
        x: 380,
        y: 640,
        scale: 1.2
    },
    {
        id: "ct7",
        x: 680,
        y: 1180,
        scale: 1.4,
        collide: true
    },
    {
        id: "ct8",
        x: 1620,
        y: 1240,
        scale: 1.3
    },
    {
        id: "ct9",
        x: 980,
        y: 1420,
        scale: 1.1
    },
    // Рыночные ларьки (дополнительные)
    {
        id: "stall15",
        x: 1420,
        y: 1120,
        scale: 1.0,
        type: "stall"
    },
    {
        id: "stall16",
        x: 1600,
        y: 1140,
        scale: 1.0,
        type: "stall"
    },
    // Бочки и ящики
    {
        id: "barrel1",
        x: 540,
        y: 860,
        scale: 0.9,
        type: "barrel"
    },
    {
        id: "barrel2",
        x: 580,
        y: 880,
        scale: 0.85,
        type: "barrel"
    },
    {
        id: "barrel3",
        x: 920,
        y: 880,
        scale: 0.9,
        type: "barrel"
    },
    {
        id: "barrel4",
        x: 1380,
        y: 860,
        scale: 0.85,
        type: "barrel"
    },
    {
        id: "barrel5",
        x: 1420,
        y: 880,
        scale: 0.9,
        type: "barrel"
    },
    // Телеги
    {
        id: "cart1",
        x: 720,
        y: 980,
        scale: 1.1,
        type: "cart"
    },
    {
        id: "cart2",
        x: 1480,
        y: 980,
        scale: 1.0,
        type: "cart"
    },
    // Колодцы и фонари
    {
        id: "well1",
        x: 420,
        y: 780,
        scale: 1.0,
        type: "well",
        collide: true
    },
    {
        id: "lamp1",
        x: 780,
        y: 640,
        scale: 0.8,
        type: "lamp"
    },
    {
        id: "lamp2",
        x: 1120,
        y: 640,
        scale: 0.8,
        type: "lamp"
    },
    {
        id: "lamp3",
        x: 1480,
        y: 640,
        scale: 0.8,
        type: "lamp"
    }
];
// ==================== ДРУГИЕ ЛОКАЦИИ ====================
const forestTrees = Array.from({
    length: 48
}, (_, i)=>({
        id: `ft${i}`,
        x: 140 + i % 8 * 230 + Math.sin(i) * 50,
        y: 160 + Math.floor(i / 8) * 170 + i % 4 * 35,
        scale: 0.95 + i % 5 * 0.12,
        collide: i % 3 !== 0
    }));
const forestRoads = [
    {
        x: 200,
        y: 720,
        w: 1500,
        h: 65
    },
    {
        x: 820,
        y: 420,
        w: 75,
        h: 580
    }
];
const plainsBuildings = [
    {
        id: "windmill",
        x: 580,
        y: 340,
        w: 200,
        h: 280,
        label: "Мельница"
    },
    {
        id: "farm1",
        x: 1220,
        y: 620,
        w: 320,
        h: 180,
        label: "Ферма"
    },
    {
        id: "farm2",
        x: 1640,
        y: 940,
        w: 280,
        h: 160,
        label: "Сарай"
    }
];
const plainsTrees = [
    {
        id: "pt1",
        x: 240,
        y: 220,
        scale: 1.5,
        collide: true
    },
    {
        id: "pt2",
        x: 940,
        y: 160,
        scale: 1.2
    },
    {
        id: "pt3",
        x: 1480,
        y: 320,
        scale: 1.4,
        collide: true
    },
    {
        id: "pt4",
        x: 480,
        y: 820,
        scale: 1.3
    },
    {
        id: "pt5",
        x: 1180,
        y: 1120,
        scale: 1.1
    },
    {
        id: "pt6",
        x: 1740,
        y: 720,
        scale: 1.2
    }
];
const plainsRoads = [
    {
        x: 380,
        y: 640,
        w: 1800,
        h: 60
    }
];
const hillsTrees = Array.from({
    length: 32
}, (_, i)=>({
        id: `ht${i}`,
        x: 200 + i % 7 * 300,
        y: 240 + Math.floor(i / 7) * 240,
        scale: 0.9 + i % 4 * 0.18,
        collide: true
    }));
const hillsRoads = [
    {
        x: 620,
        y: 520,
        w: 1200,
        h: 55
    },
    {
        x: 1020,
        y: 860,
        w: 65,
        h: 620
    }
];
const swampTrees = [
    {
        id: "sw1",
        x: 260,
        y: 400,
        scale: 1.6,
        collide: true
    },
    {
        id: "sw2",
        x: 720,
        y: 540,
        scale: 1.4,
        collide: true
    },
    {
        id: "sw3",
        x: 1180,
        y: 360,
        scale: 1.7,
        collide: true
    },
    {
        id: "sw4",
        x: 1540,
        y: 720,
        scale: 1.3
    },
    {
        id: "sw5",
        x: 420,
        y: 980,
        scale: 1.5,
        collide: true
    },
    {
        id: "sw6",
        x: 1020,
        y: 1140,
        scale: 1.2
    }
];
const swampRoads = [
    {
        x: 340,
        y: 760,
        w: 1380,
        h: 52
    }
];
const mountainsBuildings = [
    {
        id: "watchtower",
        x: 860,
        y: 360,
        w: 180,
        h: 260,
        label: "Сторожевая башня"
    }
];
const mountainsTrees = [
    {
        id: "mt1",
        x: 300,
        y: 200,
        scale: 1.1,
        collide: true
    },
    {
        id: "mt2",
        x: 660,
        y: 440,
        scale: 1.0
    },
    {
        id: "mt3",
        x: 1180,
        y: 300,
        scale: 1.2,
        collide: true
    },
    {
        id: "mt4",
        x: 1540,
        y: 540,
        scale: 1.3
    }
];
const ruinsBuildings = [
    {
        id: "temple1",
        x: 720,
        y: 440,
        w: 420,
        h: 360,
        label: "Разрушенный храм"
    },
    {
        id: "altar",
        x: 1180,
        y: 720,
        w: 180,
        h: 160,
        label: "Древний алтарь"
    }
];
const ruinsTrees = [
    {
        id: "ru1",
        x: 260,
        y: 300,
        scale: 1.5,
        collide: true
    },
    {
        id: "ru2",
        x: 960,
        y: 260,
        scale: 1.3
    },
    {
        id: "ru3",
        x: 1540,
        y: 400,
        scale: 1.4,
        collide: true
    },
    {
        id: "ru4",
        x: 560,
        y: 880,
        scale: 1.2
    }
];
const desertTrees = [
    {
        id: "ds1",
        x: 340,
        y: 400,
        scale: 1.3,
        collide: true
    },
    {
        id: "ds2",
        x: 820,
        y: 540,
        scale: 1.0
    },
    {
        id: "ds3",
        x: 1300,
        y: 360,
        scale: 1.2,
        collide: true
    },
    {
        id: "ds4",
        x: 1680,
        y: 720,
        scale: 1.1
    }
];
const desertRoads = [
    {
        x: 300,
        y: 660,
        w: 1600,
        h: 55
    }
];
const lakeTrees = [
    {
        id: "lk1",
        x: 440,
        y: 300,
        scale: 1.6,
        collide: true
    },
    {
        id: "lk2",
        x: 1020,
        y: 200,
        scale: 1.4
    },
    {
        id: "lk3",
        x: 1480,
        y: 440,
        scale: 1.5,
        collide: true
    },
    {
        id: "lk4",
        x: 720,
        y: 820,
        scale: 1.3
    },
    {
        id: "lk5",
        x: 1240,
        y: 980,
        scale: 1.2
    }
];
const lakeRoads = [
    {
        x: 560,
        y: 620,
        w: 1060,
        h: 52
    }
];
const dungeonBuildings = [
    {
        id: "dgate",
        x: 720,
        y: 440,
        w: 460,
        h: 320,
        label: "Вход в подземелье"
    }
];
const dungeonTrees = [
    {
        id: "dg1",
        x: 260,
        y: 340,
        scale: 1.4,
        collide: true
    },
    {
        id: "dg2",
        x: 1180,
        y: 300,
        scale: 1.2
    },
    {
        id: "dg3",
        x: 1540,
        y: 620,
        scale: 1.5,
        collide: true
    }
];
const villageBuildings = [
    {
        id: "house1",
        x: 500,
        y: 540,
        w: 280,
        h: 200,
        label: "Дом старосты"
    },
    {
        id: "house2",
        x: 860,
        y: 720,
        w: 240,
        h: 180,
        label: "Кузница"
    },
    {
        id: "house3",
        x: 1180,
        y: 500,
        w: 260,
        h: 190,
        label: "Таверна"
    }
];
const villageTrees = [
    {
        id: "vl1",
        x: 300,
        y: 360,
        scale: 1.4,
        collide: true
    },
    {
        id: "vl2",
        x: 720,
        y: 300,
        scale: 1.2
    },
    {
        id: "vl3",
        x: 1340,
        y: 660,
        scale: 1.3,
        collide: true
    },
    {
        id: "vl4",
        x: 980,
        y: 980,
        scale: 1.1
    }
];
const villageRoads = [
    {
        x: 400,
        y: 660,
        w: 1200,
        h: 55
    }
];
const LOCATIONS = {
    city: {
        id: "city",
        name: "Город Ривендол",
        width: 2400,
        height: 1900,
        backgroundColor: "#2c241b",
        backgroundPattern: "repeating-linear-gradient(45deg, #3a2f1f22 0px, #3a2f1f22 3px, transparent 3px, transparent 28px)",
        buildings: cityBuildings,
        trees: cityTrees,
        roads: cityRoads,
        portals: [
            {
                x: 1180,
                y: 1520,
                toLocation: "forest",
                toX: 300,
                toY: 140,
                label: "→ Тёмный лес"
            },
            {
                x: 1780,
                y: 680,
                toLocation: "plains",
                toX: 200,
                toY: 720,
                label: "→ Равнины"
            },
            {
                x: 420,
                y: 1080,
                toLocation: "swamp",
                toX: 1580,
                toY: 480,
                label: "→ Болото"
            },
            {
                x: 1920,
                y: 1380,
                toLocation: "hills",
                toX: 380,
                toY: 720,
                label: "→ Холмы"
            }
        ],
        spawn: {
            x: 1180,
            y: 1460
        },
        monsterSpawns: [],
        description: "Столица королевства. Здесь кипит жизнь."
    },
    forest: {
        id: "forest",
        name: "Тёмный лес",
        width: 2300,
        height: 2000,
        backgroundColor: "#0f1a12",
        backgroundPattern: "repeating-radial-gradient(circle at 30% 40%, #1a2a1f 0px, transparent 2px)",
        buildings: [],
        trees: forestTrees,
        roads: forestRoads,
        portals: [
            {
                x: 240,
                y: 160,
                toLocation: "city",
                toX: 1140,
                toY: 1400,
                label: "→ Ривендол"
            },
            {
                x: 1780,
                y: 460,
                toLocation: "ruins",
                toX: 480,
                toY: 880,
                label: "→ Руины"
            },
            {
                x: 460,
                y: 1640,
                toLocation: "swamp",
                toX: 1060,
                toY: 320,
                label: "→ Болото"
            },
            {
                x: 1820,
                y: 1680,
                toLocation: "dungeon",
                toX: 420,
                toY: 740,
                label: "→ Подземелье"
            }
        ],
        spawn: {
            x: 300,
            y: 180
        },
        monsterSpawns: [
            {
                id: "fm1",
                x: 560,
                y: 520,
                monster: monster("wolf")
            },
            {
                id: "fm2",
                x: 980,
                y: 420,
                monster: monster("wolf")
            },
            {
                id: "fm3",
                x: 1480,
                y: 560,
                monster: monster("spirit")
            },
            {
                id: "fm4",
                x: 740,
                y: 980,
                monster: monster("bandit")
            },
            {
                id: "fm5",
                x: 1200,
                y: 1080,
                monster: monster("bandit")
            },
            {
                id: "fm6",
                x: 1720,
                y: 940,
                monster: monster("ogre")
            },
            {
                id: "fm7",
                x: 520,
                y: 1480,
                monster: monster("spirit")
            },
            {
                id: "fm8",
                x: 1380,
                y: 1580,
                monster: monster("wolf")
            }
        ],
        description: "Мрачный лес, полный опасностей."
    },
    plains: {
        id: "plains",
        name: "Зелёные равнины",
        width: 2600,
        height: 1800,
        backgroundColor: "#2a3a22",
        buildings: plainsBuildings,
        trees: plainsTrees,
        roads: plainsRoads,
        portals: [
            {
                x: 200,
                y: 720,
                toLocation: "city",
                toX: 1720,
                toY: 720,
                label: "→ Ривендол"
            },
            {
                x: 2220,
                y: 520,
                toLocation: "mountains",
                toX: 480,
                toY: 720,
                label: "→ Горы"
            },
            {
                x: 1780,
                y: 1380,
                toLocation: "hills",
                toX: 720,
                toY: 480,
                label: "→ Холмы"
            },
            {
                x: 480,
                y: 480,
                toLocation: "ruins",
                toX: 1580,
                toY: 980,
                label: "→ Руины"
            }
        ],
        spawn: {
            x: 240,
            y: 720
        },
        monsterSpawns: [
            {
                id: "pm1",
                x: 720,
                y: 460,
                monster: monster("wolf")
            },
            {
                id: "pm2",
                x: 1340,
                y: 620,
                monster: monster("spirit")
            },
            {
                id: "pm3",
                x: 1920,
                y: 840,
                monster: monster("bandit")
            },
            {
                id: "pm4",
                x: 1040,
                y: 1180,
                monster: monster("ogre")
            }
        ],
        description: "Открытые равнины."
    },
    hills: {
        id: "hills",
        name: "Холмы Ветров",
        width: 2400,
        height: 2100,
        backgroundColor: "#2c3a2f",
        buildings: [],
        trees: hillsTrees,
        roads: hillsRoads,
        portals: [
            {
                x: 380,
                y: 720,
                toLocation: "city",
                toX: 1880,
                toY: 1320,
                label: "→ Ривендол"
            },
            {
                x: 1780,
                y: 480,
                toLocation: "plains",
                toX: 2120,
                y: 940,
                label: "→ Равнины"
            },
            {
                x: 1920,
                y: 1580,
                toLocation: "lake",
                toX: 720,
                toY: 560,
                label: "→ Озеро"
            },
            {
                x: 720,
                y: 1820,
                toLocation: "village",
                toX: 1180,
                toY: 420,
                label: "→ Деревня"
            }
        ],
        spawn: {
            x: 420,
            y: 760
        },
        monsterSpawns: [
            {
                id: "hm1",
                x: 660,
                y: 420,
                monster: monster("spirit")
            },
            {
                id: "hm2",
                x: 1180,
                y: 720,
                monster: monster("wolf")
            },
            {
                id: "hm3",
                x: 1540,
                y: 980,
                monster: monster("bandit")
            },
            {
                id: "hm4",
                x: 880,
                y: 1380,
                monster: monster("ogre")
            }
        ],
        description: "Ветреные холмы."
    },
    swamp: {
        id: "swamp",
        name: "Туманное болото",
        width: 2200,
        height: 1900,
        backgroundColor: "#1a2a22",
        buildings: [],
        trees: swampTrees,
        roads: swampRoads,
        portals: [
            {
                x: 1580,
                y: 480,
                toLocation: "city",
                toX: 520,
                toY: 1120,
                label: "→ Ривендол"
            },
            {
                x: 360,
                y: 320,
                toLocation: "forest",
                toX: 480,
                toY: 1520,
                label: "→ Лес"
            },
            {
                x: 1780,
                y: 1380,
                toLocation: "dungeon",
                toX: 720,
                toY: 720,
                label: "→ Подземелье"
            },
            {
                x: 480,
                y: 1520,
                toLocation: "desert",
                toX: 1580,
                toY: 720,
                label: "→ Пески"
            }
        ],
        spawn: {
            x: 1580,
            y: 520
        },
        monsterSpawns: [
            {
                id: "sm1",
                x: 560,
                y: 660,
                monster: monster("spirit")
            },
            {
                id: "sm2",
                x: 1040,
                y: 520,
                monster: monster("wolf")
            },
            {
                id: "sm3",
                x: 1480,
                y: 980,
                monster: monster("bandit")
            },
            {
                id: "sm4",
                x: 780,
                y: 1380,
                monster: monster("ogre")
            }
        ],
        description: "Ядовитое болото."
    },
    mountains: {
        id: "mountains",
        name: "Горный перевал",
        width: 2200,
        height: 1800,
        backgroundColor: "#2a2f3a",
        buildings: mountainsBuildings,
        trees: mountainsTrees,
        roads: [],
        portals: [
            {
                x: 480,
                y: 720,
                toLocation: "plains",
                toX: 2120,
                toY: 560,
                label: "→ Равнины"
            },
            {
                x: 1780,
                y: 420,
                toLocation: "ruins",
                toX: 720,
                toY: 680,
                label: "→ Руины"
            }
        ],
        spawn: {
            x: 540,
            y: 760
        },
        monsterSpawns: [
            {
                id: "mm1",
                x: 720,
                y: 460,
                monster: monster("ogre")
            },
            {
                id: "mm2",
                x: 1180,
                y: 720,
                monster: monster("spirit")
            },
            {
                id: "mm3",
                x: 1540,
                y: 980,
                monster: monster("wolf")
            }
        ],
        description: "Суровые горы."
    },
    ruins: {
        id: "ruins",
        name: "Руины древнего храма",
        width: 2100,
        height: 1900,
        backgroundColor: "#2a2520",
        buildings: ruinsBuildings,
        trees: ruinsTrees,
        roads: [],
        portals: [
            {
                x: 480,
                y: 880,
                toLocation: "forest",
                toX: 1720,
                toY: 520,
                label: "→ Лес"
            },
            {
                x: 1580,
                y: 980,
                toLocation: "plains",
                toX: 520,
                toY: 480,
                label: "→ Равнины"
            },
            {
                x: 720,
                y: 680,
                toLocation: "mountains",
                toX: 1720,
                toY: 480,
                label: "→ Горы"
            }
        ],
        spawn: {
            x: 520,
            y: 940
        },
        monsterSpawns: [
            {
                id: "rm1",
                x: 720,
                y: 560,
                monster: monster("spirit")
            },
            {
                id: "rm2",
                x: 1180,
                y: 720,
                monster: monster("bandit")
            },
            {
                id: "rm3",
                x: 1540,
                y: 1080,
                monster: monster("ogre")
            }
        ],
        description: "Забытый храм."
    },
    desert: {
        id: "desert",
        name: "Пески Забвения",
        width: 2300,
        height: 1800,
        backgroundColor: "#c9a36b",
        buildings: [],
        trees: desertTrees,
        roads: desertRoads,
        portals: [
            {
                x: 1580,
                y: 720,
                toLocation: "swamp",
                toX: 480,
                toY: 1480,
                label: "→ Болото"
            },
            {
                x: 480,
                y: 480,
                toLocation: "forest",
                toX: 1780,
                toY: 520,
                label: "→ Лес"
            }
        ],
        spawn: {
            x: 1620,
            y: 760
        },
        monsterSpawns: [
            {
                id: "dm1",
                x: 720,
                y: 560,
                monster: monster("bandit")
            },
            {
                id: "dm2",
                x: 1180,
                y: 720,
                monster: monster("spirit")
            },
            {
                id: "dm3",
                x: 1680,
                y: 980,
                monster: monster("ogre")
            }
        ],
        description: "Жаркие пески."
    },
    lake: {
        id: "lake",
        name: "Озеро Зеркал",
        width: 2200,
        height: 1900,
        backgroundColor: "#1e3a4a",
        buildings: [],
        trees: lakeTrees,
        roads: lakeRoads,
        portals: [
            {
                x: 720,
                y: 560,
                toLocation: "hills",
                toX: 1820,
                toY: 1520,
                label: "→ Холмы"
            },
            {
                x: 1580,
                y: 1380,
                toLocation: "village",
                toX: 720,
                toY: 480,
                label: "→ Деревня"
            }
        ],
        spawn: {
            x: 780,
            y: 620
        },
        monsterSpawns: [
            {
                id: "lm1",
                x: 660,
                y: 520,
                monster: monster("spirit")
            },
            {
                id: "lm2",
                x: 1180,
                y: 780,
                monster: monster("wolf")
            },
            {
                id: "lm3",
                x: 1540,
                y: 1040,
                monster: monster("bandit")
            }
        ],
        description: "Красивое озеро."
    },
    dungeon: {
        id: "dungeon",
        name: "Подземелье Теней",
        width: 2000,
        height: 1800,
        backgroundColor: "#1a181f",
        buildings: dungeonBuildings,
        trees: dungeonTrees,
        roads: [],
        portals: [
            {
                x: 720,
                y: 720,
                toLocation: "swamp",
                toX: 1720,
                toY: 1340,
                label: "→ Болото"
            },
            {
                x: 480,
                y: 1380,
                toLocation: "forest",
                toX: 1780,
                toY: 1580,
                label: "→ Лес"
            },
            {
                x: 1580,
                y: 480,
                toLocation: "village",
                toX: 1180,
                toY: 1380,
                label: "→ Деревня"
            }
        ],
        spawn: {
            x: 780,
            y: 780
        },
        monsterSpawns: [
            {
                id: "dd1",
                x: 720,
                y: 520,
                monster: monster("ogre")
            },
            {
                id: "dd2",
                x: 1180,
                y: 720,
                monster: monster("spirit")
            },
            {
                id: "dd3",
                x: 1540,
                y: 980,
                monster: monster("bandit")
            }
        ],
        description: "Мрачное подземелье."
    },
    village: {
        id: "village",
        name: "Деревня Эльдара",
        width: 2100,
        height: 1800,
        backgroundColor: "#2a241f",
        buildings: villageBuildings,
        trees: villageTrees,
        roads: villageRoads,
        portals: [
            {
                x: 1180,
                y: 440,
                toLocation: "hills",
                toX: 720,
                toY: 1720,
                label: "→ Холмы"
            },
            {
                x: 720,
                y: 480,
                toLocation: "lake",
                toX: 1480,
                toY: 1380,
                label: "→ Озеро"
            },
            {
                x: 1580,
                y: 1380,
                toLocation: "dungeon",
                toX: 480,
                toY: 720,
                label: "→ Подземелье"
            }
        ],
        spawn: {
            x: 1180,
            y: 480
        },
        monsterSpawns: [
            {
                id: "vm1",
                x: 660,
                y: 620,
                monster: monster("wolf")
            },
            {
                id: "vm2",
                x: 1180,
                y: 820,
                monster: monster("spirit")
            },
            {
                id: "vm3",
                x: 1540,
                y: 1080,
                monster: monster("bandit")
            }
        ],
        description: "Мирная деревня."
    }
};
function rectsIntersect(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "abilitiesFor",
    ()=>abilitiesFor,
    "attackClass",
    ()=>attackClass,
    "attackRangeFor",
    ()=>attackRangeFor,
    "buyPotion",
    ()=>buyPotion,
    "createInitialEngineState",
    ()=>createInitialEngineState,
    "getStats",
    ()=>getStats,
    "isRangedClass",
    ()=>isRangedClass,
    "issueMoveCommand",
    ()=>issueMoveCommand,
    "moveToPortal",
    ()=>moveToPortal,
    "pushFloating",
    ()=>pushFloating,
    "respawnPlayer",
    ()=>respawnPlayer,
    "selectTarget",
    ()=>selectTarget,
    "spendTalent",
    ()=>spendTalent,
    "teleport",
    ()=>teleport,
    "tick",
    ()=>tick,
    "tryPortals",
    ()=>tryPortals,
    "upgradeEquipment",
    ()=>upgradeEquipment,
    "useAbility",
    ()=>useAbility,
    "usePotion",
    ()=>usePotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/world-data.ts [app-client] (ecmascript)");
;
;
const PLAYER_SPEED = 260; // px/s
const AUTO_ATTACK_INTERVAL = 1500;
const MELEE_RANGE = 90;
const RANGED_RANGE = 320;
const CASTER_CLASSES = new Set([
    "mage",
    "priest",
    "shaman"
]);
// === AGGRO SYSTEM ===
const MOB_AGGRO_RANGE = 280;
const MOB_DEAGGRO_RANGE = 420;
const MOB_ATTACK_INTERVAL = 1650;
const MOB_ATTACK_RANGE = 68;
function isRangedClass(className) {
    return className === "archer" || CASTER_CLASSES.has(className);
}
function attackRangeFor(className) {
    return isRangedClass(className) ? RANGED_RANGE : MELEE_RANGE;
}
function createInitialEngineState(character) {
    const mobs = {};
    const loc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"][character.location] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"].city;
    for (const sp of loc.monsterSpawns){
        mobs[sp.id] = {
            spawnId: sp.id,
            defId: sp.monster.id,
            name: sp.monster.name,
            level: sp.monster.level,
            x: sp.x,
            y: sp.y,
            spawnX: sp.x,
            spawnY: sp.y,
            hp: sp.monster.maxHp,
            maxHp: sp.monster.maxHp,
            alive: true,
            respawnAt: null,
            dotDamage: 0,
            dotTicksLeft: 0,
            dotNextAt: 0,
            flashUntil: 0,
            aggroed: false,
            lastAttackAt: 0
        };
    }
    const isRogue = character.className === "rogue";
    return {
        location: loc.id,
        x: character.posX,
        y: character.posY,
        moveTargetX: null,
        moveTargetY: null,
        chasingMobId: null,
        facing: 1,
        hp: character.hp,
        mp: character.mp,
        level: character.level,
        exp: character.exp,
        gold: character.gold,
        talents: character.talents ?? {},
        equipment: character.equipment ?? {
            weapon: 0,
            armor: 0,
            amulet: 0
        },
        inventory: {
            potionsHp: character.inventory?.potionsHp ?? 3,
            potionsMp: character.inventory?.potionsMp ?? 3
        },
        selectedTargetId: null,
        targetLock: false,
        mobs,
        cooldowns: {},
        buffAtk: null,
        buffDef: null,
        floatingTexts: [],
        autoAttackReadyAt: 0,
        invulnUntil: 0,
        dead: false,
        message: null,
        messageUntil: 0,
        lastSaveAt: Date.now(),
        ftId: 1,
        moveArrivalAction: null,
        // Rogue resources
        energy: isRogue ? 100 : 0,
        maxEnergy: isRogue ? 100 : 0,
        comboPoints: 0,
        lastEnergyRegen: Date.now()
    };
}
function getStats(state, className) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeStats"])({
        className,
        level: state.level,
        talents: state.talents,
        equipment: state.equipment
    });
}
function pushFloating(state, x, y, text, color) {
    state.ftId += 1;
    state.floatingTexts.push({
        id: state.ftId,
        x,
        y,
        text,
        color,
        createdAt: Date.now()
    });
    if (state.floatingTexts.length > 30) state.floatingTexts.shift();
}
function setMessage(state, msg, durationMs = 2200) {
    state.message = msg;
    state.messageUntil = Date.now() + durationMs;
}
function playerBoxAt(x, y) {
    return {
        x: x - 16,
        y: y - 10,
        w: 32,
        h: 20
    };
}
function resolveMove(state, dx, dy, buildings, mapW, mapH) {
    const tryX = Math.max(20, Math.min(mapW - 20, state.x + dx));
    const boxX = playerBoxAt(tryX, state.y);
    const blockedX = buildings.some((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectsIntersect"])(boxX, b));
    if (!blockedX) state.x = tryX;
    const tryY = Math.max(20, Math.min(mapH - 20, state.y + dy));
    const boxY = playerBoxAt(state.x, tryY);
    const blockedY = buildings.some((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectsIntersect"])(boxY, b));
    if (!blockedY) state.y = tryY;
}
function tick(state, dtMs, className) {
    const now = Date.now();
    const loc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"][state.location] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"].city;
    const buildings = loc.buildings.map((b)=>({
            x: b.x,
            y: b.y,
            w: b.w,
            h: b.h
        }));
    for (const t of loc.trees){
        if (t.collide) {
            buildings.push({
                x: t.x - 18 * t.scale,
                y: t.y - 10 * t.scale,
                w: 36 * t.scale,
                h: 26 * t.scale
            });
        }
    }
    const stats = getStats(state, className);
    // regen
    const regenFactor = dtMs / 1000;
    if (!state.dead) {
        state.hp = Math.min(stats.maxHp, state.hp + stats.maxHp * 0.015 * regenFactor);
        state.mp = Math.min(stats.maxMp, state.mp + stats.maxMp * 0.03 * regenFactor);
        // === ROGUE: Energy Regeneration ===
        if (className === "rogue" && state.energy < state.maxEnergy) {
            const now = Date.now();
            if (!state.lastEnergyRegen) state.lastEnergyRegen = now;
            const timeSinceRegen = now - state.lastEnergyRegen;
            if (timeSinceRegen >= 1000) {
                const energyRegen = 10; // 10 энергии в секунду
                state.energy = Math.min(state.maxEnergy, state.energy + energyRegen);
                state.lastEnergyRegen = now;
            }
        }
    }
    // buffs expire
    if (state.buffAtk && state.buffAtk.until < now) state.buffAtk = null;
    if (state.buffDef && state.buffDef.until < now) state.buffDef = null;
    if (state.message && state.messageUntil < now) state.message = null;
    // movement toward moveTarget
    if (!state.dead && state.moveTargetX != null && state.moveTargetY != null) {
        const dx = state.moveTargetX - state.x;
        const dy = state.moveTargetY - state.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 6) {
            state.x = state.moveTargetX;
            state.y = state.moveTargetY;
            state.moveTargetX = null;
            state.moveTargetY = null;
            state.chasingMobId = null;
            if (state.moveArrivalAction) {
                const action = state.moveArrivalAction;
                state.moveArrivalAction = null;
                if (action.type === "portal") {
                    teleport(state, action.toLocation, action.toX, action.toY);
                }
            }
        } else {
            const step = PLAYER_SPEED * dtMs / 1000;
            const ratio = Math.min(1, step / dist);
            state.facing = dx >= 0 ? 1 : -1;
            resolveMove(state, dx * ratio, dy * ratio, buildings, loc.width, loc.height);
        // if we got stuck against a building, cancel forward progress after a while (handled implicitly since dist stays)
        }
    }
    // chase logic: if chasing a mob to attack range
    if (!state.dead && state.chasingMobId) {
        const mob = state.mobs[state.chasingMobId];
        if (!mob || !mob.alive) {
            state.chasingMobId = null;
            state.moveTargetX = null;
            state.moveTargetY = null;
        } else {
            const range = attackRangeFor(className);
            const dist = Math.hypot(mob.x - state.x, mob.y - state.y);
            if (dist <= range - 10) {
                state.moveTargetX = null;
                state.moveTargetY = null;
            } else {
                state.moveTargetX = mob.x;
                state.moveTargetY = mob.y;
            }
        }
    }
    // mob dot ticks + respawn
    for (const mob of Object.values(state.mobs)){
        if (!mob.alive) {
            if (mob.respawnAt && mob.respawnAt <= now) {
                mob.alive = true;
                mob.hp = mob.maxHp;
                mob.x = mob.spawnX;
                mob.y = mob.spawnY;
                mob.respawnAt = null;
                mob.aggroed = false;
                mob.lastAttackAt = 0;
            }
            continue;
        }
        if (mob.dotTicksLeft > 0 && mob.dotNextAt <= now) {
            mob.hp = Math.max(0, mob.hp - mob.dotDamage);
            mob.dotTicksLeft -= 1;
            mob.dotNextAt = now + 1000;
            mob.flashUntil = now + 200;
            pushFloating(state, mob.x, mob.y - 40, `-${mob.dotDamage}`, "#8ce26b");
            if (mob.hp <= 0) killMob(state, mob, now);
        }
    }
    // === MOB AGGRO / CHASE / ATTACK LOGIC ===
    if (!state.dead) {
        for (const mob of Object.values(state.mobs)){
            if (!mob.alive) continue;
            const distToPlayer = Math.hypot(mob.x - state.x, mob.y - state.y);
            // Aggro
            if (!mob.aggroed && distToPlayer < MOB_AGGRO_RANGE) {
                mob.aggroed = true;
                pushFloating(state, mob.x, mob.y - 55, "!", "#ff5555");
            }
            // De-aggro
            if (mob.aggroed && distToPlayer > MOB_DEAGGRO_RANGE) {
                mob.aggroed = false;
            }
            // === Chase player when aggroed ===
            if (mob.aggroed) {
                const chaseSpeed = 135; // slower than player
                if (distToPlayer > MOB_ATTACK_RANGE + 15) {
                    const dx = state.x - mob.x;
                    const dy = state.y - mob.y;
                    const len = Math.hypot(dx, dy) || 1;
                    const step = chaseSpeed * dtMs / 1000;
                    const nextX = mob.x + dx / len * step;
                    const nextY = mob.y + dy / len * step;
                    // simple collision check
                    const box = {
                        x: nextX - 18,
                        y: nextY - 12,
                        w: 36,
                        h: 24
                    };
                    const blocked = buildings.some((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectsIntersect"])(box, b));
                    if (!blocked) {
                        mob.x = nextX;
                        mob.y = nextY;
                    }
                }
            }
            // Mob attacks player when aggroed
            if (mob.aggroed && distToPlayer <= MOB_ATTACK_RANGE && now - mob.lastAttackAt >= MOB_ATTACK_INTERVAL) {
                const incoming = Math.max(2, Math.round(mob.level * 3.8 + 4));
                if (state.invulnUntil < now) {
                    state.hp = Math.max(0, state.hp - incoming);
                    pushFloating(state, state.x, state.y - 55, `-${incoming}`, "#ff6b6b");
                    mob.flashUntil = now + 180;
                    mob.lastAttackAt = now;
                    if (state.hp <= 0) {
                        killPlayer(state);
                    }
                }
            }
        }
    }
    // auto attack
    if (!state.dead && state.selectedTargetId) {
        const mob = state.mobs[state.selectedTargetId];
        if (mob && mob.alive) {
            const range = attackRangeFor(className);
            const dist = Math.hypot(mob.x - state.x, mob.y - state.y);
            if (dist <= range && state.autoAttackReadyAt <= now) {
                const atkMult = state.buffAtk ? 1 + state.buffAtk.mult : 1;
                const power = isRangedClass(className) ? stats.spellPower || stats.attack : stats.attack;
                const crit = Math.random() * 100 < stats.critChance;
                let dmg = Math.round(power * 0.7 * atkMult);
                if (crit) dmg = Math.round(dmg * 1.6);
                mob.hp = Math.max(0, mob.hp - dmg);
                mob.flashUntil = now + 200;
                mob.aggroed = true;
                pushFloating(state, mob.x, mob.y - 40, crit ? `${dmg}!` : `${dmg}`, crit ? "#ffd24b" : "#f4f4f4");
                state.autoAttackReadyAt = now + AUTO_ATTACK_INTERVAL;
                if (mob.hp <= 0) killMob(state, mob, now);
                // monster hits back
                const defMult = state.buffDef ? 1 + state.buffDef.mult : 1;
                const incoming = Math.max(1, Math.round((mob.level * 4 - stats.defense * defMult) * 0.6 + 3));
                if (state.invulnUntil < now) {
                    state.hp = Math.max(0, state.hp - incoming);
                    pushFloating(state, state.x, state.y - 50, `-${incoming}`, "#ff6b6b");
                    if (state.hp <= 0) killPlayer(state);
                }
            }
        } else {
            state.selectedTargetId = null;
        }
    }
// autosave marker handled outside
}
function killMob(state, mob, now) {
    mob.alive = false;
    mob.respawnAt = now + 9000;
    mob.dotTicksLeft = 0;
    const monsterExp = Math.round(20 + mob.level * 12);
    const monsterGold = Math.round(4 + mob.level * 2.4);
    state.exp += monsterExp;
    state.gold += monsterGold;
    pushFloating(state, mob.x, mob.y - 60, `+${monsterExp} опыта`, "#7ec8ff");
    pushFloating(state, mob.x, mob.y - 78, `+${monsterGold} золота`, "#ffd24b");
    if (state.selectedTargetId === mob.spawnId) state.selectedTargetId = null;
    handleLevelUps(state);
}
function handleLevelUps(state) {
    let leveled = false;
    while(state.exp >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expForLevel"])(state.level)){
        state.exp -= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expForLevel"])(state.level);
        state.level += 1;
        leveled = true;
    }
    if (leveled) {
        setMessage(state, `Новый уровень: ${state.level}!`, 3000);
    }
}
function killPlayer(state) {
    state.dead = true;
    state.selectedTargetId = null;
    state.moveTargetX = null;
    state.moveTargetY = null;
    state.chasingMobId = null;
    setMessage(state, "Вы погибли... возрождение в городе.", 3000);
}
function respawnPlayer(state, className) {
    const loc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"].city;
    teleport(state, "city", loc.spawn.x, loc.spawn.y);
    const stats = getStats(state, className);
    state.hp = Math.round(stats.maxHp * 0.6);
    state.mp = Math.round(stats.maxMp * 0.6);
    state.dead = false;
    state.invulnUntil = Date.now() + 3000;
}
function teleport(state, toLocation, x, y) {
    const loc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"][toLocation];
    if (!loc) return;
    state.location = toLocation;
    state.x = x;
    state.y = y;
    state.moveTargetX = null;
    state.moveTargetY = null;
    state.chasingMobId = null;
    state.selectedTargetId = null;
    state.moveArrivalAction = null;
    const mobs = {};
    for (const sp of loc.monsterSpawns){
        mobs[sp.id] = {
            spawnId: sp.id,
            defId: sp.monster.id,
            name: sp.monster.name,
            level: sp.monster.level,
            x: sp.x,
            y: sp.y,
            spawnX: sp.x,
            spawnY: sp.y,
            hp: sp.monster.maxHp,
            maxHp: sp.monster.maxHp,
            alive: true,
            respawnAt: null,
            dotDamage: 0,
            dotTicksLeft: 0,
            dotNextAt: 0,
            flashUntil: 0,
            aggroed: false,
            lastAttackAt: 0
        };
    }
    state.mobs = mobs;
}
function issueMoveCommand(state, x, y) {
    if (state.dead) return;
    state.moveTargetX = x;
    state.moveTargetY = y;
    state.chasingMobId = null;
    if (!state.targetLock) state.selectedTargetId = null;
}
function selectTarget(state, mobId) {
    if (state.dead) return;
    const mob = state.mobs[mobId];
    if (!mob || !mob.alive) return;
    state.selectedTargetId = mobId;
    mob.aggroed = true; // игрок атакует — моб становится агрессивным
}
function useAbility(state, className, ability) {
    if (state.dead) return {
        ok: false,
        reason: "Вы мертвы"
    };
    const now = Date.now();
    const readyAt = state.cooldowns[ability.id] ?? 0;
    if (readyAt > now) return {
        ok: false,
        reason: "Способность перезаряжается"
    };
    const stats = getStats(state, className);
    if (state.mp < ability.manaCost) return {
        ok: false,
        reason: "Недостаточно маны"
    };
    let mob = null;
    if (ability.targeted) {
        mob = state.selectedTargetId ? state.mobs[state.selectedTargetId] : null;
        if (!mob || !mob.alive) return {
            ok: false,
            reason: "Нет цели"
        };
        const dist = Math.hypot(mob.x - state.x, mob.y - state.y);
        if (dist > attackRangeFor(className) + 60) return {
            ok: false,
            reason: "Цель слишком далеко"
        };
    }
    // === ROGUE RESOURCE SYSTEM ===
    if (className === "rogue") {
        const isGenerator = [
            "r1",
            "r2"
        ].includes(ability.id); // Коварный удар / Удар в спину
        const isFinisher = [
            "r3",
            "r4",
            "r5"
        ].includes(ability.id); // Отравление / Потрошение / Ядовитый клинок
        if (isGenerator) {
            if (state.energy < 35) return {
                ok: false,
                reason: "Недостаточно энергии"
            };
            state.energy -= 35;
            if (state.comboPoints < 5) state.comboPoints += 1;
        } else if (isFinisher) {
            if (state.comboPoints < 1) return {
                ok: false,
                reason: "Нет комбо-очков"
            };
            state.comboPoints = 0; // Сбрасываем комбо
        } else {
            if (state.energy < ability.manaCost) return {
                ok: false,
                reason: "Недостаточно энергии"
            };
            state.energy -= ability.manaCost;
        }
    } else {
        state.mp -= ability.manaCost;
    }
    state.cooldowns[ability.id] = now + ability.cooldown * 1000;
    const power = isRangedClass(className) ? Math.max(stats.spellPower, stats.attack) : stats.attack;
    const atkMult = state.buffAtk ? 1 + state.buffAtk.mult : 1;
    switch(ability.type){
        case "damage":
            {
                const crit = Math.random() * 100 < stats.critChance;
                let dmg = Math.round(power * ability.power * atkMult);
                if (crit) dmg = Math.round(dmg * 1.6);
                mob.hp = Math.max(0, mob.hp - dmg);
                mob.flashUntil = now + 250;
                pushFloating(state, mob.x, mob.y - 40, crit ? `${dmg}!` : `${dmg}`, crit ? "#ffd24b" : "#ff9d4b");
                if (mob.hp <= 0) killMob(state, mob, now);
                break;
            }
        case "execute":
            {
                const isLow = mob.hp <= mob.maxHp * 0.35;
                const mult = isLow ? ability.power * 1.6 : ability.power;
                let dmg = Math.round(power * mult * atkMult);
                const crit = Math.random() * 100 < stats.critChance;
                if (crit) dmg = Math.round(dmg * 1.6);
                mob.hp = Math.max(0, mob.hp - dmg);
                mob.flashUntil = now + 250;
                pushFloating(state, mob.x, mob.y - 40, crit ? `${dmg}!` : `${dmg}`, "#ff5b5b");
                if (mob.hp <= 0) killMob(state, mob, now);
                break;
            }
        case "dot":
            {
                const initial = Math.round(power * ability.power * 0.4);
                mob.hp = Math.max(0, mob.hp - initial);
                mob.dotDamage = Math.round(power * ability.power * 0.22);
                mob.dotTicksLeft = 4;
                mob.dotNextAt = now + 1000;
                mob.flashUntil = now + 250;
                pushFloating(state, mob.x, mob.y - 40, `${initial}`, "#8ce26b");
                if (mob.hp <= 0) killMob(state, mob, now);
                break;
            }
        case "heal":
            {
                const healAmt = Math.round((stats.spellPower || stats.attack) * ability.power * 0.8 + 20);
                state.hp = Math.min(stats.maxHp, state.hp + healAmt);
                pushFloating(state, state.x, state.y - 50, `+${healAmt}`, "#6ef07a");
                break;
            }
        case "buff_atk":
            {
                state.buffAtk = {
                    mult: ability.power,
                    until: now + 12000
                };
                pushFloating(state, state.x, state.y - 50, "Сила атаки!", "#ffd24b");
                break;
            }
        case "buff_def":
            {
                state.buffDef = {
                    mult: ability.power,
                    until: now + 12000
                };
                pushFloating(state, state.x, state.y - 50, "Защита!", "#7ec8ff");
                break;
            }
    }
    return {
        ok: true
    };
}
function usePotion(state, className, kind) {
    const stats = getStats(state, className);
    if (kind === "hp") {
        if (state.inventory.potionsHp <= 0) return {
            ok: false,
            reason: "Нет зелий здоровья"
        };
        state.inventory.potionsHp -= 1;
        state.hp = Math.min(stats.maxHp, state.hp + stats.maxHp * 0.4);
        pushFloating(state, state.x, state.y - 50, "+HP", "#6ef07a");
    } else {
        if (state.inventory.potionsMp <= 0) return {
            ok: false,
            reason: "Нет зелий маны"
        };
        state.inventory.potionsMp -= 1;
        state.mp = Math.min(stats.maxMp, state.mp + stats.maxMp * 0.4);
        pushFloating(state, state.x, state.y - 50, "+MP", "#7ec8ff");
    }
    return {
        ok: true
    };
}
function buyPotion(state, kind) {
    const cost = 15;
    if (state.gold < cost) return {
        ok: false,
        reason: "Недостаточно золота"
    };
    state.gold -= cost;
    if (kind === "hp") state.inventory.potionsHp += 1;
    else state.inventory.potionsMp += 1;
    return {
        ok: true
    };
}
function spendTalent(state, branch) {
    const spent = Object.values(state.talents).reduce((a, b)=>a + (b ?? 0), 0);
    const available = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["talentPointsForLevel"])(state.level) - spent;
    if (available <= 0) return {
        ok: false,
        reason: "Нет свободных очков"
    };
    const current = state.talents[branch] ?? 0;
    if (current >= 5) return {
        ok: false,
        reason: "Ветка изучена полностью"
    };
    state.talents = {
        ...state.talents,
        [branch]: current + 1
    };
    return {
        ok: true
    };
}
function upgradeEquipment(state, slot) {
    const current = state.equipment[slot] ?? 0;
    if (current >= 10) return {
        ok: false,
        reason: "Максимальный уровень"
    };
    const cost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upgradeCost"])(current);
    if (state.gold < cost) return {
        ok: false,
        reason: "Недостаточно золота"
    };
    state.gold -= cost;
    state.equipment = {
        ...state.equipment,
        [slot]: current + 1
    };
    return {
        ok: true
    };
}
function tryPortals(state) {
    const loc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"][state.location];
    if (!loc) return;
    for (const portal of loc.portals){
        const dist = Math.hypot(portal.x - state.x, portal.y - state.y);
        if (dist < 55) {
            teleport(state, portal.toLocation, portal.toX, portal.toY);
            return;
        }
    }
}
function moveToPortal(state, portalX, portalY, toLocation, toX, toY) {
    state.moveTargetX = portalX;
    state.moveTargetY = portalY;
    state.chasingMobId = null;
    state.moveArrivalAction = {
        type: "portal",
        toLocation,
        toX,
        toY
    };
}
function attackClass(className) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(className);
}
function abilitiesFor(className) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLASS_ABILITIES"][className] ?? [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/TopBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopBar",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-client] (ecmascript)");
"use client";
;
;
;
function MenuButton({ icon, label, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        title: label,
        className: "group relative flex h-11 w-11 items-center justify-center rounded-xl border border-amber-900/60 bg-gradient-to-b from-[#3a2a1c] to-[#211611] text-amber-200 shadow-inner shadow-black/60 transition-all hover:border-amber-500 hover:text-amber-50 active:scale-[0.96]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: icon,
                className: "h-6 w-6"
            }, void 0, false, {
                fileName: "[project]/src/components/game/TopBar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-5 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-2 py-0.5 text-[9px] text-amber-300 group-hover:block",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/game/TopBar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/TopBar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = MenuButton;
function TopBar(props) {
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(props.className);
    const hpPct = Math.max(0, Math.min(100, props.hp / props.maxHp * 100));
    const mpPct = Math.max(0, Math.min(100, props.mp / props.maxMp * 100));
    const mapDotX = props.playerPos.x / props.mapSize.w * 100;
    const mapDotY = props.playerPos.y / props.mapSize.h * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-x-0 top-0 z-40 flex items-start justify-between gap-4 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto flex items-center gap-3 rounded-2xl border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 shadow-inner",
                        style: {
                            borderColor: cls.color,
                            background: `radial-gradient(circle at 30% 30%, ${cls.color}44, #1a1108)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: cls.icon,
                            className: "h-9 w-9 text-white drop-shadow"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/TopBar.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/TopBar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-56",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate text-[15px] font-semibold text-amber-100",
                                                children: props.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/TopBar.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded bg-amber-900/80 px-2 py-px text-[10px] font-bold text-amber-200",
                                                children: [
                                                    "LVL ",
                                                    props.level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/TopBar.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/TopBar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-amber-400/80",
                                        children: props.faction === "light" ? "Свет" : "Тьма"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/TopBar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-0.5 text-[10px] text-amber-300/70 tracking-wider",
                                children: cls.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 h-2.5 w-full overflow-hidden rounded-full border border-black/70 bg-black/60",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 transition-all duration-200",
                                    style: {
                                        width: `${hpPct}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TopBar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 h-2 w-full overflow-hidden rounded-full border border-black/70 bg-black/60",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 transition-all duration-200",
                                    style: {
                                        width: `${mpPct}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TopBar.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.5 flex justify-between text-[9px] text-amber-400/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "HP: ",
                                            Math.round(props.hp),
                                            "/",
                                            props.maxHp
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/TopBar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "MP: ",
                                            Math.round(props.mp),
                                            "/",
                                            props.maxMp
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/TopBar.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TopBar.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/TopBar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto mt-1 flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 rounded-full border border-amber-900/70 bg-black/70 px-5 py-1 text-sm text-amber-200 shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "map",
                                className: "h-4 w-4 text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium tracking-wide",
                                children: props.locationName
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TopBar.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 rounded-2xl border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.55)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuButton, {
                                icon: "user",
                                label: "Персонаж",
                                onClick: ()=>props.onOpen("character")
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuButton, {
                                icon: "book",
                                label: "Таланты",
                                onClick: ()=>props.onOpen("talents")
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuButton, {
                                icon: "anvil",
                                label: "Кузница",
                                onClick: ()=>props.onOpen("forge")
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuButton, {
                                icon: "map",
                                label: "Карта мира",
                                onClick: ()=>props.onOpen("worldmap")
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuButton, {
                                icon: "gear",
                                label: "Настройки",
                                onClick: ()=>props.onOpen("settings")
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuButton, {
                                icon: "question",
                                label: "Помощь",
                                onClick: ()=>props.onOpen("help")
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TopBar.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/TopBar.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto flex flex-col items-end gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 rounded-2xl border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 px-4 py-1.5 text-amber-200 shadow-[0_8px_24px_rgba(0,0,0,0.55)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "coin",
                                        className: "h-5 w-5 text-yellow-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/TopBar.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-lg font-semibold tabular-nums tracking-wider",
                                        children: props.gold
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/TopBar.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: props.onToggleFullscreen,
                                title: "Полный экран",
                                className: "flex h-10 w-10 items-center justify-center rounded-xl border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 text-amber-200 shadow transition hover:text-amber-50 active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "expand",
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TopBar.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: props.onLogout,
                                title: "Выйти",
                                className: "flex h-10 w-10 items-center justify-center rounded-xl border border-red-900/50 bg-gradient-to-b from-[#2a1815] to-[#140d09] text-red-300 shadow transition hover:text-red-200 active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "close",
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TopBar.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TopBar.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-36 w-36 overflow-hidden rounded-2xl border-2 border-amber-800/80 bg-[#0c1a10] shadow-[0_10px_30px_rgba(0,0,0,0.6)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-70",
                                style: {
                                    background: "radial-gradient(circle at 50% 50%, #1e3320, #08120a)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            props.portals.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_8px_3px_rgba(168,85,247,0.9)]",
                                    style: {
                                        left: `${p.x / props.mapSize.w * 100}%`,
                                        top: `${p.y / props.mapSize.h * 100}%`
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/components/game/TopBar.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)),
                            props.mobDots.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
                                    style: {
                                        left: `${m.x / props.mapSize.w * 100}%`,
                                        top: `${m.y / props.mapSize.h * 100}%`,
                                        background: m.alive ? "#f87171" : "transparent",
                                        boxShadow: m.alive ? "0 0 4px #f87171" : "none"
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/components/game/TopBar.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-emerald-400 shadow-[0_0_10px_3px_rgba(52,211,153,0.9)]",
                                style: {
                                    left: `${mapDotX}%`,
                                    top: `${mapDotY}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-full bg-black/80 px-3 py-px text-[10px] font-medium text-amber-200",
                                children: props.locationName
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TopBar.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TopBar.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/TopBar.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/TopBar.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c1 = TopBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "MenuButton");
__turbopack_context__.k.register(_c1, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/BottomBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomBar",
    ()=>BottomBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Icon.tsx [app-client] (ecmascript)");
"use client";
;
;
function ResourceOrb({ value, max, color, label, icon }) {
    const pct = Math.max(0, Math.min(100, value / max * 100));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-black/80 bg-black/70 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.6)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-[3px] rounded-full opacity-30",
                        style: {
                            background: `radial-gradient(circle at 40% 30%, ${color}55, transparent)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/BottomBar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-[3px] rounded-full transition-all duration-200",
                        style: {
                            background: `conic-gradient(${color} ${pct * 3.6}deg, transparent ${pct * 3.6}deg)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/BottomBar.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex h-14 w-14 flex-col items-center justify-center rounded-full border border-black/60 bg-black/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[15px] font-bold tabular-nums text-white tracking-[-0.5px]",
                                children: Math.round(value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/BottomBar.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[8px] font-medium text-white/60 -mt-0.5",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/BottomBar.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/BottomBar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/BottomBar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 text-[10px] text-white/50 tabular-nums",
                children: [
                    Math.round(value),
                    " / ",
                    max
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/BottomBar.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/BottomBar.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = ResourceOrb;
function BottomBar(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-x-0 bottom-4 z-40 flex items-end justify-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: props.onToggleLock,
                title: props.targetLock ? "Снять блокировку цели" : "Заблокировать цель",
                className: `pointer-events-auto flex h-14 w-14 items-center justify-center self-center rounded-2xl border-2 shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-all active:scale-[0.95] ${props.targetLock ? "border-amber-400 bg-amber-800/70 text-amber-100" : "border-amber-900/60 bg-gradient-to-b from-[#241811] to-[#140d09] text-amber-300 hover:border-amber-700"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "lock",
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/BottomBar.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/BottomBar.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto flex items-end gap-3 rounded-3xl border border-amber-900/70 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.65)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceOrb, {
                        value: props.hp,
                        max: props.maxHp,
                        color: "#ef4444",
                        label: "HP",
                        icon: "potionHp"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/BottomBar.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end gap-2 px-2",
                        children: props.abilities.map((ab, i)=>{
                            const readyAt = props.cooldownReadyAt[ab.id] ?? 0;
                            const remaining = Math.max(0, readyAt - props.now);
                            const cdPct = remaining > 0 ? Math.min(100, remaining / (ab.cooldown * 1000) * 100) : 0;
                            const noMana = props.mana < ab.manaCost;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>props.onUseAbility(i),
                                disabled: noMana,
                                title: `${ab.name} — ${ab.manaCost} маны`,
                                className: `group relative flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-2xl border-2 shadow-[0_4px_12px_rgba(0,0,0,0.4)] active:scale-[0.96] transition-all ${noMana ? "border-sky-900/70 opacity-60" : "border-amber-800/80 hover:border-amber-600"}`,
                                style: {
                                    background: "radial-gradient(circle at 35% 25%, #3a2a1c, #140d09)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: ab.icon,
                                        className: "h-8 w-8 text-amber-100 drop-shadow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/BottomBar.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-1.5 top-1 text-[10px] font-bold text-amber-400/90",
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/BottomBar.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-1 right-1.5 text-[9px] font-semibold text-sky-400",
                                        children: ab.manaCost
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/BottomBar.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    remaining > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center bg-black/75 text-xl font-bold text-white/90",
                                        style: {
                                            clipPath: `inset(${100 - cdPct}% 0 0 0)`
                                        },
                                        children: (remaining / 1000).toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/BottomBar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, ab.id, true, {
                                fileName: "[project]/src/components/game/BottomBar.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/BottomBar.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceOrb, {
                        value: props.mp,
                        max: props.maxMp,
                        color: "#3b82f6",
                        label: "MP",
                        icon: "potionMp"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/BottomBar.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5 pl-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>props.onUsePotion("hp"),
                                className: "group relative flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-red-900/70 shadow-inner active:scale-[0.96] transition-all",
                                style: {
                                    background: "radial-gradient(circle at 35% 25%, #3a1c1c, #140909)"
                                },
                                title: "Зелье здоровья",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "potionHp",
                                        className: "h-6 w-6 text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/BottomBar.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -bottom-0.5 right-1 text-[10px] font-bold text-red-300 tabular-nums",
                                        children: props.potionsHp
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/BottomBar.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/BottomBar.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>props.onUsePotion("mp"),
                                className: "group relative flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-sky-900/70 shadow-inner active:scale-[0.96] transition-all",
                                style: {
                                    background: "radial-gradient(circle at 35% 25%, #1c283a, #090d14)"
                                },
                                title: "Зелье маны",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "potionMp",
                                        className: "h-6 w-6 text-sky-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/BottomBar.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -bottom-0.5 right-1 text-[10px] font-bold text-sky-300 tabular-nums",
                                        children: props.potionsMp
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/BottomBar.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/BottomBar.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/BottomBar.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/BottomBar.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto flex h-14 w-14 items-center justify-center self-center rounded-2xl border-[3px] border-amber-500/80 bg-gradient-to-b from-[#3a2a1c] to-[#140d09] text-xl font-bold text-amber-200 shadow-[0_6px_20px_rgba(0,0,0,0.5)]",
                children: props.level
            }, void 0, false, {
                fileName: "[project]/src/components/game/BottomBar.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/BottomBar.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c1 = BottomBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "ResourceOrb");
__turbopack_context__.k.register(_c1, "BottomBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/Modals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CharacterModal",
    ()=>CharacterModal,
    "ForgeModal",
    ()=>ForgeModal,
    "HelpModal",
    ()=>HelpModal,
    "ModalShell",
    ()=>ModalShell,
    "SettingsModal",
    ()=>SettingsModal,
    "TalentsModal",
    ()=>TalentsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ModalShell({ title, onClose, children, wide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4",
        onMouseDown: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onMouseDown: (e)=>e.stopPropagation(),
            className: `relative max-h-[88vh] overflow-y-auto rounded-3xl border-2 border-amber-800/90 bg-gradient-to-b from-[#2a2219] to-[#140d09] p-6 text-amber-100 shadow-[0_25px_70px_rgba(0,0,0,0.85)] ${wide ? "w-full max-w-4xl" : "w-full max-w-lg"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5 flex items-center justify-between border-b border-amber-900/70 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold tracking-[0.5px] text-amber-200",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/Modals.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px w-12 bg-amber-700 mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/Modals.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex h-9 w-9 items-center justify-center rounded-full border border-amber-900/60 hover:bg-amber-900/30 text-amber-300 transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Modals.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/game/Modals.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = ModalShell;
function CharacterModal({ onClose, name, faction, race, className, level, exp, expNeeded, stats }) {
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClass"])(className);
    const rows = [
        [
            "Сила",
            stats.str
        ],
        [
            "Ловкость",
            stats.agi
        ],
        [
            "Интеллект",
            stats.int
        ],
        [
            "Выносливость",
            stats.vit
        ],
        [
            "Атака",
            stats.attack
        ],
        [
            "Сила магии",
            stats.spellPower
        ],
        [
            "Защита",
            stats.defense
        ],
        [
            "Шанс крита",
            `${stats.critChance}%`
        ],
        [
            "Здоровье (макс)",
            stats.maxHp
        ],
        [
            "Мана (макс)",
            stats.maxMp
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalShell, {
        title: "Персонаж",
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-16 w-16 items-center justify-center rounded-xl border-2",
                        style: {
                            borderColor: cls.color,
                            background: `radial-gradient(circle at 30% 30%, ${cls.color}55, #1a1108)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: cls.icon,
                            className: "h-9 w-9 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-amber-300/80",
                                children: [
                                    faction === "light" ? "Свет" : "Тьма",
                                    " · ",
                                    race,
                                    " · ",
                                    cls.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Modals.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-xs text-amber-300/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Уровень ",
                                    level
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    exp,
                                    " / ",
                                    expNeeded,
                                    " опыта"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 h-2.5 w-full overflow-hidden rounded-full border border-black/60 bg-black/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-gradient-to-r from-purple-700 to-purple-400",
                            style: {
                                width: `${Math.min(100, exp / expNeeded * 100)}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Modals.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-2 gap-2 text-sm",
                children: rows.map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between rounded-lg border border-amber-900/50 bg-black/20 px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-amber-300/80",
                                children: k
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: v
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, k, true, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/game/Modals.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/Modals.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c1 = CharacterModal;
function TalentsModal({ onClose, talents, level, onSpend }) {
    const spent = Object.values(talents).reduce((a, b)=>a + (b ?? 0), 0);
    const available = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["talentPointsForLevel"])(level) - spent;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalShell, {
        title: "Дерево талантов",
        onClose: onClose,
        wide: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 text-sm text-amber-300/80",
                children: [
                    "Свободные очки: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-amber-100",
                        children: available
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 134,
                        columnNumber: 71
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Modals.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TALENT_BRANCHES"].map((branch)=>{
                    const rank = talents[branch.id] ?? 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-amber-900/50 bg-black/20 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: branch.icon,
                                        className: "h-5 w-5 text-amber-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/Modals.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: branch.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/Modals.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 text-xs text-amber-300/70",
                                children: branch.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: Array.from({
                                    length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TALENT_RANKS"]
                                }).map((_, i)=>{
                                    const filled = i < rank;
                                    const isNext = i === rank;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: !isNext || available <= 0,
                                        onClick: ()=>onSpend(branch.id),
                                        className: `h-8 flex-1 rounded border text-xs font-bold transition ${filled ? "border-amber-400 bg-amber-600/70 text-white" : isNext && available > 0 ? "border-amber-500 bg-amber-900/40 text-amber-200 hover:bg-amber-800/60" : "border-amber-900/40 bg-black/30 text-amber-700"}`,
                                        children: i + 1
                                    }, i, false, {
                                        fileName: "[project]/src/components/game/Modals.tsx",
                                        lineNumber: 150,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-[11px] text-amber-300/60",
                                children: [
                                    "Изучено: ",
                                    rank,
                                    "/",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TALENT_RANKS"]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this)
                        ]
                    }, branch.id, true, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 139,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/game/Modals.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/Modals.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_c2 = TalentsModal;
function ForgeModal({ onClose, equipment, gold, onUpgrade, onBuyPotion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalShell, {
        title: "Кузница и лавка",
        onClose: onClose,
        wide: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center gap-2 text-sm text-amber-300/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "coin",
                        className: "h-4 w-4 text-yellow-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    " Золото: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-amber-100",
                        children: gold
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 192,
                        columnNumber: 74
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Modals.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EQUIPMENT_SLOTS"].map((slot)=>{
                    const lvl = equipment[slot.id] ?? 0;
                    const maxed = lvl >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_EQUIP_LEVEL"];
                    const cost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upgradeCost"])(lvl);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-amber-900/50 bg-black/20 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: slot.icon,
                                        className: "h-5 w-5 text-amber-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/Modals.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: slot.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/Modals.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-xs text-amber-300/70",
                                children: [
                                    "Уровень: ",
                                    lvl,
                                    "/",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_EQUIP_LEVEL"]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 h-2 w-full overflow-hidden rounded-full border border-black/60 bg-black/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-gradient-to-r from-orange-700 to-orange-400",
                                    style: {
                                        width: `${lvl / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_EQUIP_LEVEL"] * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/Modals.tsx",
                                    lineNumber: 207,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: maxed || gold < cost,
                                onClick: ()=>onUpgrade(slot.id),
                                className: "w-full rounded-lg border border-amber-700 bg-amber-900/50 py-1.5 text-sm font-semibold text-amber-100 transition hover:bg-amber-800/60 disabled:cursor-not-allowed disabled:opacity-40",
                                children: maxed ? "Максимум" : `Улучшить (${cost} зол.)`
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this)
                        ]
                    }, slot.id, true, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 200,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/game/Modals.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 border-t border-amber-900/50 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-sm font-semibold text-amber-200",
                        children: "Лавка зелий"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onBuyPotion("hp"),
                                disabled: gold < 15,
                                className: "flex flex-1 items-center justify-between rounded-lg border border-red-900/60 bg-black/20 px-3 py-2 text-sm hover:bg-red-950/40 disabled:opacity-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "potionHp",
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/Modals.tsx",
                                                lineNumber: 228,
                                                columnNumber: 55
                                            }, this),
                                            " Зелье здоровья"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/Modals.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-300",
                                        children: "15 зол."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/Modals.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onBuyPotion("mp"),
                                disabled: gold < 15,
                                className: "flex flex-1 items-center justify-between rounded-lg border border-sky-900/60 bg-black/20 px-3 py-2 text-sm hover:bg-sky-950/40 disabled:opacity-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "potionMp",
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/Modals.tsx",
                                                lineNumber: 236,
                                                columnNumber: 55
                                            }, this),
                                            " Зелье маны"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/Modals.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-300",
                                        children: "15 зол."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/Modals.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/Modals.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/Modals.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/Modals.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/Modals.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_c3 = ForgeModal;
function SettingsModal({ onClose, musicVolume, sfxVolume, showGrid, showNames, onChange, onLogout, onExitToSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalShell, {
        title: "Настройки",
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "mb-1 flex justify-between text-amber-300/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Громкость музыки"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/Modals.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        musicVolume,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/Modals.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "range",
                            min: 0,
                            max: 100,
                            value: musicVolume,
                            onChange: (e)=>onChange({
                                    musicVolume: Number(e.target.value)
                                }),
                            className: "w-full accent-amber-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "mb-1 flex justify-between text-amber-300/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Громкость эффектов"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/Modals.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        sfxVolume,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/Modals.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "range",
                            min: 0,
                            max: 100,
                            value: sfxVolume,
                            onChange: (e)=>onChange({
                                    sfxVolume: Number(e.target.value)
                                }),
                            className: "w-full accent-amber-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex items-center justify-between rounded-lg border border-amber-900/50 bg-black/20 px-3 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Показывать сетку карты"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: showGrid,
                            onChange: (e)=>onChange({
                                    showGrid: e.target.checked
                                }),
                            className: "h-4 w-4 accent-amber-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex items-center justify-between rounded-lg border border-amber-900/50 bg-black/20 px-3 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Показывать имена"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: showNames,
                            onChange: (e)=>onChange({
                                    showNames: e.target.checked
                                }),
                            className: "h-4 w-4 accent-amber-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 border-t border-amber-900/50 pt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onExitToSelect,
                            className: "flex-1 rounded-lg border border-amber-700 bg-amber-900/40 py-2 font-semibold hover:bg-amber-800/50",
                            children: "Выбор персонажа"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onLogout,
                            className: "flex-1 rounded-lg border border-red-800 bg-red-950/40 py-2 font-semibold text-red-200 hover:bg-red-900/50",
                            children: "Выйти из аккаунта"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Modals.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Modals.tsx",
            lineNumber: 266,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/game/Modals.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_c4 = SettingsModal;
function HelpModal({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalShell, {
        title: "Помощь",
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "list-disc space-y-2 pl-5 text-sm text-amber-200/90",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Левая кнопка мыши по земле — передвижение персонажа."
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Левая кнопка мыши по врагу — выбрать цель и начать автоатаку в радиусе досягаемости."
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Клавиши 1–5 или иконки внизу — применение способностей по выбранной цели."
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Зелья здоровья/маны восстанавливают часть характеристик, покупаются в кузнице."
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Портал в городе переносит в Тёмный лес и обратно."
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Здания блокируют проход — их нельзя пересечь."
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Очки талантов даются за уровень, тратятся в дереве талантов."
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Кнопка во весь экран разворачивает игру на весь монитор."
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Modals.tsx",
                    lineNumber: 313,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Modals.tsx",
            lineNumber: 305,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/game/Modals.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
_c5 = HelpModal;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ModalShell");
__turbopack_context__.k.register(_c1, "CharacterModal");
__turbopack_context__.k.register(_c2, "TalentsModal");
__turbopack_context__.k.register(_c3, "ForgeModal");
__turbopack_context__.k.register(_c4, "SettingsModal");
__turbopack_context__.k.register(_c5, "HelpModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/WorldMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorldMap",
    ()=>WorldMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/world-data.ts [app-client] (ecmascript)");
"use client";
;
;
function WorldMap({ currentLocation, onClose, onTravel }) {
    const scale = 0.28;
    const mapW = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORLD_MAP"].width * scale;
    const mapH = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORLD_MAP"].height * scale;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/90",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[920px] rounded-2xl border border-amber-700/60 bg-[#1a140f] p-6 text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-amber-300",
                                    children: "Карта мира"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/WorldMap.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-amber-400/70",
                                    children: "Кликните по локации, чтобы переместиться"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/WorldMap.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/WorldMap.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "rounded bg-zinc-800 px-4 py-1.5 text-sm hover:bg-zinc-700",
                            children: "Закрыть"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/WorldMap.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/WorldMap.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto overflow-hidden rounded-xl border border-amber-900/70 bg-[#0f0b07]",
                    style: {
                        width: mapW,
                        height: mapH
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 opacity-20",
                            style: {
                                backgroundImage: `
                linear-gradient(#3a2f1f 1px, transparent 1px),
                linear-gradient(90deg, #3a2f1f 1px, transparent 1px)
              `,
                                backgroundSize: "48px 48px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/WorldMap.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORLD_MAP"].connections.map(([a, b], i)=>{
                            const locA = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORLD_MAP"].locations.find((l)=>l.id === a);
                            const locB = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORLD_MAP"].locations.find((l)=>l.id === b);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: locA.x * scale,
                                    y1: locA.y * scale,
                                    x2: locB.x * scale,
                                    y2: locB.y * scale,
                                    stroke: "#8b5e2b",
                                    strokeWidth: "3",
                                    strokeOpacity: "0.6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/WorldMap.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/components/game/WorldMap.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this);
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORLD_MAP"].locations.map((loc)=>{
                            const isCurrent = loc.id === currentLocation;
                            const locData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"][loc.id];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onTravel(loc.id),
                                disabled: isCurrent,
                                className: `absolute flex flex-col items-center justify-center rounded-lg border transition-all ${isCurrent ? "border-emerald-400 bg-emerald-900/60 text-emerald-300" : "border-amber-700 bg-[#2a2118] hover:border-amber-400 hover:bg-[#3a2f1f]"}`,
                                style: {
                                    left: loc.x * scale - 42,
                                    top: loc.y * scale - 28,
                                    width: 84,
                                    height: 56
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold tracking-wider",
                                        children: loc.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/WorldMap.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] text-emerald-400",
                                        children: "ВЫ ЗДЕСЬ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/WorldMap.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, loc.id, true, {
                                fileName: "[project]/src/components/game/WorldMap.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/WorldMap.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 text-center text-xs text-amber-400/60",
                    children: [
                        "Всего локаций: ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORLD_MAP"].locations.length,
                        " • Нажмите на локацию для быстрого перемещения"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/WorldMap.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/WorldMap.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/game/WorldMap.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = WorldMap;
var _c;
__turbopack_context__.k.register(_c, "WorldMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/useSound.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSound",
    ()=>useSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useSound(volumeRef) {
    _s();
    const ctxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ensureCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSound.useCallback[ensureCtx]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!ctxRef.current) {
                const Ctor = window.AudioContext || window.webkitAudioContext;
                if (!Ctor) return null;
                ctxRef.current = new Ctor();
            }
            if (ctxRef.current.state === "suspended") {
                ctxRef.current.resume().catch({
                    "useSound.useCallback[ensureCtx]": ()=>{}
                }["useSound.useCallback[ensureCtx]"]);
            }
            return ctxRef.current;
        }
    }["useSound.useCallback[ensureCtx]"], []);
    const beep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSound.useCallback[beep]": (freq, durationMs, type = "sine")=>{
            const vol = volumeRef.current;
            if (vol <= 0) return;
            const ctx = ensureCtx();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.frequency.value = freq;
            gain.gain.value = vol / 100 * 0.18;
            osc.connect(gain);
            gain.connect(ctx.destination);
            const now = ctx.currentTime;
            gain.gain.setValueAtTime(gain.gain.value, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + durationMs / 1000);
            osc.start(now);
            osc.stop(now + durationMs / 1000);
        }
    }["useSound.useCallback[beep]"], [
        ensureCtx,
        volumeRef
    ]);
    return {
        playHit: ()=>beep(220, 120, "square"),
        playCast: ()=>beep(520, 140, "sine"),
        playHeal: ()=>beep(760, 160, "sine"),
        playLevelUp: ()=>beep(880, 400, "triangle"),
        playError: ()=>beep(140, 140, "sawtooth"),
        playClick: ()=>beep(340, 60, "square")
    };
}
_s(useSound, "HPcQ0kKj6wBv9f+j56tuAiRkt24=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/RogueUI.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RogueResourceBar",
    ()=>RogueResourceBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function RogueResourceBar({ energy, maxEnergy, comboPoints }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 px-5 py-1.5 bg-black/70 rounded-2xl border border-purple-900/70 shadow-inner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 min-w-[140px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-bold text-purple-400 w-8",
                        children: "NRG"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/RogueUI.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-2.5 bg-purple-950 rounded-full overflow-hidden border border-purple-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 transition-all duration-200",
                            style: {
                                width: `${Math.max(0, Math.min(100, energy / maxEnergy * 100))}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/RogueUI.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/RogueUI.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-mono text-purple-300 w-8 tabular-nums text-right",
                        children: Math.floor(energy)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/RogueUI.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/RogueUI.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-bold text-purple-400",
                        children: "CP"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/RogueUI.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1.5",
                        children: Array.from({
                            length: 5
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-4 h-4 rounded-full border-2 transition-all duration-150 ${i < comboPoints ? "bg-purple-500 border-purple-300 shadow-[0_0_8px_#c084fc]" : "bg-purple-950 border-purple-900"}`
                            }, i, false, {
                                fileName: "[project]/src/components/game/RogueUI.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/RogueUI.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/RogueUI.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/RogueUI.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = RogueResourceBar;
var _c;
__turbopack_context__.k.register(_c, "RogueResourceBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMultiplayer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMultiplayer",
    ()=>useMultiplayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useMultiplayer(locationId, playerData) {
    _s();
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mobs, setMobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMultiplayer.useEffect": ()=>{
            // Connect to Socket.IO
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])({
                path: "/api/socket",
                transports: [
                    "websocket"
                ]
            });
            socketRef.current = socket;
            socket.on("connect", {
                "useMultiplayer.useEffect": ()=>{
                    console.log("[MP] Connected to server");
                    setConnected(true);
                    // Join location
                    socket.emit("join_location", {
                        locationId,
                        playerData
                    });
                }
            }["useMultiplayer.useEffect"]);
            socket.on("initial_state", {
                "useMultiplayer.useEffect": (data)=>{
                    setPlayers(data.players);
                    setMobs(data.mobs);
                }
            }["useMultiplayer.useEffect"]);
            socket.on("player_joined", {
                "useMultiplayer.useEffect": (player)=>{
                    setPlayers({
                        "useMultiplayer.useEffect": (prev)=>[
                                ...prev.filter({
                                    "useMultiplayer.useEffect": (p)=>p.id !== player.id
                                }["useMultiplayer.useEffect"]),
                                player
                            ]
                    }["useMultiplayer.useEffect"]);
                }
            }["useMultiplayer.useEffect"]);
            socket.on("player_left", {
                "useMultiplayer.useEffect": (playerId)=>{
                    setPlayers({
                        "useMultiplayer.useEffect": (prev)=>prev.filter({
                                "useMultiplayer.useEffect": (p)=>p.id !== playerId
                            }["useMultiplayer.useEffect"])
                    }["useMultiplayer.useEffect"]);
                }
            }["useMultiplayer.useEffect"]);
            socket.on("player_moved", {
                "useMultiplayer.useEffect": (data)=>{
                    setPlayers({
                        "useMultiplayer.useEffect": (prev)=>prev.map({
                                "useMultiplayer.useEffect": (p)=>p.id === data.id ? {
                                        ...p,
                                        x: data.x,
                                        y: data.y
                                    } : p
                            }["useMultiplayer.useEffect"])
                    }["useMultiplayer.useEffect"]);
                }
            }["useMultiplayer.useEffect"]);
            socket.on("mob_updated", {
                "useMultiplayer.useEffect": (data)=>{
                    setMobs({
                        "useMultiplayer.useEffect": (prev)=>prev.map({
                                "useMultiplayer.useEffect": (m)=>m.spawnId === data.spawnId ? {
                                        ...m,
                                        ...data
                                    } : m
                            }["useMultiplayer.useEffect"])
                    }["useMultiplayer.useEffect"]);
                }
            }["useMultiplayer.useEffect"]);
            socket.on("mob_moved", {
                "useMultiplayer.useEffect": (data)=>{
                    setMobs({
                        "useMultiplayer.useEffect": (prev)=>prev.map({
                                "useMultiplayer.useEffect": (m)=>m.spawnId === data.spawnId ? {
                                        ...m,
                                        x: data.x,
                                        y: data.y
                                    } : m
                            }["useMultiplayer.useEffect"])
                    }["useMultiplayer.useEffect"]);
                }
            }["useMultiplayer.useEffect"]);
            socket.on("full_state_update", {
                "useMultiplayer.useEffect": (data)=>{
                    setPlayers(data.players);
                    setMobs(data.mobs);
                }
            }["useMultiplayer.useEffect"]);
            socket.on("damage_number", {
                "useMultiplayer.useEffect": (data)=>{
                    // Can be used to show floating damage numbers
                    console.log("[MP] Damage:", data);
                }
            }["useMultiplayer.useEffect"]);
            return ({
                "useMultiplayer.useEffect": ()=>{
                    socket.disconnect();
                    setConnected(false);
                }
            })["useMultiplayer.useEffect"];
        }
    }["useMultiplayer.useEffect"], [
        locationId
    ]);
    // Send movement
    const sendMove = (x, y)=>{
        if (socketRef.current?.connected) {
            socketRef.current.emit("player_move", {
                x,
                y
            });
        }
    };
    // Attack mob
    const attackMob = (mobId)=>{
        if (socketRef.current?.connected) {
            socketRef.current.emit("attack_mob", {
                mobId
            });
        }
    };
    return {
        players,
        mobs,
        connected,
        sendMove,
        attackMob
    };
}
_s(useMultiplayer, "3COvDP+zX1KDSgpNVhcx3o418fg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/GameScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameScreen",
    ()=>GameScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/world-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/TopBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$BottomBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/BottomBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Modals.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$WorldMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/WorldMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/useSound.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$RogueUI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/RogueUI.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiplayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMultiplayer.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function clampCam(pos, viewport, mapSize) {
    if (mapSize <= viewport) return mapSize / 2;
    return Math.max(viewport / 2, Math.min(mapSize - viewport / 2, pos));
}
function GameScreen({ character, onExitToSelect, onLogout }) {
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialEngineState"])(character));
    const [, setTickN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "GameScreen.useState": ()=>Date.now()
    }["GameScreen.useState"]);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        w: 1280,
        h: 800
    });
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        musicVolume: character.settings?.musicVolume ?? 55,
        sfxVolume: character.settings?.sfxVolume ?? 65,
        showGrid: character.settings?.showGrid ?? false,
        showNames: character.settings?.showNames ?? true
    });
    const sfxVolumeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(settings.sfxVolume);
    sfxVolumeRef.current = settings.sfxVolume;
    const sound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"])(sfxVolumeRef);
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const settingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(settings);
    settingsRef.current = settings;
    const abilities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abilitiesFor"])(character.className);
    // ==================== MULTIPLAYER ====================
    const { players: remotePlayers, mobs: remoteMobs, connected, sendMove, attackMob } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiplayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayer"])(character.location, {
        name: character.name,
        className: character.className,
        level: character.level,
        hp: character.hp,
        maxHp: 100,
        mp: character.mp,
        maxMp: 50,
        facing: 1
    });
    // viewport size tracking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameScreen.useEffect": ()=>{
            function onResize() {
                setViewport({
                    w: window.innerWidth,
                    h: window.innerHeight
                });
            }
            onResize();
            window.addEventListener("resize", onResize);
            return ({
                "GameScreen.useEffect": ()=>window.removeEventListener("resize", onResize)
            })["GameScreen.useEffect"];
        }
    }["GameScreen.useEffect"], []);
    // fullscreen tracking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameScreen.useEffect": ()=>{
            function onFsChange() {
                setIsFullscreen(Boolean(document.fullscreenElement));
            }
            document.addEventListener("fullscreenchange", onFsChange);
            return ({
                "GameScreen.useEffect": ()=>document.removeEventListener("fullscreenchange", onFsChange)
            })["GameScreen.useEffect"];
        }
    }["GameScreen.useEffect"], []);
    const saveCharacter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameScreen.useCallback[saveCharacter]": (patch)=>{
            fetch(`/api/characters/${character.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(patch)
            }).catch({
                "GameScreen.useCallback[saveCharacter]": ()=>{}
            }["GameScreen.useCallback[saveCharacter]"]);
        }
    }["GameScreen.useCallback[saveCharacter]"], [
        character.id
    ]);
    // game loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameScreen.useEffect": ()=>{
            let raf;
            let last = performance.now();
            let lastSave = Date.now();
            let running = true;
            function loop(t) {
                if (!running) return;
                const dt = Math.min(120, t - last);
                last = t;
                const st = stateRef.current;
                const wasDead = st.dead;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tick"])(st, dt, character.className);
                if (st.dead && !wasDead) {
                    sound.playError();
                    window.setTimeout({
                        "GameScreen.useEffect.loop": ()=>{
                            if (stateRef.current.dead) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["respawnPlayer"])(stateRef.current, character.className);
                                setTickN({
                                    "GameScreen.useEffect.loop": (n)=>n + 1
                                }["GameScreen.useEffect.loop"]);
                            }
                        }
                    }["GameScreen.useEffect.loop"], 2400);
                }
                const nowMs = Date.now();
                if (nowMs - lastSave > 4000) {
                    lastSave = nowMs;
                    saveCharacter({
                        level: st.level,
                        exp: st.exp,
                        gold: st.gold,
                        hp: Math.round(st.hp),
                        mp: Math.round(st.mp),
                        location: st.location,
                        posX: Math.round(st.x),
                        posY: Math.round(st.y),
                        talents: st.talents,
                        equipment: st.equipment,
                        inventory: st.inventory,
                        settings: settingsRef.current
                    });
                }
                setNow(nowMs);
                setTickN({
                    "GameScreen.useEffect.loop": (n)=>n + 1
                }["GameScreen.useEffect.loop"]);
                raf = requestAnimationFrame(loop);
            }
            raf = requestAnimationFrame(loop);
            return ({
                "GameScreen.useEffect": ()=>{
                    running = false;
                    cancelAnimationFrame(raf);
                }
            })["GameScreen.useEffect"];
        }
    }["GameScreen.useEffect"], []);
    // keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameScreen.useEffect": ()=>{
            function onKey(e) {
                if (modal) {
                    if (e.key === "Escape") setModal(null);
                    return;
                }
                if (e.key >= "1" && e.key <= "5") {
                    const idx = Number(e.key) - 1;
                    handleUseAbility(idx);
                } else if (e.key === "Escape") {
                    if (document.fullscreenElement) e.preventDefault();
                    stateRef.current.selectedTargetId = null;
                }
            }
            window.addEventListener("keydown", onKey);
            return ({
                "GameScreen.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["GameScreen.useEffect"];
        }
    }["GameScreen.useEffect"], [
        modal
    ]);
    const toggleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameScreen.useCallback[toggleFullscreen]": ()=>{
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch({
                    "GameScreen.useCallback[toggleFullscreen]": ()=>{}
                }["GameScreen.useCallback[toggleFullscreen]"]);
            } else {
                document.exitFullscreen().catch({
                    "GameScreen.useCallback[toggleFullscreen]": ()=>{}
                }["GameScreen.useCallback[toggleFullscreen]"]);
            }
        }
    }["GameScreen.useCallback[toggleFullscreen]"], []);
    function handleUseAbility(idx) {
        _s1();
        const ability = abilities[idx];
        if (!ability) return;
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAbility"])(stateRef.current, character.className, ability);
        if (res.ok) {
            if (ability.type === "heal") sound.playHeal();
            else if (ability.type.startsWith("buff")) sound.playCast();
            else sound.playHit();
        } else {
            sound.playError();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushFloating"])(stateRef.current, stateRef.current.x, stateRef.current.y - 60, res.reason ?? "Нельзя", "#ff8080");
        }
        setTickN((n)=>n + 1);
    }
    _s1(handleUseAbility, "RRp8RbNjsLF0VVpRa2PXaaFVlfI=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAbility"]
        ];
    });
    function handleUsePotion(kind) {
        _s2();
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePotion"])(stateRef.current, character.className, kind);
        if (res.ok) sound.playHeal();
        else sound.playError();
        setTickN((n)=>n + 1);
    }
    _s2(handleUsePotion, "jle5jkRtcaIRKiUASci3eyKbIYM=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePotion"]
        ];
    });
    function handleBuyPotion(kind) {
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buyPotion"])(stateRef.current, kind);
        if (res.ok) sound.playClick();
        else sound.playError();
        setTickN((n)=>n + 1);
    }
    function handleUpgrade(slot) {
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upgradeEquipment"])(stateRef.current, slot);
        if (res.ok) sound.playLevelUp();
        else sound.playError();
        setTickN((n)=>n + 1);
    }
    function handleSpendTalent(branch) {
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spendTalent"])(stateRef.current, branch);
        if (res.ok) sound.playClick();
        else sound.playError();
        setTickN((n)=>n + 1);
    }
    function handleSettingsChange(patch) {
        setSettings((s)=>{
            const next = {
                ...s,
                ...patch
            };
            saveCharacter({
                settings: next
            });
            return next;
        });
    }
    function handleMobClick(mobId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTarget"])(stateRef.current, mobId);
        sound.playClick();
        setTickN((n)=>n + 1);
        attackMob(mobId);
    }
    function handlePortalClick(px, py, toLocation, toX, toY) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveToPortal"])(stateRef.current, px, py, toLocation, toX, toY);
        setTickN((n)=>n + 1);
    }
    // ПКМ — движение + отправка в мультиплеер
    function handleRightClick(e) {
        e.preventDefault();
        const st = stateRef.current;
        const loc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"][st.location] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"].city;
        const rect = viewportRef.current?.getBoundingClientRect();
        if (!rect) return;
        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;
        const camX = clampCam(st.x, viewport.w, loc.width);
        const camY = clampCam(st.y, viewport.h, loc.height);
        let worldX = localX - viewport.w / 2 + camX;
        let worldY = localY - viewport.h / 2 + camY;
        worldX = Math.max(10, Math.min(loc.width - 10, worldX));
        worldY = Math.max(10, Math.min(loc.height - 10, worldY));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issueMoveCommand"])(st, worldX, worldY);
        setTickN((n)=>n + 1);
        // Отправляем движение на сервер
        sendMove(worldX, worldY);
    }
    function handleLeftClickGround() {
    // intentionally empty
    }
    const st = stateRef.current;
    const loc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"][st.location] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"].city;
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStats"])(st, character.className);
    const camX = clampCam(st.x, viewport.w, loc.width);
    const camY = clampCam(st.y, viewport.h, loc.height);
    const translateX = viewport.w / 2 - camX;
    const translateY = viewport.h / 2 - camY;
    const isRanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attackRangeFor"])(character.className) > 150;
    const expNeeded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expForLevel"])(st.level);
    const isDark = character.faction === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 overflow-hidden bg-black text-white select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: viewportRef,
                onClick: handleLeftClickGround,
                onContextMenu: handleRightClick,
                className: "absolute inset-0 cursor-crosshair overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 top-0",
                    style: {
                        width: loc.width,
                        height: loc.height,
                        transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                        backgroundImage: `url(${loc.background})`,
                        backgroundSize: "512px 512px",
                        backgroundRepeat: "repeat"
                    },
                    children: [
                        settings.showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 opacity-30",
                            style: {
                                backgroundImage: "linear-gradient(#ffffff33 1px, transparent 1px), linear-gradient(90deg, #ffffff33 1px, transparent 1px)",
                                backgroundSize: "80px 80px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/GameScreen.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this),
                        loc.trees.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -translate-x-1/2 -translate-y-[85%]",
                                style: {
                                    left: t.x,
                                    top: t.y,
                                    width: 90 * t.scale,
                                    height: 110 * t.scale
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/tree.png",
                                    alt: "",
                                    fill: true,
                                    sizes: "120px",
                                    className: "object-contain drop-shadow-[0_10px_6px_rgba(0,0,0,0.5)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameScreen.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this)
                            }, t.id, false, {
                                fileName: "[project]/src/components/game/GameScreen.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)),
                        loc.buildings.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute",
                                style: {
                                    left: b.x,
                                    top: b.y,
                                    width: b.w,
                                    height: b.h
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/house.png",
                                        alt: "",
                                        fill: true,
                                        sizes: "300px",
                                        className: "object-fill drop-shadow-[0_14px_10px_rgba(0,0,0,0.6)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this),
                                    b.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/60 px-2 py-0.5 text-[11px] text-sky-300",
                                        children: [
                                            "<",
                                            b.label,
                                            ">"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, b.id, true, {
                                fileName: "[project]/src/components/game/GameScreen.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this)),
                        loc.portals.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handlePortalClick(p.x, p.y, p.toLocation, p.toX, p.toY);
                                },
                                className: "absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer",
                                style: {
                                    left: p.x,
                                    top: p.y
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "portal-swirl h-16 w-16 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/70 px-2 py-0.5 text-[11px] text-purple-300",
                                        children: p.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/game/GameScreen.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this)),
                        remotePlayers.filter((p)=>p.id !== character.id).map((player)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -translate-x-1/2 -translate-y-[88%]",
                                style: {
                                    left: player.x,
                                    top: player.y,
                                    width: 70,
                                    height: 90
                                },
                                children: [
                                    settings.showNames && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold text-blue-300",
                                        children: [
                                            player.name,
                                            " [",
                                            player.level,
                                            "]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 381,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-1 left-1/2 h-1.5 w-14 -translate-x-1/2 overflow-hidden rounded-full border border-black/70 bg-black/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-gradient-to-r from-blue-600 to-blue-400",
                                            style: {
                                                width: `${player.hp / player.maxHp * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/GameScreen.tsx",
                                            lineNumber: 386,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 385,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-full w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/hero.png",
                                            alt: "",
                                            fill: true,
                                            sizes: "90px",
                                            className: "object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.6)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/GameScreen.tsx",
                                            lineNumber: 389,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 388,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, player.id, true, {
                                fileName: "[project]/src/components/game/GameScreen.tsx",
                                lineNumber: 375,
                                columnNumber: 15
                            }, this)),
                        remoteMobs.map((m)=>{
                            if (!m.alive) return null;
                            const hpPct = m.hp / m.maxHp * 100;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handleMobClick(m.spawnId);
                                },
                                className: "absolute -translate-x-1/2 -translate-y-[90%] cursor-pointer",
                                style: {
                                    left: m.x,
                                    top: m.y,
                                    width: 76,
                                    height: 90
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-full w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/monster.png",
                                            alt: "",
                                            fill: true,
                                            sizes: "90px",
                                            className: "object-contain drop-shadow-[0_8px_6px_rgba(0,0,0,0.6)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/GameScreen.tsx",
                                            lineNumber: 409,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-5 left-1/2 w-24 -translate-x-1/2 text-center text-[10px] text-red-300",
                                        children: [
                                            m.name,
                                            " [",
                                            m.level,
                                            "]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 411,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-1 left-1/2 h-1.5 w-16 -translate-x-1/2 overflow-hidden rounded-full border border-black/70 bg-black/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-gradient-to-r from-red-700 to-red-400",
                                            style: {
                                                width: `${hpPct}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/GameScreen.tsx",
                                            lineNumber: 415,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 414,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, m.spawnId, true, {
                                fileName: "[project]/src/components/game/GameScreen.tsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -translate-x-1/2 -translate-y-[88%] transition-transform",
                            style: {
                                left: st.x,
                                top: st.y,
                                width: 70,
                                height: 90
                            },
                            children: [
                                settings.showNames && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold text-emerald-300",
                                    children: [
                                        character.name,
                                        " [",
                                        st.level,
                                        "]"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/GameScreen.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-1 left-1/2 h-1.5 w-14 -translate-x-1/2 overflow-hidden rounded-full border border-black/70 bg-black/60",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gradient-to-r from-emerald-700 to-emerald-400",
                                        style: {
                                            width: `${st.hp / stats.maxHp * 100}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameScreen.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full w-full",
                                    style: {
                                        transform: st.facing < 0 ? "scaleX(-1)" : undefined
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/hero.png",
                                        alt: "",
                                        fill: true,
                                        sizes: "90px",
                                        className: "object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.6)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameScreen.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameScreen.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this),
                                isRanged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameScreen.tsx",
                                    lineNumber: 437,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/GameScreen.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/GameScreen.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            st.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed left-1/2 top-20 z-40 -translate-x-1/2 rounded-lg border border-amber-600 bg-black/80 px-5 py-2 text-lg font-bold text-amber-200 shadow-lg",
                children: st.message
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 443,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopBar"], {
                name: character.name,
                level: st.level,
                faction: character.faction,
                className: character.className,
                hp: st.hp,
                maxHp: stats.maxHp,
                mp: st.mp,
                maxMp: stats.maxMp,
                gold: st.gold,
                locationName: loc.name,
                playerPos: {
                    x: st.x,
                    y: st.y
                },
                mapSize: {
                    w: loc.width,
                    h: loc.height
                },
                portals: loc.portals.map((p)=>({
                        x: p.x,
                        y: p.y
                    })),
                mobDots: Object.values(st.mobs).map((m)=>({
                        x: m.x,
                        y: m.y,
                        alive: m.alive
                    })),
                isFullscreen: isFullscreen,
                onToggleFullscreen: toggleFullscreen,
                onOpen: (m)=>setModal(m),
                onLogout: onLogout
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            character.className === "rogue" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-[92px] left-1/2 -translate-x-1/2 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$RogueUI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RogueResourceBar"], {
                    energy: st.energy,
                    maxEnergy: st.maxEnergy,
                    comboPoints: st.comboPoints
                }, void 0, false, {
                    fileName: "[project]/src/components/game/GameScreen.tsx",
                    lineNumber: 471,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 470,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$BottomBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomBar"], {
                abilities: abilities,
                cooldownReadyAt: st.cooldowns,
                now: now,
                hp: st.hp,
                maxHp: stats.maxHp,
                mp: st.mp,
                maxMp: stats.maxMp,
                potionsHp: st.inventory.potionsHp,
                potionsMp: st.inventory.potionsMp,
                mana: st.mp,
                level: st.level,
                targetLock: st.targetLock,
                onToggleLock: ()=>{
                    stateRef.current.targetLock = !stateRef.current.targetLock;
                    setTickN((n)=>n + 1);
                },
                onUseAbility: handleUseAbility,
                onUsePotion: handleUsePotion
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this),
            modal === "character" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CharacterModal"], {
                onClose: ()=>setModal(null),
                name: character.name,
                faction: character.faction,
                race: character.race,
                className: character.className,
                level: st.level,
                exp: st.exp,
                expNeeded: expNeeded,
                stats: stats
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 502,
                columnNumber: 9
            }, this),
            modal === "talents" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentsModal"], {
                onClose: ()=>setModal(null),
                talents: st.talents,
                level: st.level,
                onSpend: handleSpendTalent
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 514,
                columnNumber: 31
            }, this),
            modal === "forge" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForgeModal"], {
                onClose: ()=>setModal(null),
                equipment: st.equipment,
                gold: st.gold,
                onUpgrade: handleUpgrade,
                onBuyPotion: handleBuyPotion
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 515,
                columnNumber: 29
            }, this),
            modal === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsModal"], {
                onClose: ()=>setModal(null),
                musicVolume: settings.musicVolume,
                sfxVolume: settings.sfxVolume,
                showGrid: settings.showGrid,
                showNames: settings.showNames,
                onChange: handleSettingsChange,
                onLogout: onLogout,
                onExitToSelect: ()=>{
                    saveCharacter({
                        level: st.level,
                        exp: st.exp,
                        gold: st.gold,
                        hp: Math.round(st.hp),
                        mp: Math.round(st.mp),
                        location: st.location,
                        posX: Math.round(st.x),
                        posY: Math.round(st.y),
                        talents: st.talents,
                        equipment: st.equipment,
                        inventory: st.inventory,
                        settings: settingsRef.current
                    });
                    onExitToSelect();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 517,
                columnNumber: 9
            }, this),
            modal === "help" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpModal"], {
                onClose: ()=>setModal(null)
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 544,
                columnNumber: 28
            }, this),
            modal === "worldmap" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$WorldMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorldMap"], {
                currentLocation: st.location,
                onClose: ()=>setModal(null),
                onTravel: (locId)=>{
                    const locData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATIONS"][locId];
                    if (locData) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teleport"])(stateRef.current, locId, locData.spawn.x, locData.spawn.y);
                        setModal(null);
                        setTickN((n)=>n + 1);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameScreen.tsx",
                lineNumber: 547,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/GameScreen.tsx",
        lineNumber: 305,
        columnNumber: 5
    }, this);
}
_s(GameScreen, "rCMFy6awPlXaxqQzupnwD4ucDt0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMultiplayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayer"]
    ];
});
_c = GameScreen;
var _c;
__turbopack_context__.k.register(_c, "GameScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/GameClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameClient",
    ()=>GameClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$AuthScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/AuthScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CharacterSelectScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/CharacterSelectScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CharacterCreateScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/CharacterCreateScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/GameScreen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function GameClient() {
    _s();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [characters, setCharacters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameClient.useEffect": ()=>{
            fetch("/api/auth/me", {
                credentials: "include"
            }).then({
                "GameClient.useEffect": (r)=>r.json()
            }["GameClient.useEffect"]).then({
                "GameClient.useEffect": (data)=>{
                    if (data.user) {
                        setUser(data.user);
                        setCharacters(data.characters ?? []);
                        setScreen("select");
                    } else {
                        setScreen("auth");
                    }
                }
            }["GameClient.useEffect"]).catch({
                "GameClient.useEffect": ()=>setScreen("auth")
            }["GameClient.useEffect"]);
        }
    }["GameClient.useEffect"], []);
    function handleAuthed(u) {
        setUser(u);
        fetch("/api/characters", {
            credentials: "include"
        }).then((r)=>r.json()).then((data)=>{
            setCharacters(data.characters ?? []);
            setScreen("select");
        });
    }
    async function handleLogout() {
        await fetch("/api/auth/logout", {
            method: "POST",
            credentials: "include"
        });
        setUser(null);
        setCharacters([]);
        setActive(null);
        setScreen("auth");
    }
    if (screen === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 flex items-center justify-center bg-[#140d09] text-amber-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg font-semibold",
                children: "Загрузка мира..."
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameClient.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/game/GameClient.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this);
    }
    if (screen === "auth") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$AuthScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthScreen"], {
            onAuthed: handleAuthed
        }, void 0, false, {
            fileName: "[project]/src/components/game/GameClient.tsx",
            lineNumber: 60,
            columnNumber: 12
        }, this);
    }
    if (screen === "select" && user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CharacterSelectScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CharacterSelectScreen"], {
            username: user.username,
            characters: characters,
            onPlay: (c)=>{
                setActive(c);
                setScreen("game");
            },
            onCreateNew: ()=>setScreen("create"),
            onDeleted: (id)=>setCharacters((cs)=>cs.filter((c)=>c.id !== id)),
            onLogout: handleLogout
        }, void 0, false, {
            fileName: "[project]/src/components/game/GameClient.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this);
    }
    if (screen === "create") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$CharacterCreateScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CharacterCreateScreen"], {
            canCancel: characters.length > 0,
            onCancel: ()=>setScreen("select"),
            onCreated: (c)=>{
                setCharacters((cs)=>[
                        ...cs,
                        c
                    ]);
                setActive(c);
                setScreen("game");
            }
        }, void 0, false, {
            fileName: "[project]/src/components/game/GameClient.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this);
    }
    if (screen === "game" && active) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameScreen"], {
            character: active,
            onExitToSelect: ()=>{
                setScreen("select");
                fetch("/api/characters", {
                    credentials: "include"
                }).then((r)=>r.json()).then((data)=>setCharacters(data.characters ?? []));
            },
            onLogout: handleLogout
        }, void 0, false, {
            fileName: "[project]/src/components/game/GameClient.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(GameClient, "kdsQltyL2WBzGZBSjncreHk3nak=");
_c = GameClient;
var _c;
__turbopack_context__.k.register(_c, "GameClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0siqn9b._.js.map