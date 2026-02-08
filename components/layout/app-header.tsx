"use client";

// import libraries
import {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {useSession} from "next-auth/react";
import {useOrderFood} from "@/features/menu";

// import UI components and icons
import {AccountNavSection} from "@/features/account-nav";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {AuthDialog} from "@/features/auth";
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

export default function AppHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {data: session, status} = useSession();
  const isLoggedIn = !!session?.user;
  const isLoading = status === "loading";
  const {orders, deleteOrder, totalPrice, increaseQuantity, decreaseQuantity} =
    useOrderFood();

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
                  <Button>Checkout</Button>
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
    </header>
  );
}
