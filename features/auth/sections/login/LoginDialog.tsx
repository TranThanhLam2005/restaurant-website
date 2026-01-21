"use client";

// import libraries
import {signIn} from "next-auth/react";
import Image from "next/image";

// import UI components
import FacebookIcon from "@/public/fb-icon.svg.webp";
import GoogleIcon from "@/public/gg-icon.svg.png";
import {Separator} from "@/components/ui/separator";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

// const formSchema = z.object({
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   password: z.string().min(8, {
//     message: "Password must be at least 8 characters.",
//   }),
// });

// type LoginFormValues = z.infer<typeof formSchema>;

// export default function LoginForm() {
//   const form = useForm<LoginFormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (values: LoginFormValues) => {
//     console.log("Login data:", values);
//   };

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-6 max-w-sm"
//       >
//         {/* Email */}
//         <FormField
//           control={form.control}
//           name="email"
//           render={({field}) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>

//               <FormControl>
//                 <Input
//                   type="email"
//                   placeholder="email@example.com"
//                   {...field}
//                 />
//               </FormControl>

//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Password */}
//         <FormField
//           control={form.control}
//           name="password"
//           render={({field}) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>

//               <FormControl>
//                 <Input type="password" placeholder="••••••••" {...field} />
//               </FormControl>

//               <FormDescription>Must be at least 8 characters.</FormDescription>

//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit" className="w-full">
//           Log in
//         </Button>
//       </form>
//     </Form>
//   );
// }

export default function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar>
          <AvatarImage
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg"
            alt="Avatar"
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-3xl mb-4">
              Login
            </DialogTitle>
            <DialogDescription className="text-center font-light mb-4">
              Please enter your email to reservation, management table or online
              booking.
            </DialogDescription>
          </DialogHeader>
          <Input type="email" placeholder="eg: email@example.com" />
          <Input type="password" placeholder="Enter Password" />
          <Button>Send Verification Email</Button>
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
              <Image
                src={FacebookIcon}
                alt="Facebook"
                className="w-4 h-4 mr-1"
              />
              Continue with Facebook
            </button>
          </div>
          <p className="text-center font-light text-muted-foreground text-sm mt-4">
            By continuing, you agree to our{" "}
            <span className="underline inline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="underline inline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
