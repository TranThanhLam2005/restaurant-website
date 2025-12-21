"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {motion} from "framer-motion";
import {sectionStaggerVariants, itemVariants} from "../../animations/variants";

// Define a simple array of rules or FAQ items
const appRules = [
  {
    id: "rule-1",
    title: "Account Registration and Security",
    content:
      "Users must provide accurate and current information. You are responsible for maintaining the confidentiality of your password and account.",
  },
  {
    id: "rule-2",
    title: "Prohibited Content and Conduct",
    content:
      "The uploading or sharing of illegal, hateful, or abusive content is strictly prohibited. Users must not engage in harassment or disruptive behavior.",
  },
  {
    id: "rule-3",
    title: "Intellectual Property Rights",
    content:
      "All content provided by the application (excluding user-generated content) is the property of the application owner and protected by copyright law. You retain ownership of your own uploaded content, granting us a license to use it within the service.",
  },
  {
    id: "rule-4",
    title: "Termination of Service",
    content:
      "We reserve the right to suspend or terminate your access to the service at any time, without prior notice, for any violation of these rules.",
  },
];

export default function RuleSection() {
  return (
    <motion.section
      className="w-full px-2 py-6 md:py-24 md:px-20"
      variants={sectionStaggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-10% 0px"}}
    >
      {/* Title */}
      <motion.h1
        className="text-3xl font-bold mb-6 text-center"
        variants={itemVariants}
      >
        App Rules & Guidelines
      </motion.h1>
      <Accordion type="single" collapsible className="w-full">
        {appRules.map((rule) => (
          <AccordionItem key={rule.id} value={rule.id}>
            <AccordionTrigger>{rule.title}</AccordionTrigger>
            <AccordionContent>{rule.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Footer text */}
      <motion.p
        className="mt-8 text-center text-sm text-foreground"
        variants={itemVariants}
      >
        By using this service, you agree to abide by these rules and the full
        Terms of Service.
      </motion.p>
    </motion.section>
  );
}
