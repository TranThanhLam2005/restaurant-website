import React from "react";

// import UI components
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import {
  ShoppingBag,
  ChevronRight,
  RefreshCcw,
  Utensils,
  ReceiptText,
  Clock,
} from "lucide-react";

const ACTIVE_ORDERS = [];

const PAST_ORDERS = [
  {
    id: "#ORD-2023941",
    date: "Oct 24, 2024, 7:30 PM",
    status: "Delivered",
    total: 45.5,
    items: [
      {name: "Spicy Salmon Roll", qty: 2, price: 15.0},
      {name: "Miso Soup", qty: 1, price: 4.5},
      {name: "Green Tea Mochi", qty: 1, price: 6.0},
    ],
  },
  {
    id: "#ORD-2023910",
    date: "Oct 15, 2024, 1:15 PM",
    status: "Cancelled",
    total: 22.0,
    items: [
      {name: "Chicken Teriyaki Bento", qty: 1, price: 18.0},
      {name: "Edamame", qty: 1, price: 4.0},
    ],
  },
  {
    id: "#ORD-2023885",
    date: "Sep 28, 2024, 6:00 PM",
    status: "Delivered",
    total: 68.0,
    items: [
      {name: "Chef's Choice Sashimi Platter", qty: 1, price: 45.0},
      {name: "Shrimp Tempura Roll", qty: 1, price: 15.0},
      {name: "Diet Cola", qty: 2, price: 4.0},
    ],
  },
];

function OrderCard({order}: {order: any}) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Delivered":
        return "default";
      case "Preparing":
        return "secondary";
      case "Cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Card className="flex flex-col mb-4 overflow-hidden border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-primary" />
          {order.id}
        </CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {order.date}
          <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3">
          {order.items.map((item: any, index: number) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5 " />
                </div>
                <div className="flex flex-col">
                  <span>{item.name}</span>
                  <span className="text-xs text-muted-foreground">
                    Qty: {item.qty}
                  </span>
                </div>
              </div>
              <div className="text-sm font-medium">
                ${(item.price * item.qty).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-muted-foreground">Total Amount</span>
          <span className="font-bold">${order.total.toFixed(2)}</span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {order.status === "Delivered" && (
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto flex-1"
            >
              <RefreshCcw className="w-4 h-4 mr-2" />
              Reorder
            </Button>
          )}
          {order.status === "Preparing" && (
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto flex-1"
            >
              Track Order
            </Button>
          )}
          <Button variant="ghost" size="sm" className="w-full sm:w-auto flex-1">
            <ReceiptText className="w-4 h-4 mr-2" />
            Receipt
            <ChevronRight className="w-4 h-4 ml-1 opacity-50" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function OrderHubSection() {
  return (
    <div>
      <Tabs defaultValue="past" className="flex items-center">
        <TabsList>
          <TabsTrigger value="active">Active Orders</TabsTrigger>
          <TabsTrigger value="past">Past Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          {ACTIVE_ORDERS.length > 0 ? (
            ACTIVE_ORDERS.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center border rounded-lg border-dashed mt-4">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-medium">No active orders</h3>
              <p className="text-sm text-muted-foreground">
                You don't have any ongoing orders at the moment.
              </p>
              <Button>Browse Menu</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="mt-0">
          {PAST_ORDERS.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
