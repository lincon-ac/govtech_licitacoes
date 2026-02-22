"use client";

import { MainLayout } from "@/components/layout/MainLayout";

export default function ProposalsPage() {
    return (
        <MainLayout>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight text-primary">Minhas Propostas</h1>
                <p className="text-muted-foreground">Gerencie suas propostas enviadas e em rascunho.</p>
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    Lista de propostas (Placeholder)
                </div>
            </div>
        </MainLayout>
    );
}
