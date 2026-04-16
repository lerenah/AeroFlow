"use client";

import { useState } from "react";
import { Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FREE_FEATURES = [
  { label: "50 items total", included: true },
  { label: "3 collections", included: true },
  { label: "All 5 item types", included: true },
  { label: "Onboarding wizard", included: true },
  { label: "Search + command palette", included: true },
  { label: "AI auto-tagging", included: true },
  { label: "Prompt Runner", included: false },
  { label: "Generate (code scaffolding)", included: false },
  { label: "AI Spec Writer", included: false },
  { label: "Data export (JSON)", included: false },
];

const PRO_FEATURES = [
  { label: "Unlimited items", included: true },
  { label: "Unlimited collections", included: true },
  { label: "All 5 item types", included: true },
  { label: "Onboarding wizard", included: true },
  { label: "Search + command palette", included: true },
  { label: "AI auto-tagging", included: true },
  { label: "Prompt Runner", included: true },
  { label: "Generate (code scaffolding)", included: true },
  { label: "AI Spec Writer", included: true },
  { label: "Data export (JSON)", included: true },
];

export default function PricingCards() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Toggle */}
      <div className="flex items-center gap-3">
        <span
          className={`text-sm ${!yearly ? "text-foreground" : "text-muted-foreground"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setYearly((v) => !v)}
          className={`relative h-6 w-11 rounded-full transition-colors ${
            yearly ? "bg-primary" : "bg-secondary border border-border"
          }`}
          aria-label="Toggle yearly billing"
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
              yearly ? "translate-x-5" : "translate-x-0.5"
            }`}
          />
        </button>
        <span
          className={`text-sm ${yearly ? "text-foreground" : "text-muted-foreground"}`}
        >
          Yearly
          <span className="ml-1.5 rounded bg-green-500/15 px-1.5 py-0.5 text-[10px] font-medium text-green-400">
            Save 25%
          </span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Free */}
        <div className="flex flex-col rounded-xl border border-border bg-card p-6">
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground">Free</p>
            <p className="mt-1 text-3xl font-bold text-foreground">$0</p>
            <p className="text-sm text-muted-foreground">forever</p>
          </div>
          <Button variant="outline" className="mb-6 w-full" nativeButton={false} render={<Link href="/dashboard" />}>
            Get started
          </Button>
          <ul className="flex flex-col gap-2.5">
            {FREE_FEATURES.map(({ label, included }) => (
              <li key={label} className="flex items-center gap-2">
                {included ? (
                  <Check className="h-3.5 w-3.5 shrink-0 text-green-400" />
                ) : (
                  <X className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40" />
                )}
                <span
                  className={`text-sm ${
                    included ? "text-foreground" : "text-muted-foreground/50"
                  }`}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pro */}
        <div className="relative flex flex-col rounded-xl border border-primary/50 bg-card p-6 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
              <Zap className="h-3 w-3" fill="currentColor" />
              Most popular
            </span>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground">Pro</p>
            <p className="mt-1 text-3xl font-bold text-foreground">
              ${yearly ? "6" : "8"}
              <span className="text-base font-normal text-muted-foreground">
                /mo
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              {yearly ? "billed $72/year" : "billed monthly"}
            </p>
          </div>
          <Button className="mb-6 w-full bg-primary text-primary-foreground hover:bg-primary/90" nativeButton={false} render={<Link href="/dashboard" />}>
            Start free trial
          </Button>
          <ul className="flex flex-col gap-2.5">
            {PRO_FEATURES.map(({ label, included }) => (
              <li key={label} className="flex items-center gap-2">
                <Check
                  className={`h-3.5 w-3.5 shrink-0 ${
                    included ? "text-primary" : "text-muted-foreground/40"
                  }`}
                />
                <span className="text-sm text-foreground">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
