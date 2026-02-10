"use client";

// import libraries
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useOrderFood } from "@/features/menu";

// import UI components and icons
import { AccountNavSection } from "@/features/account-nav";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { AuthDialog } from "@/features/auth";
import Logo from "@/public/restaurant-icon.png";
import {
  Phone,
  Menu,
  Plus,
  Minus,
  ShoppingBag,
  Trash2,
  Ticket,
} from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Calendar } from "@/components/ui/calendar";
export default function AppHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const { data: session, status } = useSession();
  const isLoggedIn = !!session?.user;
  const isLoading = status === "loading";
  const {
    orders,
    deleteOrder,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useOrderFood();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h4
          className="font-bold tracking-wider bg-gradient-to-r from-[#4A3728] to-[#8B7355] bg-clip-text text-transparent cursor-pointer"
          onClick={() => router.push("/")}
        >
          RoadHouse
        </h4>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <p>01234566778</p>
            <Phone className="w-5 h-5" />
          </div>
          {isLoading ? (
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
          ) : isLoggedIn ? (
            <AccountNavSection />
          ) : (
            <AuthDialog />
          )}
          <Drawer
            open={isDrawerOpen}
            onOpenChange={setIsDrawerOpen}
            direction="bottom"
          >
            <DrawerTrigger asChild>
              <ShoppingBag className="w-5 h-5 cursor-pointer" />
            </DrawerTrigger>
            <DrawerPortal>
              <DrawerOverlay />
              <DrawerContent className="px-100">
                <DrawerHeader>
                  <DrawerTitle>YOUR ORDER</DrawerTitle>
                </DrawerHeader>
                <div className="max-h-100 overflow-y-auto px-2">
                  {orders.length === 0 ? (
                    <p>Your cart is empty</p>
                  ) : (
                    orders.map((order) => (
                      <div key={order.id}>
                        <div className="flex justify-between items-center">
                          <h4>{order.name}</h4>
                          <p>{order.price}</p>
                        </div>
                        <h5 className="text-muted-foreground">
                          {order.description}
                        </h5>
                        <Button variant="link" className="p-0">
                          Modify Order
                        </Button>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border rounded-lg overflow-hidden gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9"
                              onClick={() => decreaseQuantity(order.id)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <p>{order.quantity}</p>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9"
                              onClick={() => increaseQuantity(order.id)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10"
                            onClick={() => deleteOrder(order.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <Separator className="my-4" />
                      </div>
                    ))
                  )}
                </div>

                <DrawerFooter>
                  <h4>Total: ${totalPrice.toFixed(2)}</h4>
                  <InputGroup>
                    <InputGroupInput placeholder="Enter voucher code" />
                    <InputGroupAddon>
                      <Ticket className="w-4 h-4" />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                      <p className="hover:text-foreground cursor-pointer">
                        Apply
                      </p>
                    </InputGroupAddon>
                  </InputGroup>
                  <Button
                    onClick={() => {
                      setIsDrawerOpen(false);
                      setPaymentOpen(true);
                    }}
                  >
                    Checkout
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="ghost">Continue Shopping</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </DrawerPortal>
          </Drawer>
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="w-5 h-5 cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="flex flex-row items-center justify-between mt-2">
                <Image
                  src={Logo}
                  alt="Profile Image"
                  width={100}
                  height={100}
                />
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <SheetTitle>Booking Cart</SheetTitle>
                  <SheetDescription>
                    <ShoppingBag />
                  </SheetDescription>
                </div>
              </SheetHeader>
              <div className="space-y-4 px-6">
                <div
                  className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => router.push("/menu")}
                >
                  Menu
                </div>
                <div
                  className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => router.push("/booking")}
                >
                  Booking
                </div>

                <div
                  className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => router.push("/catering")}
                >
                  Private Events
                </div>
                <div
                  className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => router.push("/news")}
                >
                  News
                </div>
                <div
                  className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => router.push("/voucher")}
                >
                  Gifts & Vouchers
                </div>
                <div
                  className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => router.push("/nearby")}
                >
                  Nearby
                </div>
                <Collapsible open={open} onOpenChange={setOpen}>
                  <CollapsibleTrigger className="text-xl font-medium flex items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                    {open ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 mt-2 space-y-2 text-sm">
                    <div
                      className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => router.push("/feedback")}
                    >
                      Feedback
                    </div>
                    <div
                      className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => router.push("/career")}
                    >
                      Careers
                    </div>
                    <div
                      className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => router.push("/faq-legal")}
                    >
                      Legal & FAQ
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <SheetFooter>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Languages</SelectLabel>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="vi">Vietnamese</SelectItem>
                      <SelectItem value="zh">China</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Dialog open={paymentOpen} onOpenChange={setPaymentOpen}>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent className="sm:max-w-8xl">
            <div className="flex items-start justify-around">
              <Tabs defaultValue="delivery">
                <TabsList>
                  <TabsTrigger value="delivery">Giao hàng</TabsTrigger>
                  <TabsTrigger value="pickup">Nhận tại cửa hàng</TabsTrigger>
                </TabsList>

                <TabsContent value="delivery">
                  <h4>Delivery</h4>
                  <form className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="johndoe" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="eg: +1234567890" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="eg: 123 Main St" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="specialFoodNote">Special food note</Label>
                      <Textarea
                        id="specialFoodNote"
                        placeholder="eg: I am allergic to peanuts"
                      />
                    </div>
                    <Label>Time to delivery</Label>
                    <RadioGroup defaultValue="now" className="flex">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="now" id="now" />
                        <Label htmlFor="now">Delivery now</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="schedule" id="schedule" />
                        <Label htmlFor="schedule">Schedule for later</Label>
                      </div>
                    </RadioGroup>
                    <Label>Payment Method</Label>
                    <RadioGroup defaultValue="paypal" className="flex">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">Paypal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="onlineBanking"
                          id="onlineBanking"
                        />
                        <Label htmlFor="onlineBanking">Online Banking</Label>
                      </div>
                    </RadioGroup>

                    <Button type="submit" className="w-full">
                      Payment now - $300
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="pickup">
                  <h4>Receiver Detail</h4>
                  <form className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="johndoe" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="eg: +1234567890" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Restaurant address</Label>
                      <Textarea id="address" placeholder="eg: 123 Main St" />
                    </div>
                    <div className="flex items-start justify-between ">
                      <div className="grid gap-2">
                        <Label required>Receive Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="justify-start font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              initialFocus
                              disabled={{ before: new Date() }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="time" required>
                          Check-in Time
                        </Label>
                        <Input
                          id="time"
                          type="time"
                          className="h-11 shadow-none border-b rounded-none border-x-0 border-t-0 px-0"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="specialFoodNote">Special food note</Label>
                      <Textarea
                        id="specialFoodNote"
                        placeholder="eg: I am allergic to peanuts"
                      />
                    </div>
                    <Label>Payment Method</Label>
                    <RadioGroup defaultValue="paypal" className="flex">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">Paypal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="onlineBanking"
                          id="onlineBanking"
                        />
                        <Label htmlFor="onlineBanking">Online Banking</Label>
                      </div>
                    </RadioGroup>

                    <Button type="submit" className="w-full">
                      Payment now - $300
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              <div className="p-4 rounded-xl border shadow-3xl">
                <h4>YOUR ORDER</h4>
                <div>
                  <div className="flex justify-between items-center">
                    <h5>Waggu Meat</h5>
                    <p>$300</p>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Delicious wagyu beef cooked to perfection. A must-try for
                    meat lovers.
                  </p>
                  <Separator className="my-4" />
                  <div className="flex justify-between items-center">
                    <h5>Waggu Meat</h5>
                    <p>$300</p>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Delicious wagyu beef cooked to perfection. A must-try for
                    meat lovers.
                  </p>
                  <Separator className="my-4" />
                  <div className="flex justify-between items-center">
                    <h5>Waggu Meat</h5>
                    <p>$300</p>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Delicious wagyu beef cooked to perfection. A must-try for
                    meat lovers.
                  </p>
                  <Separator className="my-4" />
                </div>
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </header>
  );
}
