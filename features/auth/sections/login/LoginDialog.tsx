"use client";

// import libraries
import {signIn, signOut} from "next-auth/react";
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
            <DialogDescription className="text-center mb-4">
              Please enter your email to reservation, management table or online
              booking.
            </DialogDescription>
          </DialogHeader>
          <InputGroup>
            <InputGroupInput type="email" placeholder="eg: @email.com" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>Receive OTP</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <Separator />
          <div className="flex items-center justify-center gap-4">
            {/* Google Button */}
            <button
              onClick={() => signIn("google")}
              className="flex items-center gap-2 border p-2 rounded-md hover:bg-gray-50"
            >
              <Image src={GoogleIcon} alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>

            {/* Facebook Button */}
            <button
              onClick={() => signIn("facebook")}
              className="flex items-center gap-2 border p-2 rounded-md hover:bg-gray-50"
            >
              <Image src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
              Continue with Facebook
            </button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <p className="underline inline cursor-pointer">Terms of Service</p>{" "}
            and{" "}
            <p className="underline inline cursor-pointer">Privacy Policy</p>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
