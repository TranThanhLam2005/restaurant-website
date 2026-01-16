"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Input} from "@/components/ui/input";

export default function BookingPartySection() {
  const formSchema = z.object({
    fullname: z.string().min(2, {
      message: "Fullname must be at least 2 characters.",
    }),
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    phone: z.string().min(2, {
      message: "Phone must be at least 2 characters.",
    }),
    type: z.string().min(3, {
      message: "Type must be at least 3 characters.",
    }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      type: "",
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="relative w-full h-screen rounded-4xl overflow-hidden">
        <img
          src="https://zeroinchinteriorsltd.com/wp-content/uploads/2023/09/The-primary-dining-area-of-a-modern-and-minimalistic-Italian-Fine-Dining-restaurant-adorned-in-raspberry-tones.-2.jpg"
          alt="Booking Party"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white gap-4">
          <h1 className="text-7xl">Private Events & Parties</h1>
          <h3>A fantastic culinary experience for any occasion.</h3>
        </div>
      </div>
      <div className="flex">
        <h1 className="w-2/3 text-center">
          Event and private party planning services
        </h1>
        <div className="flex flex-col gap-4">
          <h2>
            Please contact us directly by phone or email if you wish to check
            availability or have any special requests.
          </h2>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p>Vietnam: reservation@example.com</p>
              <p>USA: reservation@example.com </p>
              <p>Thailand: reservation@example.com</p>
              <p>Mexico: reservation@example.com</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Vietnam: +1 234 567 8901</p>
              <p>USA: +84 123 456 789</p>
              <p>Thailand: +66 987 654 321</p>
              <p>Mexico: +52 555 123 4567</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <h1 className="w-2/3 text-center">Classy event</h1>
        <h5>
          Elevate your event with private spaces, exquisite cuisine, and
          attentive service at El Gaucho. Whether it's a luxurious or intimate
          event, we pay attention to every detail to ensure your experience is
          truly memorable.
        </h5>
      </div>
      <img
        src="https://www.texasroadhouse.com/sites/default/files/2021-10/og-image.jpg"
        alt="Booking Party"
        className="w-full h-screen rounded-4xl object-cover"
      />
      <div className="flex">
        <h1 className="w-2/3 text-center">Private party on request</h1>
        <h5>
          Wherever your birthday party, anniversary celebration, or business
          meeting is taking place, El Gaucho is ready to accompany you! Our
          service is a blend of explosive flavors, dedicated staff, and
          authentic Argentinian style all to create a memorable event for you.
        </h5>
      </div>
      <div className="flex flex-col items-center bg-muted rounded-4xl p-8 gap-4">
        <h1>Book private event and party planning services.</h1>
        <h3>Create a memorable event with El Gaucho.</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fullname"
              render={({field}) => (
                <>
                  <FormItem>
                    <FormLabel>Fullname</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your fullname" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <>
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <>
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Event Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectScrollUpButton />
                        <SelectGroup>
                          <SelectLabel>Event Type</SelectLabel>
                          <SelectItem value="birthday">Birthday</SelectItem>
                          <SelectItem value="anniversary">
                            Anniversary
                          </SelectItem>
                          <SelectItem value="business">
                            Business Meeting
                          </SelectItem>
                        </SelectGroup>
                        <SelectScrollDownButton />
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Reserve Request</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
