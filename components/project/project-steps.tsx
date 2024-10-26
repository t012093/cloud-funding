"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectStepsProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: "Basics" },
  { id: 2, name: "Story" },
  { id: 3, name: "Funding" },
  { id: 4, name: "Rewards" },
  { id: 5, name: "Review" },
];

export function ProjectSteps({ currentStep }: ProjectStepsProps) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={cn(
              stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
              "relative"
            )}
          >
            {step.id < currentStep ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-primary" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <Check className="h-5 w-5 text-white" />
                </div>
              </>
            ) : step.id === currentStep ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-muted" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-sm font-semibold">{step.id}</span>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-muted" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-muted bg-background">
                  <span className="text-sm font-medium text-muted-foreground">{step.id}</span>
                </div>
              </>
            )}
            <span className="absolute -bottom-6 whitespace-nowrap text-sm font-medium">
              {step.name}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}