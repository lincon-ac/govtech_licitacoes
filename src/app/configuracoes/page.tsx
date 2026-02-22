"use client";

import { MainLayout } from "@/components/layout/MainLayout";

export default function SettingsPage() {
    return (
        <MainLayout>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight text-primary">Configurações</h1>
                <p className="text-muted-foreground">Gerencie sua conta e preferências do sistema.</p>
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    Configurações gerais (Placeholder)
                </div>
            </div>
        </MainLayout>
    );
}
