"use client";

import { useState } from "react";
import { Search, MoreVertical, Paperclip, Send, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const conversations = [
    {
        id: 1,
        portal: "Comprasnet",
        pregao: "Pregão 45/2026",
        title: "Aquisição de Notebooks",
        lastMessage: "Prezados, favor enviar a proposta readequada em 2h.",
        time: "10:30",
        unread: 2,
        crisis: true, // keywords: prazo, proposta
    },
    {
        id: 2,
        portal: "Licitações-E",
        pregao: "Pregão 102/2026",
        title: "Serviços de Limpeza",
        lastMessage: "O item 3 foi cancelado.",
        time: "Ontem",
        unread: 0,
        crisis: false,
    },
    {
        id: 3,
        portal: "BEC/SP",
        pregao: "OC 88221",
        title: "Material Elétrico",
        lastMessage: "Sessão suspensa para almoço. Retorno às 14h.",
        time: "Ontem",
        unread: 0,
        crisis: false,
    },
];

const currentChat = [
    { id: 1, sender: "Pregoeiro", text: "Bom dia, senhores licitantes. A sessão está aberta.", time: "09:00" },
    { id: 2, sender: "Sistema", text: "Fase de lances iniciada para o item 1.", time: "09:05" },
    { id: 3, sender: "Pregoeiro", text: "Prezados, favor enviar a proposta readequada e os documentos de habilitação em até 2 horas sob pena de desclassificação.", time: "10:30", crisis: true },
];

export function UnifiedInbox() {
    const [selectedId, setSelectedId] = useState(1);

    return (
        <div className="flex bg-card border rounded-xl shadow-sm h-[600px] overflow-hidden">
            {/* Sidebar List */}
            <div className="w-1/3 border-r flex flex-col">
                <div className="p-4 border-b">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Buscar mensagens..."
                            className="w-full rounded-md border bg-muted/50 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {conversations.map((conv) => (
                        <div
                            key={conv.id}
                            onClick={() => setSelectedId(conv.id)}
                            className={cn(
                                "p-4 cursor-pointer border-b transition-colors hover:bg-muted/50",
                                selectedId === conv.id ? "bg-muted/50" : "bg-transparent",
                                conv.crisis && "border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-900/10"
                            )}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-semibold text-primary">{conv.portal}</span>
                                <span className="text-xs text-muted-foreground">{conv.time}</span>
                            </div>
                            <h4 className="font-medium text-sm truncate">{conv.pregao} - {conv.title}</h4>
                            <p className="text-sm text-muted-foreground truncate mt-1">{conv.lastMessage}</p>
                            {conv.unread > 0 && (
                                <div className="mt-2 flex gap-2">
                                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">{conv.unread} novas</span>
                                    {conv.crisis && <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><AlertTriangle className="h-3 w-3" /> Urgente</span>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat View */}
            <div className="flex-1 flex flex-col bg-background/50">
                <div className="p-4 border-b flex justify-between items-center bg-card">
                    <div>
                        <h3 className="font-bold">Pregão 45/2026 - Aquisição de Notebooks</h3>
                        <p className="text-sm text-muted-foreground">Comprasnet • Item 1</p>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                        <MoreVertical className="h-5 w-5" />
                    </button>
                </div>

                {/* Alert Toast Simulation if crisis */}
                <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-4 py-2 text-sm flex items-center justify-between">
                    <span className="flex items-center gap-2 font-medium">
                        <AlertTriangle className="h-4 w-4" />
                        Atenção! Palavras-chave de risco detectadas: "proposta", "prazo".
                    </span>
                    <button className="text-xs underline hover:no-underline">Dispensar</button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {currentChat.map((msg) => (
                        <div key={msg.id} className={cn("flex flex-col", msg.sender === "Sistema" ? "items-center" : "items-start")}>
                            {msg.sender === "Sistema" ? (
                                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">{msg.text}</span>
                            ) : (
                                <div className="max-w-[80%]">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-sm font-bold">{msg.sender}</span>
                                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                                    </div>
                                    <div className={cn(
                                        "p-3 rounded-lg text-sm",
                                        msg.crisis ? "bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-900" : "bg-card border shadow-sm"
                                    )}>
                                        {msg.text}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-card border-t mt-auto">
                    <div className="flex gap-2">
                        <button className="p-2 text-muted-foreground hover:bg-muted rounded-full">
                            <Paperclip className="h-5 w-5" />
                        </button>
                        <input
                            type="text"
                            placeholder="Digite sua mensagem para o pregoeiro..."
                            className="flex-1 bg-muted/30 border-none focus:ring-0 rounded-md px-3 text-sm focus:outline-none"
                        />
                        <button className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
