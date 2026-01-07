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
  SheetContent,
  SheetHeader,
  SheetFooter,
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

import Logo from "@/public/restaurant-icon.png";
import {Phone, Menu, Plus, Minus, ShoppingBag} from "lucide-react";

export default function AppHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
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
                  <h4>Booking Cart</h4>
                  <ShoppingBag className="w-6 h-6" />
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

                <div className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                  Catering
                </div>
                <div className="text-xl font-medium cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                  Promotion
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
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Languages</SelectLabel>
                      <SelectItem value="en">English</SelectItem>
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
