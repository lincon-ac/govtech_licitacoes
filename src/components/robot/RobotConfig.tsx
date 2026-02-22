"use client";

import { Save, Play, Pause, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function RobotConfig() {
    const [mode, setMode] = useState<"aberto" | "inteligente">("aberto");

    return (
        <div className="space-y-8">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between border-b pb-4">
                    <div>
                        <h2 className="text-lg font-semibold">Configuração de Disputa</h2>
                        <p className="text-sm text-muted-foreground">Item 01: Notebook Dell Latitude 3420</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                            <Pause className="h-3 w-3 fill-current" /> Pausado
                        </span>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Strategy Column */}
                    <div className="space-y-6">
                        <div>
                            <label className="text-sm font-medium">Modo de Disputa</label>
                            <div className="mt-2 grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setMode("aberto")}
                                    className={cn(
                                        "flex flex-col items-center justify-center rounded-lg border p-4 text-center transition-all hover:bg-muted",
                                        mode === "aberto" ? "border-primary bg-primary/5 ring-1 ring-primary" : "bg-background"
                                    )}
                                >
                                    <span className="font-semibold">Aberto (Agressivo)</span>
                                    <span className="mt-1 text-xs text-muted-foreground">Busca sempre o 1º lugar</span>
                                </button>
                                <button
                                    onClick={() => setMode("inteligente")}
                                    className={cn(
                                        "flex flex-col items-center justify-center rounded-lg border p-4 text-center transition-all hover:bg-muted",
                                        mode === "inteligente" ? "border-primary bg-primary/5 ring-1 ring-primary" : "bg-background"
                                    )}
                                >
                                    <span className="font-semibold">Inteligente (Passivo)</span>
                                    <span className="mt-1 text-xs text-muted-foreground">Mantém 2º/3º lugar</span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Intervalo de Lances (ms)</label>
                            <input
                                type="number"
                                defaultValue={1500}
                                className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm"
                            />
                            <p className="mt-1 text-xs text-muted-foreground">Recomendado: 1500ms para evitar bloqueio.</p>
                        </div>
                    </div>

                    {/* Values Column */}
                    <div className="space-y-6 border-l pl-8">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground">Valor de Referência</label>
                            <div className="text-2xl font-bold text-muted-foreground">R$ 5.200,00</div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Lance Mínimo (Piso)</label>
                            <div className="relative mt-1.5">
                                <span className="absolute left-3 top-2 text-sm text-muted-foreground">R$</span>
                                <input
                                    type="text"
                                    defaultValue="4.800,00"
                                    className="w-full rounded-md border bg-background pl-8 pr-3 py-2 text-sm font-semibold text-red-600 focus:ring-red-500"
                                />
                            </div>
                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3" />
                                O robô parará se o lance for menor que este valor.
                            </p>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Decremento Automático</label>
                            <div className="relative mt-1.5">
                                <span className="absolute left-3 top-2 text-sm text-muted-foreground">R$</span>
                                <input
                                    type="text"
                                    defaultValue="10,00"
                                    className="w-full rounded-md border bg-background pl-8 pr-3 py-2 text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-end gap-3 border-t pt-6">
                    <button className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
                        <Save className="h-4 w-4" /> Salvar Configuração
                    </button>
                    <button className="flex items-center gap-2 rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors shadow-sm">
                        <Play className="h-4 w-4 fill-current" /> Iniciar Robô
                    </button>
                </div>
            </div>
        </div>
    );
}
