"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { SearchFilters } from "@/components/search/SearchFilters";
import { SearchResults } from "@/components/search/SearchResults";

export default function SearchPage() {
    return (
        <MainLayout>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight text-primary">Busca de Editais</h1>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <SearchFilters />
                    <SearchResults />
                </div>
            </div>
        </MainLayout>
    );
}
