import {
  CaseSection,
  CaseStudyLayout,
  MediaBlock,
} from "@/components/CaseStudyLayout";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "setup", label: "Setup" },
  { id: "version1", label: "Version 1" },
  { id: "version2", label: "Version 2" },
  { id: "solution", label: "Solution" },
  { id: "reflection", label: "Reflection" },
];

export default function LegoFilteringPage() {
  return (
    <CaseStudyLayout
      title="A Filtering System for Part-Finding at the LEGO Group"
      year="2025"
      summary="BrickLink Studio is the official LEGO digital building platform with over 160,000 builders, from beginners to experts. After discovering users struggled to find parts using exact-term search, I partnered with engineers and PMs to design a collapsible sidebar filtering system that improved discovery for newcomers while preserving the speed experts relied on."
      meta={{
        timeline: "6 months (intern project)",
        skills:
          "UX research, usability testing, interactive prototyping, cross-team collaboration",
        team: "1 product manager, 4 engineers/QA testers",
        tools: "Figma, ProtoPie, Studio",
      }}
      sections={sections}
      hero={
        <div className="relative aspect-video bg-[#121212]">
          <video
            src="/videos/framer/UUTBWERgxHoHdFdD8nmynSqJKw.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/lego-frame.png"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        </div>
      }
      otherProjects={[
        {
          href: "/textontv",
          title: "Prototyping a Short-Form Text App for Television",
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
        title="6 months immersed in LEGO design culture"
      >
        <p>
          This year, I interned at the LEGO Group&apos;s BrickLink office — one
          of the most creative and playful design cultures I&apos;ve ever been
          part of. I loved designing for a passionate community of builders who
          often knew the product even better than we did.
        </p>
        <MediaBlock
          src="/images/2hE1G1aaIwDkzyf5G78GswCmU.png"
          caption="This office made work feel like play"
        />
        <p>
          I worked on <strong>BrickLink Studio</strong>, a digital building
          platform by the LEGO Group used by over 160,000 fans worldwide.
          Builders choose from thousands of LEGO bricks to create and share
          digital models.
        </p>
        <MediaBlock
          src="/videos/framer/UUTBWERgxHoHdFdD8nmynSqJKw.mp4"
          type="video"
          caption="Studio interface with the Part Finder panel"
        />
        <p>
          A major pain point: users—both beginners and advanced—were struggling
          to find parts. With so many potential reasons behind this friction, my
          goal was to uncover the root causes and redesign part finding to be
          more intuitive.
        </p>
      </CaseSection>

      <CaseSection
        id="research"
        eyebrow="Research"
        title="Defining my strategy"
      >
        <p>
          This was a research-heavy process because uncovering the issues was
          critical. I focused my approach around competitive analysis, heuristic
          evaluation, and user interviews.
        </p>
        <p>
          <strong>Method 1: Competitive analysis</strong> — I analyzed 10 apps
          across CAD, 3D modeling, and creative tools, then narrowed focus to
          Rebrickable, Meca Bricks, and LEGO Play.
        </p>
        <MediaBlock src="/images/FjkBbyTjTXvfNgKzk1TueKpRwug.png" />
        <p>
          <strong>Method 2: Heuristic evaluation</strong> — I reviewed 15
          elements of the part picker UI against established usability
          principles to surface annotated usability problems.
        </p>
        <p>
          <strong>Method 3: User interviews</strong> — I interviewed seven
          users, split between beginners and advanced builders. Through card
          sorting, a part-finding challenge, and open-ended questioning, I
          uncovered the frustrations and strategies that shaped their process.
        </p>
      </CaseSection>

      <CaseSection
        id="setup"
        eyebrow="Setup"
        title="Landing on a filtering system"
      >
        <p>
          Research revealed three major needs: smarter search intelligence,
          standardized terminology, and more effective filtering. I focused on
          filtering because it provided the clearest opportunity to shorten
          part-finding time within scope.
        </p>
        <p>
          Because this change would significantly impact users, usability
          testing became central. Over three weeks of iterative design sprints,
          a typical week meant designing, prototyping, testing, and synthesizing
          feedback.
        </p>
      </CaseSection>

      <CaseSection
        id="version1"
        eyebrow="Version 1 (lo-fi)"
        title="Centralizing filters into a popup system"
      >
        <p>
          Version 1 introduced a popup filtering menu with four sections —
          palette, date filters, color filters, and display options —
          consolidating scattered controls into a single system while
          introducing filters users had asked for.
        </p>
        <p>
          During testing, all users agreed the new filters improved part
          searching. However, expert users felt some actions required too many
          clicks and preferred having certain filters remain in the part picker
          UI.
        </p>
        <p>
          <strong>Challenge:</strong> How might we streamline filtering to
          reduce clicks without increasing cognitive load?
        </p>
      </CaseSection>

      <CaseSection
        id="version2"
        eyebrow="Version 2 (lo-fi)"
        title="A flexible solution: collapsible sidebar"
      >
        <p>
          To balance discoverability for beginners with efficiency for expert
          users, I introduced a collapsible sidebar. It could stay open for
          quick access or collapse to reduce clutter.
        </p>
        <p>
          All users responded positively. They appreciated the flexibility to
          keep the menu open for efficiency or close it to reduce clutter. This
          system also significantly sped up the part-finding process.
        </p>
      </CaseSection>

      <CaseSection
        id="solution"
        eyebrow="Final solution"
        title="A high-fidelity collapsible sidebar that sped up part-finding by 67%"
      >
        <p>
          The final high-fidelity collapsible sidebar shipped a clearer path to
          discovery for 160k LEGO users while protecting expert speed.
        </p>
        <MediaBlock
          src="/videos/framer/UUTBWERgxHoHdFdD8nmynSqJKw.mp4"
          type="video"
          caption="High fidelity prototype — closed and open states"
        />
      </CaseSection>

      <CaseSection
        id="reflection"
        eyebrow="Reflection"
        title="Presenting to the office"
      >
        <p>
          I wrapped up my internship by presenting to the entire LEGO BrickLink
          team — including the CEO. It was rewarding to hear that even those
          with 10+ years at LEGO hadn&apos;t noticed some of the usability
          challenges I uncovered, and exciting to know many of my features are
          headed into production.
        </p>
        <p>
          What stood out was how passionate the community was; many users knew
          the platform even better than we did. Being able to learn from our
          users made the experience even more special.
        </p>
      </CaseSection>
    </CaseStudyLayout>
  );
}
