"use client";

import { UploadCloud, FileText, CheckCircle, AlertOctagon, AlertTriangle } from "lucide-react";
import { useState } from "react";

export function DocumentAnalysis() {
    const [analyzing, setAnalyzing] = useState(false);
    const [analyzed, setAnalyzed] = useState(false);

    const handleUpload = () => {
        setAnalyzing(true);
        setTimeout(() => {
            setAnalyzing(false);
            setAnalyzed(true);
        }, 2000);
    };

    return (
        <div className="grid gap-8 lg:grid-cols-2">
            {/* Upload Section */}
            <div className="space-y-6">
                <div
                    className="rounded-xl border border-dashed p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={handleUpload}
                >
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <UploadCloud className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Arraste o Edital (PDF) aqui</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        Ou clique para selecionar do computador. A IA analisará automaticamente.
                    </p>
                    {analyzing && (
                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-primary animate-pulse">
                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            Processando documento...
                        </div>
                    )}
                </div>

                {analyzed && (
                    <div className="rounded-xl border bg-card p-6 shadow-sm">
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-blue-500" />
                            Resumo do Edital Identificado
                        </h3>
                        <dl className="grid grid-cols-1 gap-4 text-sm">
                            <div>
                                <dt className="font-medium text-muted-foreground">Objeto</dt>
                                <dd className="mt-1">Aquisição de licenças de software perpétuas para engenharia.</dd>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <dt className="font-medium text-muted-foreground">Valor Estimado</dt>
                                    <dd className="mt-1 font-semibold">R$ 1.500.000,00</dd>
                                </div>
                                <div>
                                    <dt className="font-medium text-muted-foreground">Data Abertura</dt>
                                    <dd className="mt-1">10/03/2026</dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                )}
            </div>

            {/* Analysis Results */}
            {analyzed ? (
                <div className="space-y-6">
                    <div className="rounded-xl border bg-card p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold">Análise Jurídica &amp; Riscos</h2>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded dark:bg-yellow-900 dark:text-yellow-100">
                                Risco Moderado
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-red-50 border border-red-100 dark:bg-red-900/10 dark:border-red-900/50">
                                <div className="flex gap-3">
                                    <AlertOctagon className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 dark:text-red-200">Cláusula de Multa Abusiva</h4>
                                        <p className="text-sm text-red-800/80 dark:text-red-300 mt-1">
                                            Item 12.3 prevê multa de 30% sobre o valor total em caso de atraso superior a 5 dias.
                                            Recomendação: Impugnar.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-100 dark:bg-yellow-900/10 dark:border-yellow-900/50">
                                <div className="flex gap-3">
                                    <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-900 dark:text-yellow-200">Exigência de Vistoria</h4>
                                        <p className="text-sm text-yellow-800/80 dark:text-yellow-300 mt-1">
                                            O edital exige vistoria presencial até 24h antes da abertura. Verifique logística.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-lg bg-green-50 border border-green-100 dark:bg-green-900/10 dark:border-green-900/50">
                                <div className="flex gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 dark:text-green-200">Habilitação Simplificada</h4>
                                        <p className="text-sm text-green-800/80 dark:text-green-300 mt-1">
                                            Não exige balanço patrimonial para ME/EPP neste lote.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-full rounded-xl border border-dashed bg-muted/20 text-muted-foreground p-12 text-center">
                    Aguardando documento para análise...
                </div>
            )}
        </div>
    );
}
