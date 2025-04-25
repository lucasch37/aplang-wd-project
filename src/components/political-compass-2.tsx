/* eslint-disable */
"use client";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function PoliticalCompass2() {
  // Sample data points representing different political positions with associated people
  const data = [
    // Samples for GPT-3.5-turbo-0613 (Blue)
    { name: "GPT-3.5-turbo-0613", x: -4.1, y: -5.2 },
    { name: "GPT-3.5-turbo-0613", x: -5.5, y: -4.8 },
    { name: "GPT-3.5-turbo-0613", x: -3.8, y: -6.1 },
    { name: "GPT-3.5-turbo-0613", x: -4.6, y: -4.5 },
    { name: "GPT-3.5-turbo-0613", x: -2.9, y: -4.9 },
    { name: "GPT-3.5-turbo-0613", x: -5.1, y: -5.8 },
    { name: "GPT-3.5-turbo-0613", x: -4.3, y: -4.2 },
    { name: "GPT-3.5-turbo-0613", x: -3.5, y: -5.5 },
    { name: "GPT-3.5-turbo-0613", x: -6.0, y: -5.1 },
    { name: "GPT-3.5-turbo-0613", x: -4.8, y: -6.5 },
    { name: "GPT-3.5-turbo-0613", x: -3.2, y: -3.9 },
    { name: "GPT-3.5-turbo-0613", x: -5.7, y: -4.6 },
    { name: "GPT-3.5-turbo-0613", x: -4.0, y: -5.0 },
    { name: "GPT-3.5-turbo-0613", x: -4.9, y: -5.3 },
    { name: "GPT-3.5-turbo-0613", x: -3.6, y: -4.7 },
    { name: "GPT-3.5-turbo-0613", x: -5.3, y: -6.0 },
    { name: "GPT-3.5-turbo-0613", x: -4.4, y: -3.8 },
    { name: "GPT-3.5-turbo-0613", x: -3.9, y: -6.8 },
    { name: "GPT-3.5-turbo-0613", x: -5.0, y: -4.1 },
    { name: "GPT-3.5-turbo-0613", x: -4.2, y: -5.6 },

    // Samples for GPT-3.5-turbo-1106 (Red)
    { name: "GPT-3.5-turbo-1106", x: -1.8, y: -2.1 },
    { name: "GPT-3.5-turbo-1106", x: -0.5, y: -1.5 },
    { name: "GPT-3.5-turbo-1106", x: -2.5, y: -3.0 },
    { name: "GPT-3.5-turbo-1106", x: -1.2, y: -0.8 },
    { name: "GPT-3.5-turbo-1106", x: -3.1, y: -2.4 },
    { name: "GPT-3.5-turbo-1106", x: 0.2, y: -1.9 },
    { name: "GPT-3.5-turbo-1106", x: -2.0, y: -3.5 },
    { name: "GPT-3.5-turbo-1106", x: -1.5, y: -1.2 },
    { name: "GPT-3.5-turbo-1106", x: -0.8, y: -2.8 },
    { name: "GPT-3.5-turbo-1106", x: -2.8, y: -1.0 },
    { name: "GPT-3.5-turbo-1106", x: -1.0, y: -3.8 },
    { name: "GPT-3.5-turbo-1106", x: 0.5, y: -0.5 },
    { name: "GPT-3.5-turbo-1106", x: -3.5, y: -1.7 },
    { name: "GPT-3.5-turbo-1106", x: -1.6, y: -2.5 },
    { name: "GPT-3.5-turbo-1106", x: -0.2, y: -3.2 },
    { name: "GPT-3.5-turbo-1106", x: -2.2, y: -0.3 },
    { name: "GPT-3.5-turbo-1106", x: -1.3, y: -1.8 },
    { name: "GPT-3.5-turbo-1106", x: -2.9, y: -3.6 },
    { name: "GPT-3.5-turbo-1106", x: 0.8, y: -2.2 },
    { name: "GPT-3.5-turbo-1106", x: -1.9, y: -1.4 },
  ];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border rounded-md shadow-md w-[300px]">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-base flex gap-2 items-center">
              <Image
                src={"https://openai.com/favicon.ico"}
                alt={data.name}
                width={100}
                height={100}
                className="w-6 h-fit"
              />
              <div className="line-clamp-1">{data.name}</div>
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            {data.name === "GPT-3.5-turbo-0613"
              ? "OpenAI's older model."
              : "OpenAI's newer model."}
          </p>
          <div className="flex justify-between text-xs text-muted-foreground border-t pt-2">
            <span>
              Economic: {data.x > 0 ? "Right" : data.x < 0 ? "Left" : "Center"}{" "}
              ({data.x})
            </span>
            <span>
              Social: {data.y > 0 ? "Auth" : data.y < 0 ? "Lib" : "Center"} (
              {data.y})
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full  mx-auto px-4 py-6">
      <CardHeader>
        <div className="font-light text-xl">
          In February 2025,{" "}
          <a
            className="underline text-blue-500"
            href="https://www.nature.com/articles/s41599-025-04465-z"
          >
            a Chinese study{" "}
          </a>{" "}
          found through extensive testing that the AI model ChatGPT was
          undergoing a rightward shift in its values, even though it remained
          slightly biased towards the left. Below is a chart of one of their
          tests, comparing political orientations between an older and newer
          model of ChatGPT through several repeated tests that were plotted.
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center font-medium text-xl">
          Comparison of the 0613 and 1106 versions of GPT3.5-Turbo
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Hover on a data point to view more info.
        </div>

        <div className="flex gap-4 items-center justify-center my-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#22c55e]"></div>
            <div className="text-sm text-muted-foreground">
              GPT-3.5-turbo-0613 (Old)
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#eab308]"></div>
            <div className="text-sm text-muted-foreground">
              GPT-3.5-turbo-1106 (New)
            </div>
          </div>
        </div>

        <div className="h-[500px] max-w-3xl mx-auto w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis
                type="number"
                dataKey="x"
                domain={[-10, 10]}
                name="Economic"
                label={{ value: "Economic Left/Right", position: "bottom" }}
              />
              <YAxis
                type="number"
                dataKey="y"
                domain={[-10, 10]}
                name="Social"
                label={{
                  value: "Authoritarian/Libertarian",
                  angle: -90,
                  position: "left",
                }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ strokeDasharray: "3 3" }}
              />
              <ReferenceLine x={0} stroke="#666" />
              <ReferenceLine y={0} stroke="#666" />

              {/* Data points */}
              <Scatter
                name="Political Positions"
                data={data}
                fill="#333"
                shape="circle"
                fillOpacity={0.8}
                cursor="pointer"
                legendType="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.name === "GPT-3.5-turbo-1106"
                        ? "#eab308"
                        : "#22c55e"
                    }
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
