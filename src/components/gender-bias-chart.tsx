"use client";

import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function GenderBiasChart() {
  // Data for gender bias in resume name preferences
  const genderBiasData = [
    {
      gender: "Male-Associated Names",
      percentage: 52,
      color: "#22c55e",
    },
    {
      gender: "Female-Associated Names",
      percentage: 11,
      color: "#f59e0b",
    },
  ];

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle>
          AI Resume-Evaluating System Preference for Names on Resumes
        </CardTitle>
        <CardDescription>
          Analysis showing the percentage of time the system preferred
          male-associated names versus female-associated names on resumes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            percentage: {
              label: "Percentage",
              color: "#22c55e",
            },
          }}
          className="h-[400px]"
        >
          <BarChart
            data={genderBiasData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            layout="vertical"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              type="number"
              domain={[0, 60]}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis
              dataKey="gender"
              type="category"
              width={150}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              content={
                <ChartTooltipContent
                  formatter={(value) => `${value}%`}
                  itemSorter={() => 0}
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    padding: "12px",
                    borderRadius: "6px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {(props) => {
                    const { payload } = props;
                    if (payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="p-2">
                          <p className="font-semibold text-base">
                            {data.gender}
                          </p>
                          <p className="text-lg font-bold mt-1">
                            Preferred {data.percentage}% of the time
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {data.gender === "Male-Associated Names"
                              ? "Systems showed a strong preference for male-associated names"
                              : "Systems showed a significantly lower preference for female-associated names"}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {data.gender === "Male-Associated Names"
                              ? "Nearly 5x more likely to be preferred than female names"
                              : "Almost 5x less likely to be preferred than male names"}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                </ChartTooltipContent>
              }
            />
            <Bar dataKey="percentage" radius={[0, 4, 4, 0]} barSize={60}>
              {genderBiasData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
