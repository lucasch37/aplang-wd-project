"use client";
import { ClientTweetCard } from "@/components/magicui/client-tweet-card";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ReactNode } from "react";
import { ExternalLinkIcon, QuoteIcon } from "lucide-react";
import Link from "next/link";
import PoliticalCompass from "@/components/political-compass";
import PoliticalCompass2 from "@/components/political-compass-2";

interface AnimateInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

function AnimateInView({
  children,
  delay = 0,
  className = "",
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="pb-32">
      <motion.div
        className="h-screen relative flex items-center justify-center flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-8xl font-semibold">
          <LineShadowText className="italic w-full">
            AI Bias is Bigger Than Politics
          </LineShadowText>
        </div>
        <motion.div
          className="mt-8 text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The most dangerous AI biases aren&apos;t political-they&apos;re
          systemic, hidden in data, and affecting millions.
        </motion.div>
      </motion.div>

      <AnimateInView>
        <div className="text-5xl font-light border-b pb-8 mb-8 mt-16">
          You&apos;ve Probably Heard of &quot;Woke&quot; AI
        </div>
      </AnimateInView>

      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col gap-4">
          <AnimateInView delay={0.1}>
            <ClientTweetCard id="1760849603119947981" />
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <ClientTweetCard id="1760536160705908974" />
          </AnimateInView>
          <AnimateInView delay={0.3}>
            <ClientTweetCard id="1768746706043035827" />
          </AnimateInView>
        </div>

        <div className="flex flex-col gap-4">
          <AnimateInView delay={0.15}>
            <Image
              src={"/fox-sc-1.webp"}
              alt="fox screenshot 1"
              width={500}
              height={500}
              className="rounded-lg border shadow-md"
            />
          </AnimateInView>
          <AnimateInView delay={0.25}>
            <ClientTweetCard id="1760342944823873659" />
          </AnimateInView>
          <AnimateInView delay={0.35}>
            <Image
              src={"/fox-sc-2.jpg_large"}
              alt="fox screenshot 2"
              width={500}
              height={500}
              className="rounded-lg border shadow-md"
            />
          </AnimateInView>
        </div>

        <div className="flex flex-col gap-4">
          <AnimateInView delay={0.2}>
            <ClientTweetCard id="1760547697671434626" />
          </AnimateInView>
          <AnimateInView delay={0.3}>
            <Image
              src={"/sky-sc-1.jpg"}
              alt="fox screenshot 1"
              width={500}
              height={500}
              className="rounded-lg border shadow-md"
            />
          </AnimateInView>
          <AnimateInView delay={0.4}>
            <ClientTweetCard id="1603836383885332480" />
          </AnimateInView>
        </div>

        <div className="flex flex-col gap-4">
          <AnimateInView delay={0.25}>
            <ClientTweetCard id="1870827478555787308" />
          </AnimateInView>
          <AnimateInView delay={0.35}>
            <Image
              src={"/talktv-sc-1.jpg"}
              alt="fox screenshot 2"
              width={500}
              height={500}
              className="rounded-lg border shadow-md"
            />
          </AnimateInView>
          <AnimateInView delay={0.45}>
            <Image
              src={"/fox-sc-3.webp"}
              alt="fox screenshot 2"
              width={500}
              height={500}
              className="rounded-lg border shadow-md"
            />
          </AnimateInView>
        </div>
      </div>

      <AnimateInView delay={0.5}>
        <div className="mt-16 text-center text-2xl font-light">
          Turn on the news, and it sounds like the biggest problem with AI is
          whether it leans left or right. But is that really the whole story?
        </div>
      </AnimateInView>

      <div className="my-32 w-32 border-b mx-auto"></div>

      <AnimateInView delay={0.3}>
        <div className="text-7xl flex justify-center">
          <LineShadowText className="font-semibold italic">
            So What Even is AI Bias?
          </LineShadowText>
        </div>
      </AnimateInView>

      <div className="grid grid-cols-2 gap-12 mt-16">
        <div className="bg-background border p-8 font-light rounded-lg shadow-md text-2xl relative">
          <div className="absolute top-8 left-8">
            <QuoteIcon size={24} />
          </div>
          <div className="pl-10">
            Artificial intelligence bias, or AI bias, refers to systematic
            discrimination embedded within AI systems that can reinforce
            existing biases, and amplify discrimination, prejudice, and
            stereotyping.
          </div>
          <div className="flex justify-end w-full mt-4 text-lg items-center gap-2">
            - James Holdsworth,
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
              }
              alt="fox screenshot 2"
              width={500}
              height={500}
              className="w-12 h-fit"
            />
            <Link href="https://www.ibm.com/think/topics/ai-bias">
              <ExternalLinkIcon size={18} />
            </Link>
          </div>
        </div>
        <div className="text-2xl font-light">
          <div>
            For something to be truly categorized as a problematic AI bias, it
            should follow the main two conditions outlined in IBM&apos;s
            definition:
          </div>
          <ul className="list-disc pl-8 my-4 font-medium">
            <li>It is embedded strongly into AI systems</li>
            <li>It amplifies discrimination, prejudice, and stereotyping</li>
          </ul>
          <div>
            Otherwise, it lacks much societal impact, and can be mitigated
            easily.
          </div>
        </div>
      </div>

      <div className="text-2xl mt-16 font-light">
        <span className="font-medium">How is it caused?</span> The way almost
        every AI model works, from a chatbot like ChatGPT, to facial recognition
        algorithms, can be simplified to 3 steps:{" "}
        <ol className="list-decimal pl-8 my-4">
          <li>Data relevant to the purpose of the model is collected.</li>
          <li>The model finds patterns and trends within that data.</li>
          <li>Future decisions are made based off what it has learned.</li>
        </ol>
        If the data relfects historical inequalities or underrepresents certain
        groups of people, biases can easily creep in.
      </div>

      <div className="border rounded-lg shadow-md p-8 mt-16 bg-background text-2xl font-light">
        Imagine teaching a child to recognize what a “good employee” looks like
        by showing them a stack of resumes from the past 20 years. If most of
        those resumes are from men, guess what the child learns? They would
        likely incorrectly associate men with being better employees, simply
        because the dataset is skewed toward male candidates. This is similar to
        how AI models learn from data.
      </div>

      <div className="my-32 w-32 border-b mx-auto"></div>

      <AnimateInView delay={0.3}>
        <div className="text-7xl flex justify-center">
          <LineShadowText className="font-semibold italic">
            A Deeper Look at Political Bias
          </LineShadowText>
        </div>
      </AnimateInView>

      <div className="my-16 font-light text-2xl text-center">
        It&apos;s true that many popular AI models have been found to hold
        left-leaning political biases.
      </div>

      <div className="w-full">
        <PoliticalCompass />
      </div>

      <div className="my-16 font-medium text-2xl text-center">
        But there&apos;s more to the story than that...
      </div>

      <div className="grid grid-cols-2 gap-12 my-16 items-center">
        <div className="bg-background mx-auto border p-8 font-light rounded-lg shadow-md text-2xl relative">
          <div className="absolute top-8 left-8">
            <QuoteIcon size={24} />
          </div>
          <div className="pl-10">
            Studies have shown that relatively low-cost fine-tuning with
            politically skewed data can ideologically align an LLM toward
            left-leaning, moderate, or right-leaning political preferences.
          </div>
          <div className="flex justify-end w-full mt-4 text-lg items-center gap-2">
            - David Rozado{" "}
            <Image
              src={
                "https://solutions2024.pgpf.org/wp-content/uploads/sites/5/2024/07/Master-MI-Blue-RGB.png"
              }
              alt="fox screenshot 2"
              width={500}
              height={500}
              className="w-24 h-fit"
            />
            <Link href="https://manhattan.institute/article/measuring-political-preferences-in-ai-systems-an-integrative-approach">
              <ExternalLinkIcon size={18} />
            </Link>
          </div>
        </div>
        <div className="text-2xl font-light">
          The same Manhattan Institute study also reported that political biases
          are not inevitable and can be adjusted.
        </div>
      </div>

      <div className="my-16 font-light text-2xl text-center">
        This is supported by studies such as:
      </div>

      <div className="w-full">
        <PoliticalCompass2 />
      </div>
    </div>
  );
}
