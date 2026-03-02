"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ChevronLeft,
  Map,
  Trash,
  Download,
  Clock,
  MessageSquareX,
  Loader2,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";
import { useReservations } from "@/features/reservation/hooks";
import { Reservation } from "@/features/reservation/types";
import { format } from "date-fns";

function ReservationCard({
  reservation,
  showActions,
}: {
  reservation: Reservation;
  showActions?: "upcoming" | "waitlist" | "completed" | "canceled";
}) {
  return (
    <Card className="mb-4">
      <CardHeader className="flex items-center gap-4 justify-between">
        <Checkbox className="border-black" />
        <div className="space-y-2">
          <CardTitle>Reservation #{reservation.id}</CardTitle>
          <CardDescription>
            Date:{" "}
            {format(new Date(reservation.reservationDate), "MMMM d, yyyy")} |
            Time: {reservation.reservationTime} | Guests:{" "}
            {reservation.guestCount}
          </CardDescription>
        </div>
        {showActions === "completed" ? (
          <a download="receipt.pdf" title="Download Receipt">
            <Download className="cursor-pointer" />
          </a>
        ) : (
          <Trash className="cursor-pointer" />
        )}
      </CardHeader>
      <CardContent>
        <div className="font-light">Branch ID: {reservation.branchId}</div>
        <div className="flex items-center justify-center">
          <Badge variant="secondary">{reservation.customerPhone}</Badge>
          <Button variant="link">
            <Map size={24} />
            Google Maps
          </Button>
        </div>
      </CardContent>
      {showActions === "upcoming" && (
        <CardFooter className="justify-center gap-4">
          <Button variant="outline">Modify Reservation</Button>
        </CardFooter>
      )}
      {showActions === "waitlist" && (
        <CardFooter className="justify-center gap-2">
          <div>Checking for availability</div>
          <Clock />
        </CardFooter>
      )}
      {showActions === "completed" && (
        <CardFooter className="justify-center gap-4">
          <Button variant="outline">Leave a Review</Button>
          <Button>Book Again</Button>
        </CardFooter>
      )}
      {showActions === "canceled" && (
        <>
          <div className="flex items-center justify-center gap-2 font-sans font-light">
            <MessageSquareX />
            <p>
              Cancellation Notes: {reservation.cancellationNotes || "No show"}
            </p>
          </div>
          <CardFooter className="justify-center gap-4">
            <Button>Book Again</Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}

export default function ReservationHubSection() {
  const { data: session } = useSession();
  const { reservations, isLoading, isError } = useReservations(
    // session?.user?.email ||
    "tranthanhlam99nt@gmail.com",
  );

  const filterByStatus = (status: Reservation["status"]): Reservation[] =>
    reservations?.filter((r: Reservation) => r.status === status) || [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Failed to load reservations. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto text-center">
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
            {reservations?.length ? (
              reservations.map((reservation: Reservation) => (
                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                  showActions={
                    reservation.status.toLowerCase() as
                      | "upcoming"
                      | "waitlist"
                      | "completed"
                      | "canceled"
                  }
                />
              ))
            ) : (
              <p className="text-muted-foreground py-8">
                No reservations found.
              </p>
            )}
          </TabsContent>
          <TabsContent value="upcoming">
            {filterByStatus("UPCOMING").length ? (
              filterByStatus("UPCOMING").map((reservation) => (
                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                  showActions="upcoming"
                />
              ))
            ) : (
              <p className="text-muted-foreground py-8">
                No upcoming reservations.
              </p>
            )}
          </TabsContent>
          <TabsContent value="waitlist">
            {filterByStatus("WAITLIST").length ? (
              filterByStatus("WAITLIST").map((reservation) => (
                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                  showActions="waitlist"
                />
              ))
            ) : (
              <p className="text-muted-foreground py-8">
                No waitlist reservations.
              </p>
            )}
          </TabsContent>
          <TabsContent value="completed">
            {filterByStatus("COMPLETED").length ? (
              filterByStatus("COMPLETED").map((reservation) => (
                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                  showActions="completed"
                />
              ))
            ) : (
              <p className="text-muted-foreground py-8">
                No completed reservations.
              </p>
            )}
          </TabsContent>
          <TabsContent value="canceled">
            {filterByStatus("CANCELED").length ? (
              filterByStatus("CANCELED").map((reservation) => (
                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                  showActions="canceled"
                />
              ))
            ) : (
              <p className="text-muted-foreground py-8">
                No canceled reservations.
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
