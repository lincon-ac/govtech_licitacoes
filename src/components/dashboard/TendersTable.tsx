import { Eye, ArrowRight } from "lucide-react";

// Mock Data
const tenders = [
    {
        id: "1023",
        organ: "Prefeitura de São Paulo",
        object: "Aquisição de Material de Escritório",
        value: "R$ 45.000,00",
        deadline: "18/02/2026 14:00",
        status: "Aberto",
    },
    {
        id: "1024",
        organ: "Ministério da Saúde",
        object: "Registro de Preços para Medicamentos",
        value: "R$ 1.200.000,00",
        deadline: "19/02/2026 09:00",
        status: "Em Análise",
    },
    {
        id: "1025",
        organ: "Tribunal de Justiça - RJ",
        object: "Serviços de Manutenção Predial",
        value: "R$ 350.000,00",
        deadline: "20/02/2026 10:30",
        status: "Aberto",
    },
    {
        id: "1026",
        organ: "Empresa de Correios e Telégrafos",
        object: "Fornecimento de Frotas",
        value: "R$ 5.600.000,00",
        deadline: "21/02/2026 11:00",
        status: "Suspenso",
    },
];

export function TendersTable() {
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 flex items-center justify-between">
                <div className="flex flex-col space-y-0.5">
                    <h3 className="font-semibold leading-none tracking-tight">Próximas Licitações</h3>
                    <p className="text-sm text-muted-foreground">Oportunidades mapeadas para você.</p>
                </div>
                <button className="text-sm text-primary hover:underline flex items-center gap-1">
                    Ver todas <ArrowRight className="h-4 w-4" />
                </button>
            </div>
            <div className="p-0">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b">
                        <tr>
                            <th className="px-6 py-3">Órgão</th>
                            <th className="px-6 py-3">Objeto</th>
                            <th className="px-6 py-3">Valor Estimado</th>
                            <th className="px-6 py-3">Prazo</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3 text-right">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {tenders.map((tender) => (
                            <tr key={tender.id} className="hover:bg-muted/30 transition-colors">
                                <td className="px-6 py-4 font-medium">{tender.organ}</td>
                                <td className="px-6 py-4 max-w-xs truncate" title={tender.object}>{tender.object}</td>
                                <td className="px-6 py-4">{tender.value}</td>
                                <td className="px-6 py-4 text-red-500 font-medium">{tender.deadline}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
                    ${tender.status === 'Aberto' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                                            tender.status === 'Suspenso' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100' :
                                                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                                        }`}>
                                        {tender.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="rounded-md p-2 hover:bg-muted transition-colors text-primary font-medium flex items-center gap-1 ml-auto">
                                        <Eye className="h-4 w-4" /> Detalhes
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
