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
import { RecidivismCharts } from "@/components/recidivism-charts";
import { GenderBiasChart } from "@/components/gender-bias-chart";

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
          The most dangerous AI biases aren&apos;t political—they&apos;re
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
              alt="sky news screenshot"
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
              alt="talk tv screenshot"
              width={500}
              height={500}
              className="rounded-lg border shadow-md"
            />
          </AnimateInView>
          <AnimateInView delay={0.45}>
            <Image
              src={"/fox-sc-3.webp"}
              alt="fox screenshot 3"
              width={500}
              height={500}
              className="rounded-lg border shadow-md"
            />
          </AnimateInView>
        </div>
      </div>

      <AnimateInView delay={0.5}>
        <div className="mt-16 text-center text-2xl font-light">
          Turn on the news or go online, and it sounds like the biggest problem
          with AI is whether it leans left or right. But this isn&apos;t the
          whole story, and it is taking away from what&apos;s actually
          important.
        </div>
      </AnimateInView>

      <motion.div
        className="my-32 w-32 border-b mx-auto"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <AnimateInView delay={0.3}>
        <div className="text-7xl flex justify-center">
          <LineShadowText className="font-semibold italic">
            So What Even is AI Bias?
          </LineShadowText>
        </div>
      </AnimateInView>

      <div className="grid grid-cols-2 gap-12 mt-16">
        <AnimateInView delay={0.2}>
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
                alt="IBM logo"
                width={500}
                height={500}
                className="w-12 h-fit"
              />
              <Link href="https://www.ibm.com/think/topics/ai-bias">
                <ExternalLinkIcon size={18} />
              </Link>
            </div>
          </div>
        </AnimateInView>
        <AnimateInView delay={0.3}>
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
        </AnimateInView>
      </div>

      <AnimateInView delay={0.2}>
        <div className="text-2xl mt-16 font-light">
          <span className="font-medium">How is it caused?</span> The way almost
          every AI model works, from a chatbot like ChatGPT, to facial
          recognition algorithms, can be simplified to 3 steps:{" "}
          <ol className="list-decimal pl-8 my-4">
            <li>Data relevant to the purpose of the model is collected.</li>
            <li>The model finds patterns and trends within that data.</li>
            <li>Future decisions are made based on what it has learned.</li>
          </ol>
          If the data reflects historical inequalities or underrepresents
          certain groups of people, biases can easily creep in.
        </div>
      </AnimateInView>

      <AnimateInView delay={0.4}>
        <div className="border rounded-lg shadow-md p-8 mt-16 bg-background text-2xl font-light">
          Imagine teaching a child to recognize what a "good employee" looks
          like by showing them a stack of resumes from the past 20 years. If
          most of those resumes are from men, guess what the child learns? They
          would likely incorrectly associate men with being better employees,
          simply because the dataset is skewed toward male candidates. This is
          similar to how AI models learn from data.
        </div>
      </AnimateInView>

      <motion.div
        className="my-32 w-32 border-b mx-auto"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <AnimateInView delay={0.3}>
        <div className="text-7xl flex justify-center">
          <LineShadowText className="font-semibold italic">
            A Deeper Look at Political Bias
          </LineShadowText>
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="my-16 font-light text-2xl text-center">
          It&apos;s true that many popular AI models have been found to hold
          left-leaning political biases.
        </div>
      </AnimateInView>

      <AnimateInView delay={0.3}>
        <div className="w-full">
          <PoliticalCompass />
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="my-16 font-medium text-3xl text-center">
          But there&apos;s more to the story than that...
        </div>
      </AnimateInView>

      <div className="grid grid-cols-2 gap-12 my-16 items-center">
        <AnimateInView delay={0.2}>
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
                alt="Manhattan Institute logo"
                width={500}
                height={500}
                className="w-24 h-fit"
              />
              <Link href="https://manhattan.institute/article/measuring-political-preferences-in-ai-systems-an-integrative-approach">
                <ExternalLinkIcon size={18} />
              </Link>
            </div>
          </div>
        </AnimateInView>
        <AnimateInView delay={0.3}>
          <div className="text-2xl font-light">
            The same Manhattan Institute study also reported that political
            biases are not inevitable and can be adjusted.
          </div>
        </AnimateInView>
      </div>

      <AnimateInView delay={0.2}>
        <div className="my-16 font-light text-2xl text-center">
          This is supported by studies such as:
        </div>
      </AnimateInView>

      <AnimateInView delay={0.3}>
        <div className="w-full">
          <PoliticalCompass2 />
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="my-16 font-light text-2xl text-center">
          So what does this mean?
        </div>
      </AnimateInView>

      <AnimateInView delay={0.4}>
        <div className="border rounded-lg shadow-md p-8 mt-16 bg-background text-xl font-light space-y-8">
          <div>
            News outlets and social media influencers will claim that all AI has
            been designed specifically by its developers to be biased toward a
            certain political ideology, and there&apos;s no changing it unless
            action is taken against them. But how can adjustments be made so
            easily, and how could there be such a noticeable shift to the right
            by a company so "woke"? It&apos;s because:
          </div>
          <div className="font-medium text-3xl text-center my-12">
            Political biases are not deep-rooted into AI.
          </div>
          <div>
            These biases aren&apos;t shaped by historical occurrences in data as
            most problematic biases are. For centuries, tons of records used as
            data have been created supporting both the liberal and conservative
            viewpoints evenly, and there is evidently no leaning at all in data
            used to train AI models. Rather, they&apos;re shaped by a number of
            decisions that can be constantly changed. The people you view online
            may want their AI to be completely neutral in their eyes, but this
            is almost impossible. As mentioned in Brian Christian's popular
            book,{" "}
            <a
              className="text-blue-500 underline italic"
              href="https://brianchristian.org/the-alignment-problem/"
            >
              The Alignment Problem,
            </a>{" "}
            complete fairness and neutrality is impossible to both define and
            achieve. What constitutes as 'neutral' can itself be a strong
            political opinion. Therefore, inevitably, decisions must be made and
            a specific stance must be taken, whether left or right, which can be
            easily changed at any time, as shown above.
          </div>
          <div className="mb-8">
            While what you may be hearing on the news about current existing
            biases may hold some truth, the fact that political biases are not
            as embedded into the fundamental systems of AI heavily limits its
            urgency as an issue in humanity&apos;s future.
          </div>
          <div>
            The real, urgent bias issues are deeply ingrained into all the data
            available on the internet. No matter what decisions are made, or
            measures are taken to control them, they are always present in any
            algorithm or model trained on data. A shift as big as the one
            displayed above in the right direction for any of these issues would
            be considered a major breakthrough, much more than an unnoticed
            development.
          </div>
        </div>
      </AnimateInView>

      <motion.div
        className="my-32 w-32 border-b mx-auto"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <AnimateInView delay={0.3}>
        <div className="text-7xl flex justify-center">
          <LineShadowText className="font-semibold italic">
            So What Are These Issues?
          </LineShadowText>
        </div>
      </AnimateInView>

      <div className="grid grid-cols-2 gap-12 mt-16">
        <AnimateInView delay={0.2}>
          <div className="text-2xl font-light space-y-8">
            <div>
              Before exploring these issues, it is important to establish that
              political leanings in AI, while they exist, have not had any
              significant impact on society or caused any societal shift.
            </div>
            <div>
              Despite the majority of AI models popular in the United States
              having been found to be left-leaning, the country is more
              Republican than ever. This can be explained by how the majority of
              'woke' responses are delivered to people specifically looking to
              solicit responses that would contradict their beliefs, and have
              almost no effect on the opinions of the general public.
            </div>
            <div className="font-medium">
              The obsession over politically biased AI is not only taking the
              spotlight away from issues more deeply rooted and harder to
              remove, but also issues that are much more impactful.
            </div>
          </div>
        </AnimateInView>
        <AnimateInView delay={0.3}>
          <div>
            <div className="bg-background border p-8 font-light rounded-lg shadow-md text-2xl relative">
              <Image
                src="/map.webp"
                alt="map"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className="text-center mt-2">
              2024 U.S. Election Map - The U.S. is still strongly conservative
            </div>
          </div>
        </AnimateInView>
      </div>

      <AnimateInView>
        <div className="text-5xl font-light border-b pb-8 mb-8 mt-16">
          Racial Bias
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="text-2xl font-light">
          In 2016, ProPublica, an investigative journalism organization,
          published findings surrounding COMPAS (Correctional Offender
          Management Profiling for Alternative Sanctions), a risk assessment
          algorithm used in the US criminal justice system. The algorithm was
          found to be biased against black defendants, falsely flagging them as
          future criminals far more often than for white defendants. Their
          findings are shown below:
        </div>
      </AnimateInView>

      <AnimateInView delay={0.3}>
        <div className="font-light text-2xl my-8">
          <span className="underline font-medium">Recidivist:</span> a convicted
          criminal who reoffends, especially repeatedly.
        </div>
      </AnimateInView>

      <AnimateInView delay={0.4}>
        <RecidivismCharts />
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="text-2xl font-light my-12">
          Despite being a major development in the American justice system,
          these findings are still largely unknown to the general public, which
          is alarming considering the potential impact of this algorithm on the
          lives of millions of people. The algorithm is still in use today, and
          has been found to be used in over 20 states.
        </div>
      </AnimateInView>

      <AnimateInView delay={0.3}>
        <div className="text-2xl font-light mb-12">
          Another real-world impact of racial bias in AI is the use of facial
          recognition, which has caused many wrongful arrests all around the
          world, disproportionately for black people. For example, in 2023 the
          pharmacy chain Rite Aid was sued for falsely identifying many people
          of color as shoplifters, searching, scaring, and embarrassing them.
          These biases can extend into the real world as much as causing you to
          be arrested while just walking down the street, as experienced by
          black man Shaun Thompson in the UK.
        </div>
      </AnimateInView>

      <AnimateInView delay={0.4}>
        <div className="bg-background mx-auto border p-8 font-light rounded-lg shadow-md text-2xl relative">
          <div className="absolute top-8 left-8">
            <QuoteIcon size={24} />
          </div>
          <div className="pl-10">
            Rite Aid's actions disproportionately affected people of color,
            especially Black people, Asians and Latinos, all in the name of
            keeping "persons of interest" out of hundreds of Rite Aid stores in
            cities including New York, Philadelphia and Sacramento, the F.T.C.
            said.
          </div>
          <div className="flex justify-end w-full mt-4 text-lg items-center gap-2">
            - Eduardo Medina{" "}
            <Image
              src={"/nyt.png"}
              alt="New York Times logo"
              width={500}
              height={500}
              className="w-36 h-fit"
            />
            <Link href="https://www.nytimes.com/2023/12/21/business/rite-aid-ai-facial-recognition.html">
              <ExternalLinkIcon size={18} />
            </Link>
          </div>
        </div>
      </AnimateInView>

      <AnimateInView delay={0.5}>
        <div className="bg-background mx-auto border p-8 font-light rounded-lg shadow-md mt-12 text-2xl relative">
          <div className="absolute top-8 left-8">
            <QuoteIcon size={24} />
          </div>
          <div className="pl-10">
            Mr Thompson, who works for youth-advocacy group Streetfathers,
            didn't think much of it when he walked by a white van near London
            Bridge in February. Within a few seconds, though, he was approached
            by police and told he was a wanted man.
            <br />
            "That's when I got a nudge on the shoulder, saying at that time I'm
            wanted".
          </div>
          <div className="flex justify-end w-full mt-4 text-lg items-center gap-2">
            - Shaun Thompson{" "}
            <Link href="https://www.bbc.com/news/technology-69055945">
              <ExternalLinkIcon size={18} />
            </Link>
          </div>
        </div>
      </AnimateInView>

      <AnimateInView>
        <div className="text-5xl font-light border-b pb-8 mb-8 mt-16">
          Gender Bias
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="text-2xl font-light mb-12">
          A University of Washington study found significant gender bias in how
          three advanced large language models (LLMs) ranked over 550 real-world
          resumes. Across 3 million comparisons, LLMs preferred white-associated
          names 85% of the time and male-associated names 52% of the time.
        </div>
      </AnimateInView>

      <AnimateInView delay={0.3}>
        <GenderBiasChart />
      </AnimateInView>

      <AnimateInView delay={0.4}>
        <div className="text-2xl font-light my-12">
          AI is being used more and more each year to evaluate resumes, and is
          being used by large companies that recruit tons of employees such as
          Amazon, Hilton, and more. It is an extremely impactful way that AI
          bias could interfere in the real world, affecting someone's job, one
          of the most integral parts of their life, and many people are
          oblivious to it.
        </div>
      </AnimateInView>

      <motion.div
        className="my-32 w-32 border-b mx-auto"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <AnimateInView delay={0.3}>
        <div className="text-7xl flex justify-center">
          <LineShadowText className="font-semibold italic">
            Conclusion
          </LineShadowText>
        </div>
      </AnimateInView>

      <AnimateInView delay={0.4}>
        <div className="border rounded-lg shadow-md p-8 mt-16 bg-background text-2xl font-light space-y-8">
          Online, on many social platforms, the issue of political bias is
          commonly called out by many influential people, and for many it is the
          only issue they know of regarding AI bias. However, this focus can
          divert attention from more pressing and consequential biases, such as
          those related to race, gender, and socioeconomic status. While
          political bias in AI is a legitimate topic of discussion, its impact
          is far less severe than biases that reinforce systemic discrimination
          or disproportionately harm marginalized groups. By assessing the
          urgency of different AI bias issues, we can ensure that efforts to
          improve AI systems prioritize the areas where they can make the most
          meaningful difference.
        </div>
      </AnimateInView>

      <motion.div
        className="my-32 w-32 border-b mx-auto"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <AnimateInView delay={0.3}>
        <div className="text-7xl flex justify-center">
          <LineShadowText className="font-semibold italic">
            Works Cited
          </LineShadowText>
        </div>
      </AnimateInView>

      <AnimateInView delay={0.4}>
        <div className="border rounded-lg shadow-md p-8 mt-16 bg-background text-2xl font-light space-y-8">
          <ul className="space-y-4">
            <li>
              Holdsworth, James. "What Is AI Bias?" <em>IBM</em>,{" "}
              <a href="https://www.ibm.com/think/topics/ai-bias">
                https://www.ibm.com/think/topics/ai-bias
              </a>
              .
            </li>

            <li>
              Rozado, David. "Measuring Political Preferences in AI Systems: An
              Integrative Approach." <em>Manhattan Institute</em>,{" "}
              <a href="https://manhattan.institute/article/measuring-political-preferences-in-ai-systems-an-integrative-approach">
                https://manhattan.institute/article/measuring-political-preferences-in-ai-systems-an-integrative-approach
              </a>
              .
            </li>

            <li>
              Christian, Brian.{" "}
              <em>The Alignment Problem: Machine Learning and Human Values</em>.
              W. W. Norton & Company, 2020.
            </li>

            <li>
              Medina, Eduardo. "Rite Aid's Use of Facial Recognition Is
              Investigated." <em>The New York Times</em>, 21 Dec. 2023,{" "}
              <a href="https://www.nytimes.com/2023/12/21/business/rite-aid-ai-facial-recognition.html">
                https://www.nytimes.com/2023/12/21/business/rite-aid-ai-facial-recognition.html
              </a>
              .
            </li>

            <li>
              Clayton, James. "'I Was Misidentified as Shoplifter by Facial
              Recognition Tech.'" <em>BBC Newsnight</em>, 25 May 2024.
            </li>

            <li>
              Larson, Jeff, et al. "How We Analyzed the COMPAS Recidivism
              Algorithm." <em>ProPublica</em>, 23 May 2016,{" "}
              <a href="https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm">
                https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm
              </a>
              .
            </li>

            <li>
              Milne, Stefan. "AI Tools Show Biases in Ranking Job Applicants'
              Names According to Perceived Race and Gender." <em>UW News</em>,
              31 Oct. 2024,{" "}
              <a href="https://www.washington.edu/news/2024/10/31/ai-bias-job-applicants-names/">
                https://www.washington.edu/news/2024/10/31/ai-bias-job-applicants-names/
              </a>
              .
            </li>

            <li>
              Liu, Y., Panwang, Y., and Gu, C. "'Turning Right'? An Experimental
              Study on the Political Value Shift in Large Language Models."{" "}
              <em>Humanities and Social Sciences Communications</em>, vol. 12,
              179, 2025,{" "}
              <a href="https://doi.org/10.1057/s41599-025-04465-z">
                https://doi.org/10.1057/s41599-025-04465-z
              </a>
              .
            </li>
          </ul>
        </div>
      </AnimateInView>
    </div>
  );
}
