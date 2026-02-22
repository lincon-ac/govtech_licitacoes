import { SlidersHorizontal } from "lucide-react";

export function SearchFilters() {
    return (
        <div className="w-64 space-y-6">
            <div className="flex items-center gap-2 font-semibold">
                <SlidersHorizontal className="h-4 w-4" />
                Filtros
            </div>

            <div className="space-y-4">
                <div>
                    <label className="text-sm font-medium">Palavras-chave</label>
                    <input
                        type="text"
                        placeholder="Ex: Notebook, Limpeza..."
                        className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Região</label>
                    <select className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                        <option>Todo o Brasil</option>
                        <option>Sudeste</option>
                        <option>Sul</option>
                        <option>Nordeste</option>
                        <option>Centro-Oeste</option>
                        <option>Norte</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">Valor Estimado</label>
                    <div className="flex items-center gap-2 mt-1.5">
                        <input type="text" placeholder="Min" className="w-full rounded-md border bg-background px-3 py-2 text-sm" />
                        <span className="text-muted-foreground">-</span>
                        <input type="text" placeholder="Max" className="w-full rounded-md border bg-background px-3 py-2 text-sm" />
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium mb-2 block">Portais</label>
                    <div className="space-y-2">
                        {['Comprasnet', 'Licitações-E', 'BEC/SP', 'Portal de Compras Públicas'].map((portal) => (
                            <label key={portal} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                {portal}
                            </label>
                        ))}
                    </div>
                </div>

                <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                    Aplicar Filtros
                </button>
            </div>
        </div>
    );
}
