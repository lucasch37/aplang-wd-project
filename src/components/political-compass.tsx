/* eslint-disable */
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import {
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function PoliticalCompass() {
  // Sample data points representing different political positions with associated people
  const data = [
    {
      name: "OpenAI GPT-3.5 Turbo",
      x: -1.5,
      y: -2.0,
      label: "OpenAI GPT-3.5 Turbo",
      description:
        "Leans moderately towards social liberty and left economic views.",
      creator: "OpenAI",
    },
    {
      name: "OpenAI GPT-4 Turbo",
      x: -3.0,
      y: -2.5,
      label: "OpenAI GPT-4 Turbo",
      description:
        "Leans towards social liberty and moderately left economic views.",
      creator: "OpenAI",
    },
    {
      name: "OpenAI GPT-4o",
      x: -2.8,
      y: -3.0,
      label: "OpenAI GPT-4o",
      description:
        "Leans towards social liberty and moderately left economic views.",
      creator: "OpenAI",
    },
    {
      name: "Anthropic Claude 3 Opus",
      x: -6.5,
      y: -4.5,
      label: "Anthropic Claude 3 Opus",
      description:
        "Strongly leans towards social liberty and left economic views.",
      creator: "Anthropic",
    },
    {
      name: "Anthropic Claude 3.5 Sonnet",
      x: -3.5,
      y: -3.5,
      label: "Anthropic Claude 3.5 Sonnet",
      description:
        "Leans significantly towards social liberty and moderately left economic views.",
      creator: "Anthropic",
    },
    {
      name: "Anthropic Claude 3 Haiku",
      x: -2.5,
      y: -4.0,
      label: "Anthropic Claude 3 Haiku",
      description:
        "Leans significantly towards social liberty and moderately left economic views.",
      creator: "Anthropic",
    },
    {
      name: "Google Gemini 1.5 Pro",
      x: -1.8,
      y: -1.5,
      label: "Google Gemini 1.5 Pro",
      description:
        "Leans moderately towards social liberty and left economic views.",
      creator: "Google",
    },
    {
      name: "Google Gemini 1.5 Flash",
      x: -2.0,
      y: -2.2,
      label: "Google Gemini 1.5 Flash",
      description:
        "Leans moderately towards social liberty and left economic views.",
      creator: "Google",
    },
    {
      name: "xAI Grok Beta",
      x: 0.5,
      y: -1.8,
      label: "xAI Grok Beta",
      description:
        "Leans moderately towards social liberty with near-center economic views.",
      creator: "xAI",
    },
    {
      name: "Mistral AI Mixtral 8x7B Instruct v0.1",
      x: -1.0,
      y: -1.5,
      label: "Mistral AI Mixtral 8x7B Instruct v0.1",
      description:
        "Leans moderately towards social liberty and slightly left economic views.",
      creator: "Mistral AI",
    },
    {
      name: "Mistral AI Mixtral 8x7B Instruct v0.2",
      x: -1.2,
      y: -1.6,
      label: "Mistral AI Mixtral 8x7B Instruct v0.2",
      description:
        "Leans moderately towards social liberty and slightly left economic views.",
      creator: "Mistral AI",
    },
    {
      name: "Hugging Face Zephyr 7B Beta",
      x: -2.2,
      y: -1.0,
      label: "Hugging Face Zephyr 7B Beta",
      description:
        "Leans slightly towards social liberty and moderately left economic views.",
      creator: "Hugging Face",
    },
    {
      name: "Meta Llama 2 7b Chat",
      x: -2.5,
      y: -2.0,
      label: "Meta Llama 2 7b Chat",
      description:
        "Leans moderately towards social liberty and left economic views.",
      creator: "Meta",
    },
    {
      name: "Meta Llama 2 13b Chat",
      x: -2.3,
      y: -2.4,
      label: "Meta Llama 2 13b Chat",
      description:
        "Leans moderately towards social liberty and left economic views.",
      creator: "Meta",
    },
    {
      name: "Meta Llama 2 70b Chat",
      x: -1.8,
      y: -1.9,
      label: "Meta Llama 2 70b Chat",
      description:
        "Leans moderately towards social liberty and left economic views.",
      creator: "Meta",
    },
    {
      name: "Meta Llama 3 8B Instruct",
      x: -0.8,
      y: -1.2,
      label: "Meta Llama 3 8B Instruct",
      description:
        "Leans slightly towards social liberty and slightly left economic views (near center).",
      creator: "Meta",
    },
    {
      name: "Meta Llama 3 70B Instruct",
      x: -0.6,
      y: -1.0,
      label: "Meta Llama 3 70B Instruct",
      description:
        "Leans slightly towards social liberty and slightly left economic views (very near center).",
      creator: "Meta",
    },
    {
      name: "Google Gemma 1.1 2b IT",
      x: 0.2,
      y: -1.0,
      label: "Google Gemma 1.1 2b IT",
      description:
        "Leans slightly towards social liberty with near-center economic views.",
      creator: "Google",
    },
    {
      name: "Google Gemma 1.1 7b IT",
      x: -0.5,
      y: -1.4,
      label: "Google Gemma 1.1 7b IT",
      description:
        "Leans moderately towards social liberty with slightly left economic views.",
      creator: "Google",
    },

    // Base/Foundation LLMs (More varied)
    {
      name: "OpenAI Babbage 002",
      x: 0.8,
      y: -0.8,
      label: "OpenAI Babbage 002",
      description:
        "Slightly libertarian and slightly right economically (near center).",
      creator: "OpenAI",
    },
    {
      name: "OpenAI Davinci 002",
      x: 1.0,
      y: 0.5,
      label: "OpenAI Davinci 002",
      description:
        "Slightly authoritarian and slightly right economically (near center).",
      creator: "OpenAI",
    },
    {
      name: "Google Gemma 2b",
      x: -1.5,
      y: -3.0,
      label: "Google Gemma 2b",
      description:
        "Leans towards social liberty and moderately left economic views.",
      creator: "Google",
    },
    {
      name: "Google Gemma 7b",
      x: 1.2,
      y: -2.0,
      label: "Google Gemma 7b",
      description:
        "Leans moderately towards social liberty and slightly right economic views.",
      creator: "Google",
    },
    {
      name: "Meta Llama 2 7b",
      x: 1.5,
      y: 2.5,
      label: "Meta Llama 2 7b",
      description:
        "Leans moderately towards authoritarian social views and right economic views.",
      creator: "Meta",
    },
    {
      name: "Meta Llama 2 13b",
      x: 1.8,
      y: 1.0,
      label: "Meta Llama 2 13b",
      description:
        "Leans slightly towards authoritarian social views and moderately right economic views.",
      creator: "Meta",
    },
  ];

  const companies = [
    {
      name: "OpenAI",
      website: "https://openai.com",
      logo: "https://openai.com/favicon.ico",
    },
    {
      name: "Anthropic",
      website: "https://www.anthropic.com",
      logo: "https://www.anthropic.com/favicon.ico",
    },
    {
      name: "Google",
      website: "https://www.google.com",
      logo: "https://www.google.com/favicon.ico",
    },
    {
      name: "xAI",
      website: "https://x.ai",
      logo: "https://x.ai/favicon.ico",
    },
    {
      name: "Mistral AI",
      website: "https://mistral.ai",
      logo: "https://mistral.ai/favicon.ico",
    },
    {
      name: "Hugging Face",
      website: "https://huggingface.co",
      logo: "https://huggingface.co/favicon.ico",
    },
    {
      name: "Nous Research",
      website: "https://nous.com",
      logo: "https://nous.com/favicon.ico",
    },
    {
      name: "Meta",
      website: "https://meta.com",
      logo: "https://cdn.pixabay.com/photo/2021/11/01/15/20/meta-logo-6760788_1280.png",
    },
  ];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const company = companies.find((c) => c.name === data.creator);
      return (
        <div className="bg-white p-3 border rounded-md shadow-md max-w-xs">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-base flex gap-2 items-center">
              <Image
                src={company?.logo || ""}
                alt={data.label}
                width={100}
                height={100}
                className="w-6 h-fit"
              />
              <div className="line-clamp-1">{data.label}</div>
            </h3>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded line-clamp-1">
              {data.creator}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            {data.description}
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
          In January 2025,{" "}
          <a
            className="underline text-blue-500"
            href="https://manhattan.institute/article/measuring-political-preferences-in-ai-systems-an-integrative-approach"
          >
            a comphrehensive study by the Manhattan Institute
          </a>{" "}
          concluded that "most user-facing conversational AI systems today
          display left-leaning political preferences in the textual content that
          they generate, though the degree of this bias varies across different
          systems." One of their studies included asking political compass
          questions to LLM (the term for chatbots such as ChatGPT and Gemini)
          models, and plotting the results. The findings are shown below:
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center font-medium text-xl">
          Average LLM Results on 3 Political Orientation Tests
        </div>
        <div className="text-center text-sm text-muted-foreground">
          Hover on a data point to view more info.
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
                    fill={entry.x > 0 ? "#ef4444" : "#3b82f6"}
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
