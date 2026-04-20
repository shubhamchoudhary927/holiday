"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Package {
  id: string;
  name: string;
  description: string;
  destination: string;
  price: number;
  duration: number;
  imageUrl: string;
  maxPeople: number;
}

export default function FeaturedPackages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // यहाँ API कॉल करेंगे पैकेज लाने के लिए
    const fetchPackages = async () => {
      try {
        const response = await fetch('/api/packages/featured');
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            लोकप्रिय पैकेज
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-300 rounded-t-lg" />
                <CardContent className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-300 rounded w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            लोकप्रिय पैकेज
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            हमारे सबसे ज्यादा बुक किए जाने वाले हॉलिडे पैकेजेस
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={pkg.imageUrl}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-orange-600">
                  {pkg.duration} दिन
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{pkg.destination}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 line-clamp-2">{pkg.description}</p>
                
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration} दिन</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>अधिकतम {pkg.maxPeople} लोग</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.5</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-orange-600">
                    ₹{pkg.price}
                  </span>
                  <span className="text-gray-600">/व्यक्ति</span>
                </div>
                <Link href={`/packages/${pkg.id}`}>
                  <Button variant="outline">देखें</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/packages">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              सभी पैकेज देखें
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}