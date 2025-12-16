"use client";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {Clock} from "lucide-react";
export default function AboutSection() {
  return (
    <section className="p-2 bg-white rounded-4xl mt-[-40px] relative z-10">
      <div className="mx-auto text-center space-y-6 mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-primary mt-10">
          About Us
        </h2>
        <p className="text-xl text-foreground">
          Welcome to RoadHouse! We are dedicated to providing the finest dining
          experience with passion, quality, and exceptional service.
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-1/2 h-80 overflow-hidden ">
          <img
            src="https://lh3.googleusercontent.com/n61PrfXKw0pUWPHeix8BLdk35_BNw6K4nRYvLn3k5H4GSjDzeChIGmesTdANPinMoEKQUEBoUHmefm4bkiMnzfTZBKHg0MvwdOOFrL8=s0"
            alt="Community"
            className="w-full h-full object-cover"
          />
        </div>
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle className="text-primary text-3xl">
              OPENING HOURS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4 bg-background p-4 rounded-xl">
              <div>Monday - Thursday</div>
              <div className="font-bold">
                <Clock className="inline-block w-5 h-5 mr-2 mb-1" />
                11:00 AM - 10:00 PM
              </div>
            </div>
            <div className="flex justify-between mb-4 bg-background p-4 rounded-xl">
              <div>Monday - Thursday</div>
              <div className="font-bold">
                <Clock className="inline-block w-5 h-5 mr-2 mb-1" />
                11:00 AM - 10:00 PM
              </div>
            </div>
            <div className="flex justify-between mb-4 bg-background p-4 rounded-xl">
              <div>Monday - Thursday</div>
              <div className="font-bold">
                <Clock className="inline-block w-5 h-5 mr-2 mb-1" />
                11:00 AM - 10:00 PM
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
