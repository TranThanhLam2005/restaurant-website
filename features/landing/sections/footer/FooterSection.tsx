"use client"
import {Instagram, Facebook, Twitter, Mail, Phone, MapPin} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function FooterSection() {
    return (
        <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-white/10">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            RoadHouse
                        </h3>
                        <p className="text-gray-400">
                            Creating unforgettable dining experiences since 2020
                        </p>
                        <div className="flex gap-3">
                            <Button size="icon" variant="ghost" className="hover:bg-white/10 rounded-full">
                                <Instagram className="w-5 h-5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="hover:bg-white/10 rounded-full">
                                <Facebook className="w-5 h-5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="hover:bg-white/10 rounded-full">
                                <Twitter className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white transition-colors cursor-pointer">Menu</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Reservations</li>
                            <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                        </ul>
                    </div>
                    
                    {/* Hours */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Opening Hours</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Monday - Friday: 11am - 11pm</li>
                            <li>Saturday: 10am - 12am</li>
                            <li>Sunday: 10am - 10pm</li>
                        </ul>
                    </div>
                    
                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Contact</h4>
                        <ul className="space-y-3 text-gray-400">
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
                
                <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p>© 2025 RoadHouse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}