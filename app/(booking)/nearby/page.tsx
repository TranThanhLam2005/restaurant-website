// "use client";

// import {useState} from "react";
// import {GoogleMapsEmbed} from "@next/third-parties/google";

// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardFooter,
//   CardAction,
//   CardContent,
// } from "@/components/ui/card";

// import {Label} from "@/components/ui/label";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectScrollDownButton,
//   SelectScrollUpButton,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
// import {Input} from "@/components/ui/input";

// export default function NearbyPage() {
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

 

//   const mapQuery =
//     selectedState || selectedCity
//       ? `${selectedCity.replace("-", " ")},${selectedState.replace(
//           "-",
//           " "
//         )} texas roadhouse`
//       : "texas roadhouse near me";
//   return (
//     <div>
//       <div className="flex flex-col mx-40 my-24 gap-10">
//         <Card className="flex flex-row gap-10 p-10">
//           <img
//             src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/texas-roadhouse-exterior.jpg?quality=82&strip=1"
//             alt="Nearby Location"
//             className="w-1/3 h-auto rounded-4xl shadow-lg"
//           />
//           <div className="flex flex-col flex-1 gap-6">
//             <div className="flex items-center justify-around">
//               <div className="flex flex-col items-center gap-2">
//                 <img
//                   src="https://i.pinimg.com/736x/12/78/1c/12781c5de0a36e91dd57734a91ec88a2.jpg"
//                   alt="Nearby Location"
//                   className="w-16 h-16"
//                 ></img>
//                 <CardTitle>872 restaurants</CardTitle>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <img
//                   src="https://s3-symbol-logo.tradingview.com/texas-roadhouse--600.png"
//                   alt="Nearby Location"
//                   className="w-16 h-16"
//                 ></img>
//                 <CardTitle>{">"} 120 millions customer</CardTitle>
//               </div>
//             </div>
//             <CardContent>
//               Texas Roadhouse is a popular American steakhouse known for its
//               bold, hearty flavors. The restaurant specializes in hand-cut
//               steaks, fall-off-the-bone ribs, and classic American sides. It is
//               famous for its freshly baked bread served with signature cinnamon
//               butter. Texas Roadhouse emphasizes a lively, casual dining
//               atmosphere inspired by Texas culture. Guests often enjoy country
//               music and energetic staff line dances. The menu focuses on
//               generous portions at affordable prices. Quality, freshness, and
//               friendly service are key values of the brand. Texas Roadhouse aims
//               to deliver a fun and satisfying dining experience for families and
//               groups.
//             </CardContent>
//           </div>
//           {/* Additional content for nearby locations can be added here */}
//         </Card>
//         <Card className="text-center">
//           <CardHeader>
//             <CardTitle>Please select restaurant type system</CardTitle>
//             <RadioGroup
//               defaultValue="dine-in"
//               className="flex justify-center gap-8 mt-4"
//             >
//               <div className="flex items-center gap-2">
//                 <RadioGroupItem
//                   value="dine-in"
//                   id="dine-in"
//                   className="border-black"
//                 />
//                 <Label htmlFor="dine-in" className="cursor-pointer">
//                   Dine In
//                 </Label>
//               </div>
//               <div className="flex items-center gap-2">
//                 <RadioGroupItem
//                   value="takeaway"
//                   id="takeaway"
//                   className="border-black"
//                 />
//                 <Label htmlFor="takeaway" className="cursor-pointer">
//                   Take Away
//                 </Label>
//               </div>
//               <div className="flex items-center gap-2">
//                 <RadioGroupItem
//                   value="delivery"
//                   id="delivery"
//                   className="border-black"
//                 />
//                 <Label htmlFor="delivery" className="cursor-pointer">
//                   Delivery
//                 </Label>
//               </div>
//             </RadioGroup>
//             <div className="flex items-center justify-center gap-4 mt-2">
//               <Input
//                 type="text"
//                 placeholder="Enter your location to find nearby restaurants"
//                 className="border-black w-1/3"
//               />
//               <Select
//                 value={selectedState}
//                 onValueChange={(value) => {
//                   setSelectedState(value);
//                   setSelectedCity("");
//                 }}
//               >
//                 <SelectTrigger className="w-[180px] border-black">
//                   <SelectValue placeholder="Select state" />
//                 </SelectTrigger>
//                 <SelectContent className="border-black">
//                   <SelectScrollUpButton />
//                   <SelectGroup>
//                     <SelectLabel>State</SelectLabel>
//                     {US_STATES_CITIES.map((state, id) => (
//                       <SelectItem key={id} value={state.value}>
//                         {state.name}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                   <SelectScrollDownButton />
//                 </SelectContent>
//               </Select>
//               <Select
//                 value={selectedCity}
//                 onValueChange={setSelectedCity}
//                 disabled={!selectedState}
//               >
//                 <SelectTrigger className="w-[180px] border-black">
//                   <SelectValue placeholder="Select city" />
//                 </SelectTrigger>
//                 <SelectContent className="border-black">
//                   <SelectScrollUpButton />
//                   <SelectGroup>
//                     <SelectLabel>Choose your city</SelectLabel>
//                     {cities.map((city, id) => (
//                       <SelectItem key={id} value={city.value}>
//                         {city.name}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                   <SelectScrollDownButton />
//                 </SelectContent>
//               </Select>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <div className="rounded-2xl overflow-hidden shadow-xl">
//               <GoogleMapsEmbed
//                 apiKey={process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY || ""}
//                 height={500}
//                 width="100%"
//                 mode="place"
//                 q={mapQuery}
//               />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <CardAction>
//               {/* Action button or link can be added here */}
//             </CardAction>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// }
