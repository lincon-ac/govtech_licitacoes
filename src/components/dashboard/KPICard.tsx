import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
    description?: string;
}

export function KPICard({ title, value, icon: Icon, trend, trendUp, description }: KPICardProps) {
    return (
        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium text-muted-foreground">{title}</h3>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="pt-2">
                <div className="text-2xl font-bold">{value}</div>
                {(trend || description) && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        {trend && (
                            <span className={cn("font-medium", trendUp ? "text-green-500" : "text-red-500")}>
                                {trend}
                            </span>
                        )}
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
