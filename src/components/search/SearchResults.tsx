import { Eye, Plus } from "lucide-react";

const results = [
    {
        id: 1,
        organ: "Fundação Nacional de Saúde - FUNASA",
        object: "Aquisição de Equipamentos de Informática (Notebooks e Monitores)",
        value: "R$ 450.000,00",
        deadline: "25/02/2026 09:00",
        portal: "Comprasnet",
        tags: ["SRP", "Exclusivo ME/EPP"],
    },
    {
        id: 2,
        organ: "Secretaria de Estado da Educação - SP",
        object: "Contratação de serviço de vigilância patrimonial",
        value: "R$ 12.000.000,00",
        deadline: "28/02/2026 10:00",
        portal: "BEC/SP",
        tags: ["Vistoria Obrigatória", "Terceirização"],
    },
    {
        id: 3,
        organ: "Prefeitura Municipal de Curitiba",
        object: "Fornecimento parcelado de material de limpeza",
        value: "R$ 89.000,00",
        deadline: "01/03/2026 14:00",
        portal: "Licitações-E",
        tags: ["Amostra Exigida"],
    },
];

export function SearchResults() {
    return (
        <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Resultados (3 encontrados)</h2>
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Ordenar por:</span>
                    <select className="bg-transparent font-medium focus:outline-none">
                        <option>Mais recentes</option>
                        <option>Maior valor</option>
                        <option>Menor valor</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-4">
                {results.map((item) => (
                    <div key={item.id} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                        {item.portal}
                                    </span>
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="font-semibold text-lg hover:text-primary cursor-pointer transition-colors">
                                    {item.object}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">{item.organ}</p>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-lg">{item.value}</div>
                                <div className="text-sm font-medium text-red-500 mt-1">Abre em: {item.deadline}</div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                            <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-muted">
                                <Eye className="h-4 w-4" /> Detalhes
                            </button>
                            <button className="flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-4 py-2 rounded-md shadow-sm">
                                <Plus className="h-4 w-4" /> Adicionar ao Robô
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
