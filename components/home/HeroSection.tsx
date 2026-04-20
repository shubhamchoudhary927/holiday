"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* बैकग्राउंड इमेज */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
          alt="Travel Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* ओवरले */}
      </div>

      {/* कंटेंट */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          अपने सपनों की छुट्टियाँ बुक करें
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          भारत के सबसे खूबसूरत जगहों पर शानदार हॉलिडे पैकेज। 
          मनाली की बर्फीली वादियों से लेकर गोवा के समुद्री किनारों तक।
        </p>

        {/* सर्च बार */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center gap-2 px-3">
            <MapPin className="text-gray-400 h-5 w-5" />
            <Input 
              placeholder="कहाँ जाना चाहते हैं?" 
              className="border-0 focus-visible:ring-0 text-black"
            />
          </div>
          <div className="flex-1 flex items-center gap-2 px-3 border-l">
            <Calendar className="text-gray-400 h-5 w-5" />
            <Input 
              type="date" 
              className="border-0 focus-visible:ring-0 text-black"
            />
          </div>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            <Search className="h-5 w-5 mr-2" />
            खोजें
          </Button>
        </div>

        {/* ट्रस्ट इंडिकेटर */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold">5000+</div>
            <div className="text-sm opacity-90">खुश ग्राहक</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">100+</div>
            <div className="text-sm opacity-90">पैकेज</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm opacity-90">डेस्टिनेशन</div>
          </div>
        </div>
      </div>
    </div>
  );
}