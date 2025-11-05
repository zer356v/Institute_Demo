import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "What is an FAQ section?",
      answer:
        "An FAQ section can be used to quickly answer common questions about your business like 'Where do you ship to?', 'What are your opening hours?', or 'How can I book a service?'.",
    },
    {
      question: "Why do FAQs matter?",
      answer:
        "FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.",
    },
    {
      question: "Where can I add my FAQs?",
      answer:
        "FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.",
    },
    {
      question: "How do I add a new question & answer?",
      answer:
        "To add a new FAQ follow these steps: 1. Manage FAQs from your site dashboard or in the Editor 2. Add a new question & answer 3. Assign your FAQ to a category 4. Save and publish.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground mb-12">Frequently asked questions</p>

          <div className="mb-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Looking for something?"
              className="pl-12 h-14 text-base"
            />
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
