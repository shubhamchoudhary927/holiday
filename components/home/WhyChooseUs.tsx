"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Wallet, 
  Headphones, 
  ThumbsUp,
  Clock,
  Star 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "सुरक्षित यात्रा",
    description: "हर पैकेज में सुरक्षा का विशेष ध्यान"
  },
  {
    icon: Wallet,
    title: "कम कीमत की गारंटी",
    description: "सबसे कम कीमत पर बेहतरीन सर्विस"
  },
  {
    icon: Headphones,
    title: "24/7 सहायता",
    description: "कभी भी, कहीं भी हेल्पलाइन सपोर्ट"
  },
  {
    icon: ThumbsUp,
    title: "बेस्ट प्राइस",
    description: "100% कीमत वापसी की गारंटी"
  },
  {
    icon: Clock,
    title: "फ्लेक्सिबल बुकिंग",
    description: "आखिरी समय में भी बदलाव की सुविधा"
  },
  {
    icon: Star,
    title: "5000+ रिव्यू",
    description: "हमारे खुश ग्राहकों के अनुभव"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            क्यों चुनें हमें?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            हम आपकी यात्रा को खास बनाने के लिए प्रतिबद्ध हैं
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}