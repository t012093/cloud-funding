"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI assistant help with project creation?",
    answer: "Our AI assistant analyzes successful campaigns to help you write compelling descriptions, set optimal funding goals, and create attractive reward tiers. It provides real-time suggestions and can generate content based on your project's unique characteristics.",
  },
  {
    question: "What percentage of funds do you charge?",
    answer: "We charge a competitive 5% platform fee on successfully funded projects. Payment processing fees (typically 2.9% + $0.30 per transaction) are charged separately. There are no fees if your project doesn't reach its funding goal.",
  },
  {
    question: "Do I need technical expertise to use the AI features?",
    answer: "Not at all! Our AI assistant is designed to be user-friendly and intuitive. It guides you through each step with clear suggestions and explanations, no technical expertise required.",
  },
  {
    question: "What happens if I don't reach my funding goal?",
    answer: "We use an all-or-nothing funding model. If you don't reach your goal, no money is collected from your backers, and you won't be charged any fees. Our AI assistant helps set realistic goals to maximize your chances of success.",
  },
  {
    question: "Can I edit my project after launching?",
    answer: "Yes, you can edit certain parts of your project after launch, such as updating the description or adding new FAQs. However, core elements like funding goals and campaign duration cannot be changed once your project is live.",
  },
];

export function HowItWorksFAQ() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}