"use client";

import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-muted/20">
            <Sidebar />
            <TopBar />
            <main className="ml-0 md:ml-64 min-h-screen pt-16 transition-all duration-300">
                <div className="container mx-auto p-6 space-y-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
