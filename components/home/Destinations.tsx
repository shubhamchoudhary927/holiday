"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    name: "मनाली",
    state: "हिमाचल प्रदेश",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a5f?q=80&w=2070&auto=format&fit=crop",
    packageCount: 15,
    slug: "manali"
  },
  {
    name: "गोवा",
    state: "गोवा",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
    packageCount: 25,
    slug: "goa"
  },
  {
    name: "जयपुर",
    state: "राजस्थान",
    image: "https://images.unsplash.com/photo-1477587458883-47145fc74b5d?q=80&w=2070&auto=format&fit=crop",
    packageCount: 18,
    slug: "jaipur"
  },
  {
    name: "केरल",
    state: "केरल",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2070&auto=format&fit=crop",
    packageCount: 22,
    slug: "kerala"
  },
  {
    name: "लद्दाख",
    state: "जम्मू-कश्मीर",
    image: "https://images.unsplash.com/photo-1547149600-a6cdf8fce60c?q=80&w=1974&auto=format&fit=crop",
    packageCount: 8,
    slug: "ladakh"
  },
  {
    name: "अंडमान",
    state: "अंडमान निकोबार",
    image: "https://images.unsplash.com/photo-1544550579-3a3a8d8f1d6e?q=80&w=1974&auto=format&fit=crop",
    packageCount: 12,
    slug: "andaman"
  }
];

export default function Destinations() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            लोकप्रिय डेस्टिनेशन
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            भारत के सबसे खूबसूरत पर्यटन स्थल
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link key={dest.slug} href={`/destinations/${dest.slug}`}>
              <Card className="relative h-64 overflow-hidden group cursor-pointer">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{dest.state}</p>
                  <p className="text-sm">{dest.packageCount} पैकेज</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}