import { SiteHeader } from "@/components/site-header";
import { HowItWorksSteps } from "@/components/how-it-works/steps";
import { HowItWorksFAQ } from "@/components/how-it-works/faq";
import { Button } from "@/components/ui/button";
import { Bot, Rocket } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <Bot className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Your AI-Powered Crowdfunding Journey
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From idea to successful funding, our AI assistant guides you every step of the way
              </p>
              <Link href="/create">
                <Button size="lg">
                  <Rocket className="mr-2 h-4 w-4" />
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <HowItWorksSteps />

        {/* FAQ Section */}
        <HowItWorksFAQ />
      </main>
    </div>
  );
}