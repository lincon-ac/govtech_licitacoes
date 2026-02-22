"use client";

import { Bell, Search, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function TopBar() {
    return (
        <header className="fixed left-0 md:left-64 top-0 z-30 flex h-16 w-full md:w-[calc(100%-16rem)] items-center justify-between border-b bg-background px-6 shadow-sm transition-all duration-300">
            <div className="flex w-96 items-center gap-2 rounded-md border bg-muted/50 px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Buscar licitações, órgãos ou processos..."
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
            </div>

            <div className="flex items-center gap-4">
                <ThemeToggle />

                <button className="relative rounded-full p-2 hover:bg-muted transition-colors">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
                </button>

                <div className="flex items-center gap-3 border-l pl-4">
                    <div className="hidden text-right sm:block">
                        <p className="text-sm font-medium leading-none">Admin User</p>
                        <p className="text-xs text-muted-foreground">admin@govtech.com</p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <User className="h-5 w-5 text-primary" />
                    </div>
                </div>
            </div>
        </header>
    );
}
