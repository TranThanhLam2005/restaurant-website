"use client";

import {Badge} from "@/components/ui/badge";

export default function GalarySection() {
  return (
    <section className="py-24 px-20">
      <div className=" mb-12">
        <h2 className="text-4xl text-primary font-bold tracking-tight mb-4">
          PHOTOS
        </h2>
        <div className="flex justify-start gap-3">
          <Badge>Outdoor Seating</Badge>
          <Badge>Cozy Interior</Badge>
          <Badge>Delicious Dishes</Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
        <div className="row-span-1 overflow-hidden rounded-2xl ">
          <img
            src="https://images.summitmedia-digital.com/spotph/images/2024/09/26/texas-roadhouse-menu-featured-image-1727344788.jpg"
            alt="Gallery Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-2 overflow-hidden rounded-2xl">
          <img
            src="https://preview.redd.it/obligatory-friday-texas-roadhouse-pic-v0-kow6w0u9vivc1.jpg?width=640&crop=smart&auto=webp&s=7fead84a7b1200ad4add7b8f2756b6830c8ea42a"
            alt="Gallery Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-1 overflow-hidden rounded-2xl">
          <img
            src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_336,q_75,w_510/v1/crm/reddirt/Texas-Roadhouse-f88835bf5056b3a_f8883785-5056-b3a8-4945dc8a38629751.jpg"
            alt="Gallery Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-1 overflow-hidden rounded-2xl">
          <img
            src="https://www.allrecipes.com/thmb/4rByQ6x1OxcAZE1gJ0Qe9rpQEmk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-texasroadhouseprimerib-0b0f74de758f4a0fa6bedcdace94597c.jpg"
            alt="Gallery Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-1 overflow-hidden rounded-2xl">
          <img
            src="https://www.allrecipes.com/thmb/dLOWVvXaxRuCNc8kfOZyPC5XmP0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-texasroadhousecountryfriedsteak-4f98495c08244dbcbeca318dc44fb0f5.jpg"
            alt="Gallery Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
