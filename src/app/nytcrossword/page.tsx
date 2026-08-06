import {
  CaseSection,
  CaseStudyLayout,
  MediaBlock,
} from "@/components/CaseStudyLayout";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "insight", label: "Insight" },
  { id: "concept", label: "Concept" },
  { id: "solution", label: "Solution" },
  { id: "deepdive", label: "Deep Dive" },
  { id: "reflection", label: "Reflection" },
];

export default function NytCrosswordPage() {
  return (
    <CaseStudyLayout
      title="Using Storytelling to Bridge Families with a NYT Crossword"
      year="2024"
      summary="We joined a 4-day competition with the prompt: How might we bring young adults (18–24) and their parents closer together? Our winning solution was a personalized NYT crossword that turned parents' stories into custom clues. We built two versions: a fully AI-generated crossword and an MVP that delivered the same emotional impact with lighter AI requirements."
      meta={{
        timeline: "4 days (design competition)",
        skills: "Concepting, storytelling systems, AI prototyping",
        team: "Cross-functional student design team",
        tools: "Figma, AI prototyping tools",
      }}
      sections={sections}
      hero={
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/nyt-frame.png"
          alt="The New York Times"
          className="w-full bg-[#1c1c1c]"
        />
      }
      otherProjects={[
        {
          href: "/legofiltering",
          title: "A Filtering System for Part-Finding at the LEGO Group",
        },
        {
          href: "/textontv",
          title: "Prototyping a Short-Form Text App for Television",
        },
      ]}
    >
      <CaseSection
        id="overview"
        eyebrow="Overview"
        title="Navigating a pivotal time of change"
      >
        <p>
          As young adults move from high school to college and then into work,
          they experience a lot of change — and so do parents. With time,
          connection grows harder.
        </p>
        <p>
          By high school graduation, young adults have spent{" "}
          <strong>93% of the time</strong> they&apos;ll have with their parents
          (based on <em>The Tail End</em> by Wait But Why).
        </p>
        <p>
          Parents and young adults also approach connection very differently —
          which makes surface-level check-ins easy and deeper conversation rare.
        </p>
        <MediaBlock src="/images/rCeY9Bh8yWUOxbHTTZ3P1L3RsdQ.png" />
      </CaseSection>

      <CaseSection
        id="insight"
        eyebrow="A key insight"
        title="Stories are a powerful way to move beyond surface-level conversations"
      >
        <p>
          Young adults grow up seeing fragments of who their parents are.
          Listening to their stories helps complete the picture and strengthen
          the connection between them.
        </p>
        <p>
          Stories help us bond — however, sharing these stories is not easy.
          Awkward prompting and busy schedules get in the way.
        </p>
      </CaseSection>

      <CaseSection
        id="concept"
        eyebrow="Concept"
        title="Crosswords as a starting point for connection"
      >
        <p>
          We used the NYT Mini Crossword as a familiar, cross-generational
          ritual to cut through awkward prompting. By grounding stories in a
          daily game, we made sharing feel natural instead of forced.
        </p>
        <MediaBlock
          src="/videos/Mini.mp4"
          type="video"
          caption="The Mini isn’t just a game—it’s a catalyst for connection"
        />
        <p>
          Few brands are as trusted for storytelling as The New York Times. We
          anchored the experience to Mother&apos;s and Father&apos;s Day —
          moments when people are more likely to show up than for ongoing
          habits.
        </p>
      </CaseSection>

      <CaseSection
        id="solution"
        eyebrow="Solution"
        title="Custom mini crosswords about your parents' stories"
      >
        <p>
          <strong>01 Event discovery on NYT</strong> — Discoverable on the
          homepage with limited real estate, creating just enough urgency to
          act.
        </p>
        <p>
          <strong>02 Parent creates crossword</strong> — Intentional prompts
          later become crossword clues. Parents speak their stories aloud to
          make it easy and personal.
        </p>
        <MediaBlock
          src="/videos/CreationFlow.mp4"
          type="video"
          caption="Parent creation flow"
        />
        <p>
          <strong>03 Young adult solves crossword</strong> — Swapping the daily
          crossword for a low-lift entry point to kick off meaningful
          conversations, with continuity beyond the puzzle itself.
        </p>
        <MediaBlock
          src="/videos/Consumption.mp4"
          type="video"
          caption="Young adult solving experience"
        />
      </CaseSection>

      <CaseSection
        id="deepdive"
        eyebrow="Technical deep dive"
        title="How do we generate these custom crosswords?"
      >
        <p>
          Artificial intelligence can&apos;t fully do it yet. After testing
          multiple models, we realized the tech wasn&apos;t there — even careful
          prompting produced broken grids.
        </p>
        <MediaBlock src="/images/hORZu1vcKmywxQvlFWPpqYg7HA.png" />
        <p>
          So we designed an MVP that reduces AI load: instead of generating
          entire crosswords, prompts guide meaningful stories that connect back
          to a pre-made puzzle.
        </p>
        <p>
          We still mapped an ideal future flow for when AI is ready — locking
          words step by step, then using targeted prompts to balance
          personalization with puzzle feasibility.
        </p>
        <MediaBlock src="/images/ideal1fr.svg" caption="Ideal future AI flow" />
      </CaseSection>

      <CaseSection
        id="reflection"
        eyebrow="Reflection"
        title="We took our prototype to NYC — and came home with first place"
      >
        <p>
          Presenting to top designers from Apple, Google, and Meta was the real
          gift. Winning was great, but the feedback is what I&apos;ll carry
          forward.
        </p>
        <MediaBlock src="/images/4WKVGi9JUKmGX1tKXWUKnyAZTi0.png" />
      </CaseSection>
    </CaseStudyLayout>
  );
}
