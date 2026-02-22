"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { WinLossChart } from "@/components/dashboard/WinLossChart";
import { TendersTable } from "@/components/dashboard/TendersTable";
import { Gavel, MessageSquare, TrendingUp, AlertCircle, Clock } from "lucide-react";

export default function Home() {
  return (
    <MainLayout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Dashboard</h1>
          <div className="text-sm text-muted-foreground">
            Última atualização: Hoje, 14:30
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Disputas Hoje"
            value="3"
            icon={Gavel}
            trend="+2"
            trendUp={true}
            description="vs. ontem"
          />
          <KPICard
            title="Mensagens Não Lidas"
            value="5"
            icon={MessageSquare}
            trend="Atenção"
            trendUp={false}
            description="Novas mensagens"
          />
          <KPICard
            title="Lances Ganhos (Mês)"
            value="12"
            icon={TrendingUp}
            trend="+15%"
            trendUp={true}
            description="vs. mês passado"
          />
          <KPICard
            title="Prazos Críticos"
            value="2"
            icon={Clock}
            trend="Urgente"
            trendUp={false}
            description="Vencem em 24h"
          />
        </div>

        {/* Middle Section: Chart and maybe a secondary widget */}
        <div className="grid gap-6 md:grid-cols-7">
          <div className="col-span-4">
            <WinLossChart />
          </div>
          {/* Placeholder for another widget or just a spacer for now, let's make it span 4/3 or just full width chart if needed. 
                User requested "Meio (Tendências): Gráfico de linha...". 
                I will add a small "Live Activity" or "Recent Alerts" card to fill the space or just make the chart full width.
                Let's make it a 4/3 split with "Alertas Recentes" to maximize utility.
            */}
          <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold leading-none tracking-tight">Alertas Recentes</h3>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              {[
                { text: "Convocação Anexo: Pregão 45/2025", time: "10 min atrás", type: "critical" },
                { text: "Novo chat: Pregoeiro (TJ-SP)", time: "30 min atrás", type: "warning" },
                { text: "Edital impugnado: Prefeitura de Santos", time: "2h atrás", type: "info" },
              ].map((alert, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                  <div className={`w-2 h-2 mt-2 rounded-full ${alert.type === 'critical' ? 'bg-red-500' : alert.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'}`} />
                  <div>
                    <p className="text-sm font-medium">{alert.text}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Table */}
        <TendersTable />
      </div>
    </MainLayout>
  );
}
