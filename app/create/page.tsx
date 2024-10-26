"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { ProjectForm } from "@/components/project/project-form";
import { ProjectSteps } from "@/components/project/project-steps";
import { Card } from "@/components/ui/card";
import { Bot } from "lucide-react";

export default function CreateProject() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Create Your Project</h1>
          
          <div className="mb-8">
            <ProjectSteps currentStep={currentStep} />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ProjectForm currentStep={currentStep} onStepChange={setCurrentStep} />
            </div>
            
            <div className="lg:col-span-1">
              <Card className="p-4 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">AI Assistant</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  I&apos;m here to help you create a compelling project. I can suggest improvements,
                  generate descriptions, and provide tips based on successful campaigns.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}