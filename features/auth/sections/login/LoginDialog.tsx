"use client";

// import libraries
import Image from "next/image";
import {useActionState} from "react";
import {authenticate} from "@/app/lib/actions";

// import UI components
import FacebookIcon from "@/public/fb-icon.svg.webp";
import GoogleIcon from "@/public/gg-icon.svg.png";
import {Separator} from "@/components/ui/separator";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

interface LoginDialogProps {
  onSwitchToRegister?: () => void;
}

export default function LoginDialog({onSwitchToRegister}: LoginDialogProps) {
  const [errorMessage, formAction, isPending] = useActionState(
    async (prevState: string | undefined, formData: FormData) => {
      const result = await authenticate(prevState, formData);
      if (!result) {
        window.location.reload();
      }
      return result;
    },
    undefined,
  );
  return (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle className="text-center text-3xl">Login</DialogTitle>
        <DialogDescription className="text-center font-light">
          Please enter your username to reservation, management table or online
          booking.
        </DialogDescription>
      </DialogHeader>
      <form action={formAction} className="space-y-4">
        <Input type="text" name="username" placeholder="Username" required />
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <Button
          variant="link"
          className="flex ml-auto"
          onClick={onSwitchToRegister}
          type="button"
        >
          Create new account
        </Button>
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Logging in..." : "Login to your account"}
        </Button>
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      </form>

      <Separator />
      <div className="flex items-center justify-center gap-4">
        {/* Google Button */}
        <button
          onClick={() => console.log("Google sign-in")}
          className="flex items-center border p-2 rounded-md hover:bg-gray-50"
        >
          <Image src={GoogleIcon} alt="Google" className="w-4 h-4 mr-1" />
          Continue with Google
        </button>

        {/* Facebook Button */}
        <button
          onClick={() => console.log("Facebook sign-in")}
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
