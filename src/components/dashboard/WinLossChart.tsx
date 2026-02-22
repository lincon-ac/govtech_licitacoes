"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const data = [
    { name: "Jan", Ganhos: 4, Perdidos: 2 },
    { name: "Fev", Ganhos: 3, Perdidos: 5 },
    { name: "Mar", Ganhos: 2, Perdidos: 3 },
    { name: "Abr", Ganhos: 6, Perdidos: 4 },
    { name: "Mai", Ganhos: 8, Perdidos: 3 },
    { name: "Jun", Ganhos: 5, Perdidos: 6 },
    { name: "Jul", Ganhos: 9, Perdidos: 2 },
];

export function WinLossChart() {
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div className="p-6 flex flex-col space-y-0.5">
                <h3 className="font-semibold leading-none tracking-tight">Performance de Lances</h3>
                <p className="text-sm text-muted-foreground">Ganhos vs Perdidos (Últimos 6 meses)</p>
            </div>
            <div className="p-6 pt-0 h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                        <XAxis
                            dataKey="name"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
                            itemStyle={{ color: "hsl(var(--foreground))" }}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="Ganhos"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Perdidos"
                            stroke="hsl(var(--destructive))"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
