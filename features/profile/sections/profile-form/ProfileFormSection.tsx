"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function ProfileFormSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button variant="outline">Change Avatar</Button>
      </div>

      <form className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="fullname">FullName</Label>
          <Input id="fullname" placeholder="johndoe" />
          <p className="text-[0.8rem] text-muted-foreground">
            This is your public display name.
          </p>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="eg: +1234567890" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="specialFoodNote">Special food note</Label>
          <Textarea
            id="specialFoodNote"
            placeholder="eg: I am allergic to peanuts"
          />
        </div>

        <Button type="submit">Update profile</Button>
      </form>
    </div>
  );
}
