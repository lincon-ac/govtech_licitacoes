"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Search,
    FileText,
    Bot,
    MessageSquare,
    BarChart,
    Settings,
    Gavel,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Busca de Editais", href: "/busca", icon: Search },
    { name: "Minhas Propostas", href: "/propostas", icon: FileText },
    { name: "Robô de Lances", href: "/robo", icon: Bot },
    { name: "Chat Centralizado", href: "/chat", icon: MessageSquare },
    { name: "Análise de Mercado", href: "/analise", icon: BarChart },
    { name: "Configurações", href: "/configuracoes", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-primary text-primary-foreground hidden md:block">
            <div className="flex h-16 items-center justify-center border-b border-primary-foreground/10 px-6">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <Gavel className="h-6 w-6" />
                    <span>GovTech</span>
                </div>
            </div>
            <nav className="space-y-1 p-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10",
                                isActive ? "bg-primary-foreground/20 text-white" : "text-primary-foreground/80"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
            <div className="absolute bottom-4 left-0 w-full px-4">
                <div className="rounded-lg bg-primary-foreground/10 p-4 text-xs text-primary-foreground/60">
                    <p>GovTech v1.0.0</p>
                    <p className="mt-1">Licitações Inteligentes</p>
                </div>
            </div>
        </aside>
    );
}
