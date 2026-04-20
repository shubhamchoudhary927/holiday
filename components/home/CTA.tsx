"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-orange-600">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          अपनी अगली यात्रा आज ही बुक करें
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          5000+ खुश ग्राहक | 100+ शानदार पैकेज | 50+ डेस्टिनेशन
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/packages">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              पैकेज देखें
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              संपर्क करें
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}