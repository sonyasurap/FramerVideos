import {
  CaseSection,
  CaseStudyLayout,
  MediaBlock,
} from "@/components/CaseStudyLayout";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "strategy", label: "Strategy" },
  { id: "version1", label: "Version 1" },
  { id: "insight", label: "Key Insight" },
  { id: "version2", label: "Version 2" },
  { id: "version3", label: "Version 3" },
  { id: "reflection", label: "Reflection" },
];

export default function TextOnTvPage() {
  return (
    <CaseStudyLayout
      title="Prototyping a Short-Form Text App for Television"
      year="2024"
      summary="We set out to test the viability of bringing short-form text apps to TV—using Instagram Threads as our test app—through three versions: a Threads TV app, a screensaver mode, and ultimately a 24-hour personalized AI-generated talk show. These versions were inspired by a key breakthrough: realizing that TV isn't just a source of entertainment in the home, but rather, a “third voice.”"
      meta={{
        timeline: "9 weeks",
        skills: "Prototyping, 10-foot UI",
        team: "Sonya Surapaneni (designer), Hong Yu Wong (designer)",
        tools: "Figma, ProtoPie, HeyGen AI, ElevenLabs",
      }}
      sections={sections}
      hero={
        <div className="relative aspect-video bg-[#121212]">
          <video
            src="/videos/Passive scroll x7 (1).mov"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/tv-frame.png"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        </div>
      }
      otherProjects={[
        {
          href: "/legofiltering",
          title: "A Filtering System for Part-Finding at the LEGO Group",
        },
        {
          href: "/nytcrossword",
          title: "Using Storytelling to Bridge Families with a NYT Crossword",
        },
      ]}
    >
      <CaseSection
        id="overview"
        eyebrow="Overview"
        title="An unconventional project"
      >
        <p>
          Through the Silicon Valley School of Design (SVSD)—a 6-month program
          led by a Google designer—my partner and I took on the brief:{" "}
          <strong>Can short-form text apps work on a TV screen?</strong>
        </p>
        <p>
          Instagram Threads was our test app. Most TV apps are built for long
          videos—but text apps unlock an entirely different kind of content.
          Text allows people to surface news and conversation long before video
          platforms catch up.
        </p>
        <MediaBlock
          src="/images/ocdZRDt02PScAo2JpS5jtceon0.png"
          caption="Using real TVs to view our prototypes"
        />
        <p>
          We led with prototyping since no precedent existed for text apps on
          TV. We drew inspiration from apps like TikTok and Snapchat, which
          began as prototypes—proof that sometimes the only way to believe an
          idea is to see it in action.
        </p>
        <p className="text-muted">
          Note: This is not a product recommendation. We are not suggesting that
          this is an urgent thing for Threads to build—we are acting as an
          exploratory team.
        </p>
      </CaseSection>

      <CaseSection
        id="strategy"
        eyebrow="Strategy"
        title="We began by studying 10-foot UI design"
      >
        <p>
          TV design differs from mobile in critical ways: distance, lean-back
          posture, remote-based navigation, and ambient attention. From our
          initial research and testing, we narrowed in on the challenges that
          would shape Version 1.
        </p>
        <MediaBlock src="/images/fLn6q13LZzF7CCekn27yyrDn8.png" />
      </CaseSection>

      <CaseSection
        id="version1"
        eyebrow="Version 1"
        title="Literally translating the app onto TV for passive consumption"
      >
        <p>
          <strong>01</strong> An auto-scrolling feed with audio and word-by-word
          highlight.
        </p>
        <MediaBlock
          src="/videos/Passive scroll x7 (1).mov"
          type="video"
          caption="Auto-scrolling feed prototype"
        />
        <p>
          <strong>02</strong> A lightweight interaction model that allows for
          lightweight engagement without fighting lean-back TV habits.
        </p>
        <MediaBlock
          src="/videos/Interactions.mov"
          type="video"
          caption="Lightweight interaction model"
        />
      </CaseSection>

      <CaseSection
        id="insight"
        eyebrow="A key insight"
        title="TV as a third voice in the home"
      >
        <p>
          We presented our solution to 20 designers from Meta, Apple, Spotify,
          and other media companies. Our reviewers pushed us to ask: were we
          looking at the role of TV through the right lens?
        </p>
        <p>
          We identified three levels of engagement — fully engaged, partially
          engaged, and minimally engaged. Even when we&apos;re only minimally
          engaged, TV creates a sense of presence, almost like a companion.
        </p>
        <p>
          This shifted our thinking: instead of designing only for focused
          attention, we began considering how content could live ambiently in
          the home.
        </p>
      </CaseSection>

      <CaseSection
        id="version2"
        eyebrow="Version 2"
        title="An even more passive experience: an ambient screensaver"
      >
        <p>
          Popular topics rotate, grouped by story and anchored by a key visual —
          designed for people who barely look up.
        </p>
        <MediaBlock
          src="/videos/Final Amb Mode-2-2.mov"
          type="video"
          caption="Ambient screensaver mode"
        />
        <p>
          User testing showed this version worked—until we came across a popular
          content format: Reddit threads read over gameplay. That pushed us
          toward a more hosted experience.
        </p>
      </CaseSection>

      <CaseSection
        id="version3"
        eyebrow="Version 3"
        title="A 24-hour TV channel from your Threads algorithm, hosted by an AI avatar"
      >
        <p>
          An AI host discussing threads and comments from your feed — compelling
          enough for focused watching, calm enough for background presence.
        </p>
        <MediaBlock
          src="/videos/Theater Mode-2.mov"
          type="video"
          caption="AI host talk-show format"
        />
      </CaseSection>

      <CaseSection
        id="reflection"
        eyebrow="Reflection"
        title="The talk show format worked across engagement levels"
      >
        <p>
          Multiple rounds of user testing and several high-stakes presentations
          later, we realized our final version hit the mark: compelling and
          passive, but entertaining. We found a medium to make short-form text
          on TV possible.
        </p>
        <p>Three lessons I&apos;ll carry forward:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Design for real viewing habits</li>
          <li>Find inspiration from media that works</li>
          <li>Prototype to validate assumptions</li>
        </ul>
      </CaseSection>
    </CaseStudyLayout>
  );
}
