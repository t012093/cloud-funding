"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters"),
  category: z.string().min(1, "Please select a category"),
  shortDescription: z.string().min(50, "Short description must be at least 50 characters"),
  targetAmount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid amount",
  }),
});

interface ProjectFormProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

export function ProjectForm({ currentStep, onStepChange }: ProjectFormProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      shortDescription: "",
      targetAmount: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    onStepChange(currentStep + 1);
  }

  const handleAIGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    form.setValue("shortDescription", "AI-generated description will appear here...");
    setIsGenerating(false);
  };

  if (currentStep === 1) {
    return (
      <Card className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your project title" {...field} />
                  </FormControl>
                  <FormDescription>
                    Make it clear and memorable
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                      <SelectItem value="community">Community</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Briefly describe your project"
                        className="min-h-[100px]"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAIGenerate}
                        disabled={isGenerating}
                      >
                        {isGenerating ? "Generating..." : "Generate with AI"}
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription>
                    This will appear in project cards and search results
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit">Continue</Button>
            </div>
          </form>
        </Form>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <p className="text-muted-foreground">Step {currentStep} content will be implemented next...</p>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={() => onStepChange(currentStep - 1)}>
          Previous
        </Button>
        <Button onClick={() => onStepChange(currentStep + 1)}>
          Continue
        </Button>
      </div>
    </Card>
  );
}