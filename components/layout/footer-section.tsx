"use client";

import {Instagram, Facebook, Twitter, Mail, Phone, MapPin} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {motion} from "framer-motion";
import {sectionVariants} from "../../features/landing/animations/variants";

export default function FooterSection() {
  return (
    <motion.footer
      className="px-2 py-6 md:py-16 md:px-6 bg-gradient-to-b from-[#D4C4B0] to-[#C4B5A0] rounded-4xl"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-10% 0px"}}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left text-xs md:text-base">
        {/* Brand */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-wider bg-gradient-to-r from-[#4A3728] to-[#8B7355] bg-clip-text text-transparent">
            RoadHouse
          </h1>
          <p className="text-foreground font-light">
            Creating unforgettable dining experiences since 2020
          </p>
          <div className="flex gap-3">
            <Button size="icon" variant="ghost">
              <Instagram className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-primary font-serif">
            Quick Links
          </h4>
          <ul className="space-y-2 text-foreground font-sans font-light">
            <li className="hover:text-primary transition-colors cursor-pointer">
              Menu
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Reservations
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              About Us
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-foreground">
            Opening Hours
          </h4>
          <ul className="space-y-2 text-foreground font-light">
            <li>Monday - Friday: 11am - 11pm</li>
            <li>Saturday: 10am - 12am</li>
            <li>Sunday: 10am - 10pm</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-foreground font-serif">
            Contact
          </h4>
          <ul className="space-y-3 text-foreground font-sans font-light">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Restaurant St, City</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@roadhouse.com</span>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-6 md:my-12" />

      <div className="text-center text-foreground text-sm font-light">
        <p>© 2025 RoadHouse. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
