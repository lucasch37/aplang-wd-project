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
      transition={{ duration: 0.6, delay: 0.1 }}
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
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The most dangerous AI biases aren&apos;t political—they&apos;re
          systemic, hidden in data, and affecting millions.
        </motion.div>
      </motion.div>

      <AnimateInView>
        <div className="text-5xl font-light border-b pb-8 mb-8 mt-16">
          You&apos;ve Probably Heard of "Woke" AI
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
          with AI is that it leans too far to the left. But this isn&apos;t
          nearly the whole story, concerns like these are massively overstated
          and taking the spotlight away from what is actually important.
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

      <AnimateInView delay={0.2}>
        <div className="text-2xl mt-16 font-light text-center">
          To understand why these media depictions are not effective
          representations of the situation surrounding political bias, it is
          important to understand how AI biases work on a fundamental level. A
          simple explanation is provided by IBM, the largest research
          organization in the world:
        </div>
      </AnimateInView>
      <AnimateInView delay={0.2} className="mt-16">
        <div className="bg-background border p-8 font-light rounded-lg shadow-md text-2xl relative">
          <div className="absolute top-8 left-8">
            <QuoteIcon size={24} />
          </div>
          <div className="pl-10">
            AI bias, also called machine learning bias or algorithm bias, refers
            to the occurrence of biased results due to human biases that skew
            the original training data or AI algorithm—leading to distorted
            outputs and potentially harmful outcomes.
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

      <AnimateInView delay={0.2}>
        <div className="text-2xl mt-16 font-light">
          <span className="font-medium">But how does this skewing happen?</span>{" "}
          The way almost every AI model works, from a chatbot like ChatGPT to
          facial recognition algorithms, can be simplified to 3 steps:{" "}
          <ol className="list-decimal pl-8 my-4">
            <li>Data relevant to the purpose of the model is collected.</li>
            <li>The model finds patterns and trends within that data.</li>
            <li>Future decisions are made based on what it has learned.</li>
          </ol>
          If the data reflects historical inequalities or underrepresents
          certain groups of people, such biases as described by IBM can easily
          creep in.
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

      <AnimateInView delay={0.2}>
        <div className="text-2xl mt-16 font-light">
          <span className="font-medium">However,</span> biases can develop in AI
          independently of the data. As mentioned in Brian Christian's popular
          book,{" "}
          <a
            className="text-blue-500 underline italic"
            href="https://brianchristian.org/the-alignment-problem/"
          >
            The Alignment Problem,
          </a>{" "}
          complete fairness and neutrality is impossible to both define and
          achieve. The definition of "fairness" is subjective, and the people
          creating the AI must make decisions on what is "fair" and what is not.
          This can lead to apparent biases that are not present in the data, but
          rather in the decisions made by the developers. Because these biases
          are shaped by decisions that can be constantly changed, they are much
          less rooted into AI systems compared to those through data, and can
          shift easily.
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="text-2xl mt-16 font-light">
          <span className="font-medium">So when are biases problematic?</span>{" "}
          According to University of Southern California Professor Emilio
          Ferrara, the main two conditions for an apparent bias within AI to
          become problematic are that:{" "}
          <ul className="list-disc pl-8 my-4 font-medium">
            <li>
              It is deeply ingrained into AI systems, usually through strong
              presense in training data.
            </li>
            <li>
              It has societal impact through amplifying discrimination,
              prejudice, stereotyping, and more.
            </li>
          </ul>
          <span className="font-medium">Why?</span> When biases within AI are
          deeply ingrained into the system through training data in several
          different subjects, they end up being incredibly hard to remove,
          isolate, and almost impossible to avoid because of how heavily AI
          systems depend on training data. If they hold strong societal impact,
          their impacts will only be amplified in the future as AI becomes more
          and more integrated into our lives. If a bias is not deeply rooted
          into systems through data, but rather exists because of human
          decisions, its concern is limited as it can be easily mitigated
          through changes in decisions. If a bias does not hold much societal
          impact, while it's existence can be a concern, it becomes not nearly
          as urgent as an issue to be addressed as ones that do.
          <div className="mt-16">
            On the spectrum of least problematic to most, there are many
            examples of existing biases that follow both conditions and need to
            be urgently addressed before they worsen.{" "}
            <span className="font-medium">
              Now that a baseline for what constitutes as a problematic bias has
              been established, we can properly understand why political bias is
              not nearly as concerning as news outlets and social media users
              claim, and rather is taking away from the much more important,
              urgent issues.
            </span>
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
            Is Political Bias Truly Problematic?
          </LineShadowText>
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="my-16 font-light text-2xl text-center">
          It&apos;s true that many popular AI models have been found to hold
          left-leaning political biases. Several studies have been conducted on
          the subject, affirming this commonly held belief. For example:
        </div>
      </AnimateInView>

      <AnimateInView delay={0.3}>
        <div className="w-full">
          <PoliticalCompass />
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="my-16 font-medium text-3xl text-center">
          But there&apos;s more to this story...
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
          This finding is supported by studies on the subject, such as:
        </div>
      </AnimateInView>

      <AnimateInView delay={0.3}>
        <div className="w-full">
          <PoliticalCompass2 />
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="my-16 font-light text-2xl text-center">
          The difference in release dates between the two models was a mere two
          months. So what does this mean?
        </div>
      </AnimateInView>

      <AnimateInView delay={0.4}>
        <div className="border rounded-lg shadow-md p-8 mt-16 bg-background text-2xl font-light space-y-8">
          <div>
            As established previously, for an existing bias to be most
            problematic, one of the main conditions should be that it is deeply
            ingrained systematically through training data. These studies have
            shown that:
          </div>
          <div className="font-medium text-3xl text-center my-12">
            Political biases are not deep-rooted into AI.
          </div>
          <div>
            <span className="font-medium">Why?</span> As shown by the
            comprehensive studies and findings plotted above, political biases{" "}
            <span className="italic">cannot</span> be deeply ingrained, because
            of how easily its magnitude can be shifted as displayed by the
            Manhattan Institute's study, and the considerable change in
            political leaning of two models in such a short time frame, which
            would be impossible if the bias was truly systematically rooted.
            It's clear that the political bias so often discussed online aren't
            a result of long-existing trends in data, but rather human
            decisions, and there's a clear explanation:
          </div>
          <div>
            These biases aren&apos;t shaped by historical occurrences in data as
            most problematic biases are. For centuries, tons of records used as
            data have been created supporting both the liberal and conservative
            viewpoints evenly, so there is evidently no general and consistent
            leaning at all in data used to train AI models. Rather, they&apos;re
            shaped by a number of decisions that can be constantly changed. The
            people you view online may want their AI to be completely
            politically neutral in their eyes, but as mentioned before, this is
            almost impossible. What constitutes as 'neutral' can itself be a
            strong political opinion. Therefore, inevitably, decisions must be
            made and a specific stance must be taken, whether left or right,
            which can be easily changed at any time, as shown above.
          </div>
        </div>
      </AnimateInView>

      <div className="grid grid-cols-2 gap-12 my-16 items-center">
        <AnimateInView delay={0.2} className="h-full">
          <div className="text-2xl font-light space-y-8 p-8 border rounded-lg bg-background shadow-md h-fit">
            <div>
              Political bias may clearly not be deeply-rooted into AI, but does
              it still cause societal impact to make it a concerning issue?
            </div>
            <div>
              Despite the majority of AI models popular in the United States
              having been found to be left-leaning, the country is more
              Republican than ever, as shown by many recent developments in the
              American political landscape. It has not perpetuated
              discrimination, prejudice, and stereotyping against the
              conservative side of America, as they thriving and growing
              quickly.
            </div>
            <div>
              Therefore,{" "}
              <span className="font-medium">
                political bias does not have strong societal impact.
              </span>
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

      <div className="text-2xl font-light">
        <div className="mb-8">
          While what you may be hearing on the news about current existing
          biases may hold some truth, the facts that political bias is not
          embedded into the fundamental systems of AI, and does not hold much
          societal impact at all, heavily limits its urgency as an problematic
          issue in humanity&apos;s future.
        </div>
        <div>
          The real, urgent bias issues are deeply ingrained into all the data
          available on the internet. No matter what decisions are made, or
          measures are taken to control them, they are always present in any
          algorithm or model trained on data. These issues also have strong
          society impacts in the present, and if not properly addressed, will
          only worsen and amplify.
        </div>
      </div>

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

      <AnimateInView delay={0.3}>
        <div className="mt-16 text-2xl font-light">
          Throughout this article, bias issues more important and dangerous than
          polticial bias have been mentioned several times without specific
          examples. It has been established that the media's depiction of
          political bias as a problematic issue is incorrect, but to understand
          their true damage, it is important to understand comprehensively why
          the urgency of political bias issues pales in comparison to the real
          issues and is taking away from them. To do so requires an
          understanding of what these issues are, how they are caused, their
          impacts, and how they compare to political bias. Below are examples of
          two out of several bias issues that have been obscured because of the
          focus on political bias.
        </div>
      </AnimateInView>

      <AnimateInView>
        <div className="text-5xl font-light border-b pb-8 mb-8 mt-16">
          Racial Bias
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="text-2xl font-light">
          In 2016, ProPublica, an investigative journalism organization,{" "}
          <a
            href="https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm"
            className="text-blue-500 underline"
          >
            published findings
          </a>{" "}
          surrounding COMPAS (Correctional Offender Management Profiling for
          Alternative Sanctions), a risk assessment algorithm used in the US
          criminal justice system. The algorithm was found to be biased against
          black defendants, falsely flagging them as future criminals far more
          often than for white defendants. Their findings are shown below:
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
          world, disproportionately for people of color. For example, in 2023
          the pharmacy chain Rite Aid was sued for falsely identifying many
          people of color as shoplifters, searching, scaring, and embarrassing
          them. These biases can extend into the real world as much as causing
          people to be falsely arrested while just walking down the street, as
          experienced by black man Shaun Thompson in the UK.
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

      <AnimateInView delay={0.3}>
        <div className="text-2xl font-light my-12">
          From just these two examples alone it is clear that the societal
          impacts of racial AI bias are far greater than anything the political
          bias called out so often has caused. These issues are also unavoidable
          because of how much more deeply rooted they are into the systems of AI
          compared to political biases. For centuries, people of color have been
          discriminated against and misrepresented, and this is heavily present
          is a huge amount of data used to train AI systems. The COMPAS
          algorithm's tendency to miscategorize black people as recidivists can
          be attributed to these deep-rooted inequalities, as in the past and
          still to an extent in the present, black people have been arrested
          more for far lesser crimes or for no reason at all, and this has
          spread into data influencing AI decision making to falsely categorize
          black people to be more likely to reoffend. The incorrect facial
          recognition can explained by the historical misrepresentation of
          people of color, causing there to be much less data available to
          accurately train recognition of them, causing errors with large
          consequences. Both examples display just how ingrained racial biases
          are into data and thus AI systems, and how problematic it can become
          in the future as AI grows, if not addressed.
        </div>
      </AnimateInView>

      <AnimateInView>
        <div className="text-5xl font-light border-b pb-8 mb-8 mt-16">
          Gender Bias
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="text-2xl font-light mb-12">
          A{" "}
          <a
            className="text-blue-500 underline"
            href="https://www.washington.edu/news/2024/10/31/ai-bias-resume-screening-race-gender/"
          >
            University of Washington study
          </a>{" "}
          found significant gender bias in how three advanced large language
          models (LLMs) ranked over 550 real-world resumes. Across 3 million
          comparisons, LLMs preferred white-associated names 85% of the time and
          male-associated names 52% of the time.
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

      <AnimateInView delay={0.4}>
        <div className="text-2xl font-light my-12">
          Similarly to racial bias, the consequences and impact to society
          gender AI bias has is far more thorough than that of political bias.
          This example can also be explained by historical biases still
          ingrained in AI systems that are hard to remove. Historically, women
          were never treated equal in the job market, men were strongly
          preferred when applying to jobs, and data used to train the system is
          likely still heavily skewed in the favor of men. The existence of
          gender bias in AI is exemplifying the existing discrimination against
          women in the job market and needs to be addressed urgently.
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
            Why Should You Care?
          </LineShadowText>
        </div>
      </AnimateInView>

      <AnimateInView delay={0.4}>
        <div className="border rounded-lg shadow-md p-8 mt-16 bg-background text-2xl font-light space-y-8">
          <div>
            The reason why you, and as many people as possible, should care
            about the detriment that these reports claiming political bias and
            "woke" AI bring is because{" "}
            <span className="font-medium">
              AI bias is far bigger than just politics.
            </span>{" "}
            and the media's obsession is obscuring this fact. As a social media
            user, how many times have you seen outrage over "woke" AI online,
            compared to how often you have seen concerns over issues with real
            impacts such as discrimination against minorites, gender, and more?
            You have likely seen extensively more information on political AI
            topics, and the experience is most likely the same for the majority
            of social media users. This can be attributed strongly to the
            decision of news outlets and social media users to focus on poltical
            issues rather than anything else, shining the spotlight of AI
            concerns solely on politics. This is very concerning, since as
            listed above, the impacts of these real issues are very severe, and
            will only grow and amplify as AI inevitably becomes more integrated
            into our everyday lives.
          </div>
          <div className="text-2xl font-medium">
            In order to foster both a present and future where AI does not
            exemplify discrimination, prejudice, and stereotyping in society, it
            is crucial that awareness surrounding bias issues in AI is taken off
            solely from political issues and onto more problematic issues with
            far greater impact, influence, and urgency.
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
              <a href="https://www.washington.edu/news/2024/10/31/ai-bias-resume-screening-race-gender/">
                https://www.washington.edu/news/2024/10/31/ai-bias-resume-screening-race-gender/
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

            <li>Ferrara, Emilio. Personal interview. 8 Feb. 2025.</li>

            <li>
              Ferrara, Emilio. "Fairness and Bias in Artificial Intelligence: A
              Brief Survey of Sources, Impacts, and Mitigation Strategies." Sci,
              vol. 6, no. 1, 2024, p. 3, https://doi.org/10.3390/sci6010003.
            </li>
          </ul>
        </div>
      </AnimateInView>
    </div>
  );
}
