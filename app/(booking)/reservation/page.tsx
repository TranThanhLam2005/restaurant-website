"use client";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {
  ChevronLeft,
  Map,
  Trash,
  Download,
  Clock,
  MessageSquareX,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
export default function ReservationPage() {
  return (
    <div>
      <div className="max-w-3xl mx-auto mt-24 text-center">
        <Tabs defaultValue="all" className="hidden md:block">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="waitlist">Waitlist</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="canceled">Canceled</TabsTrigger>
          </TabsList>
          <div className="flex items-center mb-4">
            <ChevronLeft className="inline-block mr-2 cursor-pointer" />
            <h5>My Reservation</h5>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Checkbox />
              <p>Choose all</p>
            </div>
            <div className="cursor-pointer">Delete all reservation</div>
          </div>
          <TabsContent value="all">
            <Card className="mb-4">
              <CardHeader className="flex items-center gap-4 justify-between">
                <Checkbox className="border-black" />
                <div className="space-y-2">
                  <CardTitle>Reservation at The Gourmet Kitchen</CardTitle>
                  <CardDescription>
                    Date: July 20, 2024 | Time: 7:00 PM | Guests: 4
                  </CardDescription>
                </div>
                <Trash className="cursor-pointer" />
              </CardHeader>
              <CardContent>
                <div className="font-light">
                  2345 International Drive, Orlando, FL 32819
                </div>
                <div className="flex items-center justify-center">
                  <Badge variant="secondary">0232342342</Badge>
                  <Button variant="link">
                    <Map size={24} />
                    Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="upcoming">
            <Card className="mb-4">
              <CardHeader className="flex items-center gap-4 justify-between">
                <Checkbox className="border-black" />
                <div>
                  <CardTitle>Reservation at The Gourmet Kitchen</CardTitle>
                  <CardDescription className="font-light">
                    Date: July 20, 2024 | Time: 7:00 PM | Guests: 4
                  </CardDescription>
                </div>
                <Trash className="cursor-pointer" />
              </CardHeader>
              <CardContent>
                <div className="font-light">
                  2345 International Drive, Orlando, FL 32819
                </div>
                <div className="flex items-center justify-center">
                  <Badge variant="secondary">0232342342</Badge>
                  <Button variant="link">
                    <Map size={24} />
                    Google Maps
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="justify-center gap-4">
                <Button variant="outline">Modify Reservation</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="waitlist">
            <Card className="mb-4">
              <CardHeader className="flex items-center gap-4 justify-between">
                <Checkbox className="border-black" />
                <div>
                  <CardTitle>Reservation at The Gourmet Kitchen</CardTitle>
                  <CardDescription className="font-light">
                    Date: July 20, 2024 | Time: 7:00 PM | Guests: 4
                  </CardDescription>
                </div>
                <Trash className="cursor-pointer" />
              </CardHeader>
              <CardContent>
                <div className="font-light">
                  2345 International Drive, Orlando, FL 32819
                </div>
                <div className="flex items-center justify-center">
                  <Badge variant="secondary">0232342342</Badge>
                  <Button variant="link">
                    <Map size={24} />
                    Google Maps
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="justify-center gap-2">
                <div>Checking for availability</div>
                <Clock />
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="completed">
            <Card className="mb-4">
              <CardHeader className="flex items-center gap-4 justify-between">
                <Checkbox className="border-black" />
                <div>
                  <CardTitle>Reservation at The Gourmet Kitchen</CardTitle>
                  <CardDescription className="font-light">
                    Date: July 20, 2024 | Time: 7:00 PM | Guests: 4
                  </CardDescription>
                </div>
                <a download="receipt.pdf" title="Download Receipt">
                  <Download className="cursor-pointer" />
                </a>
              </CardHeader>
              <CardContent>
                <div className="font-light">
                  2345 International Drive, Orlando, FL 32819
                </div>
                <div className="flex items-center justify-center">
                  <Badge variant="secondary">0232342342</Badge>
                  <Button variant="link">
                    <Map size={24} />
                    Google Maps
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="justify-center gap-4">
                <Button variant="outline">Leave a Review</Button>
                <Button>Book Again</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="canceled">
            <Card className="mb-4">
              <CardHeader className="flex items-center gap-4 justify-between">
                <Checkbox className="border-black" />
                <div>
                  <CardTitle>Reservation at The Gourmet Kitchen</CardTitle>
                  <CardDescription className="font-light">
                    Date: July 20, 2024 | Time: 7:00 PM | Guests: 4
                  </CardDescription>
                </div>
                <Trash className="cursor-pointer" />
              </CardHeader>
              <CardContent>
                <div className="font-light">
                  2345 International Drive, Orlando, FL 32819
                </div>
                <div className="flex items-center justify-center">
                  <Badge variant="secondary">0232342342</Badge>
                  <Button variant="link">
                    <Map size={24} />
                    Google Maps
                  </Button>
                </div>
              </CardContent>
              <div className="flex items-center justify-center gap-2 font-sans font-light">
                <MessageSquareX />
                <p>Cancellation Notes: No show</p>
              </div>
              <CardFooter className="justify-center gap-4">
                <Button>Book Again</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
