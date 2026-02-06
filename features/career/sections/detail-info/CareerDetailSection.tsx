"use client";
import {Separator} from "@/components/ui/separator";
import {Skeleton} from "@/components/ui/skeleton";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {Input} from "@/components/ui/input";
import {CareerCardSection} from "@/features/career";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

export default function CareerDetailSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  //   function onSubmit(data: z.infer<typeof formSchema>) {
  //     toast("You submitted the following values:", {
  //       description: (
  //         <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
  //           <code>{JSON.stringify(data, null, 2)}</code>
  //         </pre>
  //       ),
  //       position: "bottom-right",
  //       classNames: {
  //         content: "flex flex-col gap-2",
  //       },
  //       style: {
  //         "--border-radius": "calc(var(--radius)  + 4px)",
  //       } as React.CSSProperties,
  //     });
  //   }
  return (
    <div>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/career">Careers</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Cashier</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between items-start gap-20">
        <div className="flex-1 space-y-6">
          <h1>CASHIER</h1>
          <h5>Location: SAI GON</h5>
          <Separator />
          <h3>OVERVIEW</h3>
          <p>
            As a Cashier, you are responsible for processing payments, handling
            guest bills, and supporting the front-of-house team. You will work
            with both waiters and managers to make sure the checkout process is
            smooth, fast, and accurate. Your role is important in ending the
            guest’s experience with a positive impression.
          </p>
          <h3>JOB DESCRIPTION</h3>
          <ul className="list-disc pl-5 space-y-2">
            <p>Key Responsibilities:</p>
            <li>Process guest payments including cash, card, and vouchers.</li>
            <li>Use POS and payment systems correctly and efficiently.</li>
            <li>Ensure accuracy in billing, receipts, and change.</li>
            <li>Maintain records of transactions, discounts, and voids.</li>
            <li>
              Collaborate with service staff to handle guest bills promptly.
            </li>
            <li>
              Follow all company procedures related to cash handling and
              end-of-shift duties.
            </li>
          </ul>
          <h3>JOB REQUIREMENTS</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Honest and responsible attitude</li>
            <li>Good with numbers and attention to detail.</li>
            <li>Good computer, POS system skills</li>
            <li>Proficient in Microsoft Excel</li>
            <li>Must be able to speak, read, and write Thai</li>
            <li>Fluency in English (additional languages are a bonus)</li>
          </ul>
          <h3>EMPLOYMENT TYPE</h3>
          <p>Employment Type: Full-time</p>
          <h3>BENEFITS</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Salary ranges from 13,000 Baht to 15,000 Baht per month, with
              additional income from competitive service charge and tips.
            </li>
            <li>
              Long-term team members have the opportunity to grow and be
              promoted to higher positions.
            </li>
            <li>Be part of a dynamic and professional team.</li>
            <li>Learn from experienced colleagues.</li>
            <li>Deliver premium experiences that guests remember.</li>
            <li>Grow in a fast-paced, high-end hospitality environment.</li>
          </ul>
        </div>
        <div className="w-100 flex-shrink-0 space-y-6">
          <h3>APPLY FOR THIS JOB</h3>
          <Form {...form}>
            <FormField
              name="fullName"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phoneNumber"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="resume"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Resume</FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit Application</Button>
          </Form>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <h3>STEAK HOUSE FAMILY PHOTOS</h3>
        <Skeleton className="w-full h-120 mb-4 rounded-xl" />
        <h2>WE'RE ALSO HIRING</h2>
        <CareerCardSection />
      </div>
    </div>
  );
}
