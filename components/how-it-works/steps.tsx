import { Card } from "@/components/ui/card";
import { Bot, Target, Rocket, Users, Gift, ChartBar } from "lucide-react";

const steps = [
  {
    icon: Bot,
    title: "AI-Assisted Creation",
    description: "Our AI helps you craft compelling project descriptions, set realistic goals, and design attractive rewards.",
  },
  {
    icon: Target,
    title: "Smart Goal Setting",
    description: "Get data-driven recommendations for funding goals based on similar successful projects.",
  },
  {
    icon: Gift,
    title: "Reward Strategy",
    description: "AI analyzes successful campaigns to suggest effective reward tiers and pricing strategies.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Engage with supporters using AI-powered communication tools and campaign updates.",
  },
  {
    icon: ChartBar,
    title: "Real-time Analytics",
    description: "Track your campaign's performance with detailed analytics and AI-powered insights.",
  },
  {
    icon: Rocket,
    title: "Launch & Success",
    description: "Go live with confidence, backed by continuous AI support throughout your campaign.",
  },
];

export function HowItWorksSteps() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          How AI-FUND Works
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}