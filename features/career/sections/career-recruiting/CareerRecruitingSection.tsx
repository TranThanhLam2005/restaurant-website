"use client";

import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {CareerCardSection} from "@/features/career";

export default function CareerRecruitingSection() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-center">OPENING OPPORTUNITIES</h1>
      <h4 className="text-center">
        WE ARE GROWING AND WE NEED A TOP TEAM FOR CUSTOMERS WHO EXPECT THE BEST
      </h4>
      <Tabs defaultValue="saigon">
        <TabsList>
          <TabsTrigger value="saigon">Saigon</TabsTrigger>
          <TabsTrigger value="hanoi">Hanoi</TabsTrigger>
          <TabsTrigger value="danang">Danang</TabsTrigger>
          <TabsTrigger value="nhatrang">Nha Trang</TabsTrigger>
          <TabsTrigger value="dalat">Da Lat</TabsTrigger>
        </TabsList>
      </Tabs>
      <CareerCardSection />
      <h2 className="text-center">FREQUENTLY ASKED QUESTIONS</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What are the career advancement opportunities in store operations?
          </AccordionTrigger>
          <AccordionContent>
            Guided by our Core Values, Jollibee fosters a culture of continuous
            learning, purposeful work, and making meaningful connections. We
            provide our team opportunities to be engaged in their development
            towards a fulfilling career in store operations and restaurant
            management, homing in their skills as dynamic Store Crew, Restaurant
            Supervisors, Restaurant Managers, Restaurant General Managers,
            District Managers and Area Managers who carry on our mission of
            serving great tasting food, bringing the joy of eating to everyone.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What are the benefits and perks of joining our team?
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>
                Great work culture, a compelling mission, vision, and a work
                environment of family spirit & fun
              </li>
              <li>Excellent training and career advancement opportunities</li>
              <li>Continuous learning and development</li>
              <li>Strong family values and culture</li>
              <li>Job growth opportunities</li>
              <li>Employee discounts</li>
              <li>Meal privileges</li>
              <p className="py-2"> May be entitled to the following:</p>
              <li>401 (K) Match</li>
              <li>Health Insurance</li>
              <li>Dental & Vision Plans</li>
              <li>Life Insurance</li>
              <li>Paid Time Off</li>
              <li>Employee Assistance Program</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How do I apply for employment at your company?
          </AccordionTrigger>
          <AccordionContent>
            The best way is to check out our field positions and filter your
            search by location.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What is the status of my job application?
          </AccordionTrigger>
          <AccordionContent>
            Please allow us several days to process your application. If you do
            not hear from us, please reach out to the location where your
            application was submitted.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How do I know if your location is hiring?
          </AccordionTrigger>
          <AccordionContent>
            The best way is to check out our field positions and filter your
            search by location.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
