"use client";

import {useState} from "react";
import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {LoginDialog, RegisterDialog} from "@/features/auth";
import {User} from "lucide-react";

type DialogMode = "login" | "register";

export default function AuthDialog() {
  const [mode, setMode] = useState<DialogMode>("login");

  const switchToRegister = () => {
    setMode("register");
  };

  const switchToLogin = () => {
    setMode("login");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        {mode === "login" ? (
          <LoginDialog onSwitchToRegister={switchToRegister} />
        ) : (
          <RegisterDialog onSwitchToLogin={switchToLogin} />
        )}
      </DialogPortal>
    </Dialog>
  );
}
