"use client";
import {useRouter} from "next/navigation";

const positions = [
  {
    title: "ACCOUNTING MANAGER",
    location: "Saigon",
  },
  {
    title: "SOFTWARE ENGINEER",
    location: "Hanoi",
  },
  {
    title: "PRODUCT MANAGER",
    location: "Danang",
  },
  {
    title: "MARKETING SPECIALIST",
    location: "Nha Trang",
  },
  {
    title: "HR COORDINATOR",
    location: "Da Lat",
  },
  {
    title: "CUSTOMER SUPPORT MANAGER",
    location: "Saigon",
  },
  {
    title: "DATA ANALYST",
    location: "Hanoi",
  },
  {
    title: "UX/UI DESIGNER",
    location: "Danang",
  },
  {
    title: "SALES MANAGER",
    location: "Nha Trang",
  },
  {
    title: "OPERATIONS MANAGER",
    location: "Da Lat",
  },
  {
    title: "CONTENT WRITER",
    location: "Saigon",
  },
  {
    title: "IT SUPPORT SPECIALIST",
    location: "Hanoi",
  },
];
export default function CareerCardSection() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {positions.map((position, index) => (
        <div
          key={index}
          className="w-full border p-4 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer "
          onClick={() => router.push("/career/" + index.toString())}
        >
          <h4>{position.title}</h4>
          <h5>Location: {position.location}</h5>
        </div>
      ))}
    </div>
  );
}
