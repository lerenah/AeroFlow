import Link from "next/link";
import {
  Zap,
  ArrowRight,
  Check,
  Sparkles,
  FileText,
  ClipboardList,
  Layout,
  Link as LinkIcon,
  Play,
  GitCompare,
  Code2,
  PenLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PricingCards from "@/components/home/PricingCards";

// ─── Data ─────────────────────────────────────────────────────

const ITEM_TYPES = [
  {
    icon: Sparkles,
    label: "Prompt",
    color: "var(--color-prompt)",
    description:
      "Reusable AI prompts — versioned, runnable, with full output history. Never lose a prompt that worked.",
  },
  {
    icon: FileText,
    label: "Context File",
    color: "var(--color-context)",
    description:
      "Project overviews, coding standards, architectural decisions. Attach to any AI run in one click.",
  },
  {
    icon: ClipboardList,
    label: "Feature Spec",
    color: "var(--color-spec)",
    description:
      "Structured specs with requirements, stack notes, and status. The starting point for Generate.",
  },
  {
    icon: Layout,
    label: "Template",
    color: "var(--color-template)",
    description:
      "Reusable code patterns and boilerplate. Stop writing the same scaffolding by hand.",
  },
  {
    icon: LinkIcon,
    label: "Resource Link",
    color: "var(--color-link)",
    description:
      "Docs, tools, and references you always need but always lose. Organized and searchable.",
  },
];

const AI_FEATURES = [
  {
    icon: Play,
    label: "Prompt Runner",
    badge: "Pro",
    description:
      "Select a Prompt, attach Context Files, hit Run. AI output appears inline. Save the result as a new item.",
  },
  {
    icon: GitCompare,
    label: "Prompt Diff",
    badge: "Pro",
    description:
      "Run a prompt, edit it, run again. Both outputs side by side. Make your prompts measurably better over time.",
  },
  {
    icon: Code2,
    label: "Generate",
    badge: "Pro",
    description:
      "Write a Feature Spec, attach Context Files, hit Generate. Get scaffolded code that follows your actual conventions.",
  },
  {
    icon: PenLine,
    label: "AI Spec Writer",
    badge: "Pro",
    description:
      "Describe a feature in plain English. AeroFlow drafts a structured Feature Spec for you to review and edit.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Store your workflow assets",
    description:
      "Add your prompts, project context files, coding standards, and feature specs. AeroFlow organizes and versions everything.",
  },
  {
    step: "02",
    title: "Attach context to any AI run",
    description:
      "Select a prompt, attach the context files that apply, and run. No more copying and pasting the same files into every conversation.",
  },
  {
    step: "03",
    title: "Generate code that matches your project",
    description:
      "Write a Feature Spec and hit Generate. AeroFlow scaffolds real code — components, actions, types — that follows your actual conventions.",
  },
];

// ─── Section wrapper ──────────────────────────────────────────

function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl px-6 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
      {children}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <Zap className="h-4 w-4 text-white" fill="white" />
            </div>
            <span className="text-sm font-semibold">AeroFlow</span>
          </Link>

          <nav className="hidden items-center gap-6 sm:flex">
            <a
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-sm" nativeButton={false} render={<Link href="/dashboard" />}>
              Sign in
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              nativeButton={false}
              render={<Link href="/dashboard" />}
            >
              Get started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center gap-24 py-20">

        {/* ── Hero ── */}
        <Section className="text-center">
          {/* Glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-full max-w-2xl -translate-x-1/2 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
          />

          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">
                Now in development — join the waitlist
              </span>
            </div>

            <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
              Your specs{" "}
              <span className="text-primary">take flight.</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              The AI workflow manager for developers. Store your prompts, context
              files, and feature specs in one place — then run them against any AI
              with one click.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                nativeButton={false}
                render={<Link href="/dashboard" />}
              >
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" nativeButton={false} render={<a href="#how-it-works" />}>
                See how it works
              </Button>
            </div>
          </div>
        </Section>

        {/* ── Problem / Solution ── */}
        <Section>
          <div className="rounded-xl border border-border bg-card p-8 sm:p-10">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
              Every AI conversation starts from zero.
            </h2>
            <p className="mb-8 text-muted-foreground">
              Every session with Claude, Cursor, or ChatGPT means re-explaining
              your stack, re-pasting your coding standards, and hunting for the
              prompt that worked last week.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Without */}
              <div className="rounded-lg border border-border bg-background p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Without AeroFlow
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Open Claude",
                    "Re-explain your stack",
                    "Re-paste coding standards",
                    "Re-write your prompt",
                    "Hope the output fits",
                    "Fix everything that's wrong",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* With */}
              <div className="rounded-lg border border-primary/30 bg-background p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                  With AeroFlow
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Open AeroFlow",
                    "Select your project context",
                    "Attach your standards file",
                    "Select your saved prompt",
                    "Hit Run — it already knows",
                    "Review and accept",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Item Types (Features grid) ── */}
        <Section id="features">
          <SectionLabel>Item types</SectionLabel>
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Five types. One workflow.
          </h2>
          <p className="mb-10 text-muted-foreground">
            Every asset in your AI workflow has a home. AeroFlow organizes your
            work into five distinct item types — each with its own purpose and
            behavior.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ITEM_TYPES.map(({ icon: Icon, label, color, description }) => (
              <div
                key={label}
                className="flex flex-col gap-3 rounded-xl border-l-2 border border-border bg-card p-5"
                style={{ borderLeftColor: color }}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 shrink-0" style={{ color }} />
                  <span className="text-sm font-semibold text-foreground">
                    {label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── AI Features ── */}
        <Section>
          <SectionLabel>AI features</SectionLabel>
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            The tools that make the difference.
          </h2>
          <p className="mb-10 text-muted-foreground">
            Pro features that turn your stored workflow assets into working code.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {AI_FEATURES.map(({ icon: Icon, label, badge, description }) => (
              <div
                key={label}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {label}
                    </span>
                  </div>
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                    {badge}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── How it works ── */}
        <Section id="how-it-works">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Set up once. Ship faster every session.
          </h2>
          <p className="mb-10 text-muted-foreground">
            AeroFlow fits into the workflow you already have — it just removes the
            repetitive parts.
          </p>

          <div className="flex flex-col gap-4">
            {HOW_IT_WORKS.map(({ step, title, description }) => (
              <div
                key={step}
                className="flex items-start gap-5 rounded-xl border border-border bg-card p-6"
              >
                <span className="shrink-0 text-3xl font-bold text-primary/20">
                  {step}
                </span>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Pricing ── */}
        <Section id="pricing">
          <div className="text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
              Start free. Upgrade when you're ready.
            </h2>
            <p className="mb-10 text-muted-foreground">
              Free forever for individuals getting started. Pro unlocks the AI
              features that make the real difference.
            </p>
          </div>
          <PricingCards />
        </Section>

        {/* ── CTA banner ── */}
        <Section>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-10 text-center">
            {/* Glow */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-10 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, #8b5cf6, transparent 70%)",
              }}
            />

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary mx-auto mb-4">
              <Zap className="h-5 w-5 text-white" fill="white" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
              Ready to ship faster with AI?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Set up your workspace in minutes. Your specs take flight from day
              one.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              nativeButton={false}
              render={<Link href="/dashboard" />}
            >
              Get started free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
              <Zap className="h-3.5 w-3.5 text-white" fill="white" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              AeroFlow
            </span>
            <span className="text-sm text-muted-foreground">
              — Your specs take flight.
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 AeroFlow. Built by{" "}
            <a
              href="https://github.com/lerenah"
              className="hover:text-foreground transition-colors"
            >
              Lerena Holloway
            </a>
            .
          </p>
        </div>
      </footer>

    </div>
  );
}
