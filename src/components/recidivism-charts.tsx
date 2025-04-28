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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Custom tooltip component for enhanced information
const CustomTooltip = ({ active, payload, label, description }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border rounded-md shadow-md p-3">
        <p className="font-semibold">{label}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center mt-1">
            <div
              className="w-3 h-3 mr-2 rounded-sm"
              style={{ backgroundColor: entry.color }}
            />
            <p className="text-sm">
              {entry.name}: {entry.value}%
            </p>
          </div>
        ))}
        {description && (
          <p className="text-xs text-muted-foreground mt-2">{description}</p>
        )}
      </div>
    );
  }
  return null;
};

export function RecidivismCharts() {
  // Data for non-recidivists misclassified as higher risk
  const nonRecidivistData = [
    { race: "Black Defendants", percentage: 45 },
    { race: "White Defendants", percentage: 23 },
  ];

  // Data for recidivists misclassified as lower risk
  const recidivistData = [
    { race: "Black Defendants", percentage: 28 },
    { race: "White Defendants", percentage: 48 },
  ];

  // Data for increased likelihood of higher risk scores
  const riskScoreData = [
    { category: "General Recidivism", percentage: 45 },
    { category: "Violent Recidivism", percentage: 77 },
  ];

  // Data for violent recidivism misclassification
  const violentRecidivismData = [
    {
      category: "Higher Risk Misclassification",
      description:
        "Black defendants more likely to be misclassified as higher risk",
      percentage: 100,
    },
    {
      category: "Lower Risk Misclassification",
      description:
        "White recidivists more likely to be misclassified as lower risk",
      percentage: 63,
    },
  ];

  return (
    <div className="space-y-8">
      <Tabs defaultValue="misclassification" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6 border">
          <TabsTrigger value="misclassification" className="border">
            Misclassification Rates
          </TabsTrigger>
          <TabsTrigger value="bias" className="border">
            Bias Indicators
          </TabsTrigger>
        </TabsList>

        <TabsContent value="misclassification" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>
                Non-Recidivists Misclassified as Higher Risk
              </CardTitle>
              <CardDescription>
                Black defendants who did not recidivate over a two-year period
                were nearly twice as likely to be misclassified as higher risk
                compared to their white counterparts.
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
                className="h-[300px]"
              >
                <BarChart
                  data={nonRecidivistData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="race" />
                  <YAxis
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 50]}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value) => `${value}%`}
                        itemSorter={() => 0}
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                        }}
                      >
                        {(props) => {
                          const { payload } = props;
                          if (payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="p-2">
                                <p className="font-semibold">{data.race}</p>
                                <p className="text-sm text-muted-foreground">
                                  {data.percentage}% of{" "}
                                  {data.race.toLowerCase()} who did not
                                  recidivate were misclassified as higher risk
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      </ChartTooltipContent>
                    }
                  />
                  <Bar dataKey="percentage" radius={[4, 4, 0, 0]}>
                    {nonRecidivistData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 0 ? "#22c55e" : "#f59e0b"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recidivists Misclassified as Lower Risk</CardTitle>
              <CardDescription>
                White defendants who re-offended within the next two years were
                mistakenly labeled low risk almost twice as often as black
                re-offenders.
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
                className="h-[300px]"
              >
                <BarChart
                  data={recidivistData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="race" />
                  <YAxis
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 50]}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value) => `${value}%`}
                        itemSorter={() => 0}
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                        }}
                      >
                        {(props) => {
                          const { payload } = props;
                          if (payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="p-2">
                                <p className="font-semibold">{data.race}</p>
                                <p className="text-sm text-muted-foreground">
                                  {data.percentage}% of{" "}
                                  {data.race.toLowerCase()} who did recidivate
                                  were mistakenly labeled as low risk
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      </ChartTooltipContent>
                    }
                  />
                  <Bar dataKey="percentage" radius={[4, 4, 0, 0]}>
                    {recidivistData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 0 ? "#22c55e" : "#f59e0b"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bias" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>
                Increased Likelihood of Higher Risk Scores for Black Defendants
              </CardTitle>
              <CardDescription>
                When controlling for prior crimes, future recidivism, age, and
                gender, black defendants were more likely to be assigned higher
                risk scores than white defendants.
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
                className="h-[300px]"
              >
                <BarChart
                  data={riskScoreData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="category" />
                  <YAxis
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 100]}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value) => `${value}%`}
                        itemSorter={() => 0}
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                        }}
                      >
                        {(props) => {
                          const { payload } = props;
                          if (payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="p-2">
                                <p className="font-semibold">{data.category}</p>
                                <p className="text-sm text-muted-foreground">
                                  Black defendants were {data.percentage}% more
                                  likely to be assigned higher risk scores than
                                  white defendants
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  (When controlling for prior crimes, future
                                  recidivism, age, and gender)
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      </ChartTooltipContent>
                    }
                  />
                  <Bar
                    dataKey="percentage"
                    radius={[4, 4, 0, 0]}
                    fill="#22c55e"
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Violent Recidivism Misclassification</CardTitle>
              <CardDescription>
                Black defendants were twice as likely to be misclassified as
                higher risk of violent recidivism, while white violent
                recidivists were 63% more likely to be misclassified as low
                risk.
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
                className="h-[300px]"
              >
                <BarChart
                  data={violentRecidivismData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="category" />
                  <YAxis
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 100]}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value) => `${value}%`}
                        itemSorter={() => 0}
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                        }}
                      >
                        {(props) => {
                          const { payload } = props;
                          if (payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="p-2">
                                <p className="font-semibold">{data.category}</p>
                                <p className="text-sm text-muted-foreground">
                                  {data.description}: {data.percentage}% more
                                  likely
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      </ChartTooltipContent>
                    }
                  />
                  <Bar
                    dataKey="percentage"
                    radius={[4, 4, 0, 0]}
                    fill="#22c55e"
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
