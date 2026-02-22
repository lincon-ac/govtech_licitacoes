"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { RobotConfig } from "@/components/robot/RobotConfig";

export default function RobotPage() {
    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold tracking-tight text-primary">Robô de Lances</h1>
                <RobotConfig />

                {/* Active Robots List (Placeholder) */}
                <div className="mt-12 space-y-4">
                    <h2 className="text-xl font-semibold">Robôs Ativos</h2>
                    <div className="rounded-lg border bg-card p-4 text-center text-muted-foreground">
                        Nenhum robô operando no momento.
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
