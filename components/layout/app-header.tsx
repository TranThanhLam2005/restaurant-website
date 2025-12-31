"use client";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {BookOpenCheck, Beef, Phone} from "lucide-react";
import {useRouter} from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
export default function AppHeader() {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#4A3728] to-[#8B7355] bg-clip-text text-transparent cursor-pointer"
          onClick={() => router.push("/")}
        >
          RoadHouse
        </h1>
        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/nearby")}
          >
            <p>Near me</p>
            <Beef className="w-5 h-5" />
            <div>|</div>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/reservation")}
          >
            <p>Booking Cart</p>
            <BookOpenCheck className="w-5 h-5" />
            <div>|</div>
          </div>
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
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
