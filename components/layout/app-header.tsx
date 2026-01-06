"use client";

// import libraries
import {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";

// import UI components and icons
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {Button} from "@/components/ui/button";
import Logo from "@/public/restaurant-icon.png";
import {BookOpenCheck, Beef, Phone, Menu, Plus, Minus} from "lucide-react";
import {set} from "date-fns";

export default function AppHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-xl font-medium tracking-tight bg-gradient-to-r from-[#4A3728] to-[#8B7355] bg-clip-text text-transparent cursor-pointer"
          onClick={() => router.push("/")}
        >
          RoadHouse
        </h1>
        <div className="flex items-center gap-4">
          {/* <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/nearby")}
          >
            <p>Near me</p>
            <Beef className="w-5 h-5" />
            <div>|</div>
          </div> */}
          {/* <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/reservation")}
          >
            <p>Booking Cart</p>
            <BookOpenCheck className="w-5 h-5" />
            <div>|</div>
          </div> */}
          <div className="flex items-center gap-2 cursor-pointer">
            <p>01234566778</p>
            <Phone className="w-5 h-5" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"
                  alt="Avatar"
                />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Reservations
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Orders
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Voucher Wallet
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Payment Info
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Notifications
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Invoices
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => router.push("/reservation")}
                >
                  <p>Booking Cart</p>
                  <BookOpenCheck className="w-5 h-5" />
                </div>
              </SheetHeader>
              <div className="space-y-4 px-6">
                <div className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                  Menu
                </div>
                <div
                  className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => router.push("/nearby")}
                >
                  Nearby
                </div>
                <div className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                  Catering
                </div>
                <div className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                  Promotion
                </div>
                <div className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                  Gifts & Vouchers
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
                  <CollapsibleContent className="pl-4 mt-2 space-y-2 text-sm font-medium">
                    <div className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                      Abous Us
                    </div>
                    <div className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                      Careers
                    </div>
                    <div className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                      Contact Us
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <SheetFooter>
                <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
