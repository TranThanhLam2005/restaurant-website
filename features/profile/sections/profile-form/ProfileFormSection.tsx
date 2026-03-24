"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useSession} from "next-auth/react";
import {useProfile, useUpdateProfile} from "../../hooks";
import {Toaster} from "@/components/ui/sonner";
import {toast} from "sonner";
export default function ProfileFormSection() {
  const {data: session} = useSession();
  const userEmail = session?.user?.name;
  const {profile, isLoading, error} = useProfile(userEmail);
  const updateProfile = useUpdateProfile(userEmail);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userEmail) {
      toast.error("Please log in to update your profile");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("fullname") as string;
    const phoneNumber = formData.get("phone") as string;

    try {
      await updateProfile.mutateAsync({
        fullname: fullname || undefined,
        phoneNumber: phoneNumber || undefined,
      });
      toast.success("Profile updated successfully!");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to update profile";
      toast.error(errorMessage);
      console.error("Profile update failed:", err);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Avatar className="h-36 w-36 md:h-24 md:w-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button variant="outline">Change Avatar</Button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <Label htmlFor="fullname">FullName</Label>
          <Input
            id="fullname"
            name="fullname"
            placeholder="johndoe"
            defaultValue={profile?.fullname || ""}
            maxLength={50}
          />
          <p className="text-[0.8rem] text-muted-foreground">
            This is your public display name.
          </p>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="eg: +1234567890"
            defaultValue={profile?.phoneNumber || ""}
            maxLength={20}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue={profile?.email || ""} disabled />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="specialFoodNote">Special food note</Label>
          <Textarea
            id="specialFoodNote"
            placeholder="eg: I am allergic to peanuts"
          />
        </div>

        <Button type="submit" disabled={updateProfile.isPending}>
          {updateProfile.isPending ? "Updating..." : "Update profile"}
        </Button>
        <Toaster position="top-right" />
      </form>
    </div>
  );
}
