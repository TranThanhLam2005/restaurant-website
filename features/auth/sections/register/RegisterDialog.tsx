"use client";

// import libraries
import {signIn} from "next-auth/react";
import Image from "next/image";
import {useState} from "react";

// import UI components
import FacebookIcon from "@/public/fb-icon.svg.webp";
import GoogleIcon from "@/public/gg-icon.svg.png";
import {Separator} from "@/components/ui/separator";
import {Toaster} from "@/components/ui/sonner";
import {toast} from "sonner";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {authApi} from "../..";

interface RegisterDialogProps {
  onSwitchToLogin?: () => void;
}

export default function RegisterDialog({onSwitchToLogin}: RegisterDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsPending(true);
    try {
      await authApi.register({email, password});
      toast.success("Registration successful! Please check your email.");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle className="text-center text-3xl">Register</DialogTitle>
        <DialogDescription className="text-center font-light">
          Create your account to start making reservations and online bookings.
        </DialogDescription>
      </DialogHeader>
      <Input
        type="email"
        placeholder="eg: email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        variant="link"
        className="flex ml-auto"
        onClick={onSwitchToLogin}
        type="button"
      >
        Already have an account?
      </Button>
      <Button onClick={handleRegister} disabled={isPending}>
        {isPending ? "Creating account..." : "Send Verification Email"}
      </Button>
      <Toaster />
      <Separator />
      <div className="flex items-center justify-center gap-4">
        {/* Google Button */}
        <button
          onClick={() => signIn("google")}
          className="flex items-center border p-2 rounded-md hover:bg-gray-50"
        >
          <Image src={GoogleIcon} alt="Google" className="w-4 h-4 mr-1" />
          Continue with Google
        </button>

        {/* Facebook Button */}
        <button
          onClick={() => signIn("facebook")}
          className="flex items-center border p-2 rounded-md hover:bg-gray-50"
        >
          <Image src={FacebookIcon} alt="Facebook" className="w-4 h-4 mr-1" />
          Continue with Facebook
        </button>
      </div>
      <p className="text-center font-light text-muted-foreground text-sm mt-4">
        By continuing, you agree to our{" "}
        <span className="underline inline cursor-pointer">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="underline inline cursor-pointer">Privacy Policy</span>
      </p>
    </DialogContent>
  );
}
