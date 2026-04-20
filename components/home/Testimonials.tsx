"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "राहुल शर्मा",
    location: "दिल्ली",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    comment: "मनाली ट्रेकिंग पैकेज बहुत शानदार था। गाइड बहुत अच्छे थे और होटल की सुविधाएं भी बेहतरीन।"
  },
  {
    name: "प्रिया सिंह",
    location: "मुंबई",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    comment: "गोवा बीच हॉलिडे यादगार रहा। सारी व्यवस्थाएं बहुत अच्छी थीं। अगली बार फिर बुक करूंगी।"
  },
  {
    name: "अमित कुमार",
    location: "बैंगलोर",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4,
    comment: "केरल हाउसबोट का अनुभव अद्भुत था। खाना और सर्विस दोनों शानदार।"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ग्राहक समीक्षा
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            हमारे खुश ग्राहकों के अनुभव
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}