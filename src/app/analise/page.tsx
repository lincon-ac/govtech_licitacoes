"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { DocumentAnalysis } from "@/components/ai/DocumentAnalysis";

export default function AnalysisPage() {
    return (
        <MainLayout>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight text-primary">Análise de Editais com IA</h1>
                <p className="text-muted-foreground">Faça upload do edital para identificar riscos e oportunidades automaticamente.</p>
                <DocumentAnalysis />
            </div>
        </MainLayout>
    );
}
