"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { UnifiedInbox } from "@/components/chat/UnifiedInbox";

export default function ChatPage() {
    return (
        <MainLayout>
            <div className="space-y-6 h-[calc(100vh-8rem)]">
                <h1 className="text-3xl font-bold tracking-tight text-primary">Chat Centralizado</h1>
                <UnifiedInbox />
            </div>
        </MainLayout>
    );
}
