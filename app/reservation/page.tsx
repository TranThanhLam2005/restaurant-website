import {HeroSection} from "@/features/booking";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Badge} from "@/components/ui/badge";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {Checkbox} from "@/components/ui/checkbox";
import {Input} from "@/components/ui/input";
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Map,
  Trash,
} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {Progress} from "@/components/ui/progress";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
export default function ReservationPage() {
  return (
    <div>
      <HeroSection />
      <div>
        <h1>My Reservation</h1>
        <Separator className="my-4" />
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Checkbox />
            <p>Choose all</p>
          </div>
          <div>Delete all reservation</div>
        </div>
        <Card className="mb-4">
          <CardHeader className="flex items-center gap-4">
            <Checkbox />
            <div>
              <CardTitle className="text-lg font-semibold">
                Reservation at The Gourmet Kitchen
              </CardTitle>
              <CardDescription>
                Date: July 20, 2024 | Time: 7:00 PM | Guests: 4
              </CardDescription>
            </div>
            <Trash className="cursor-pointer" />
          </CardHeader>
          <CardContent>
            <div>2345 International Drive, Orlando, FL 32819</div>
            <div className="flex items-center">
              <Badge variant="secondary">0232342342</Badge>
              <Button variant="link">
                <Map size={24} />
                Google Maps
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="mr-2">
              Modify
            </Button>
            <Button variant="destructive">Cancel Reservation</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
