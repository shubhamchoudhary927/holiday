import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { notFound } from "next/navigation";

// डेस्टिनेशन डेटा (अगर डेटाबेस में नहीं है तो)
const destinationInfo = {
  manali: {
    name: "मनाली",
    state: "हिमाचल प्रदेश",
    description: "हिमालय की गोद में बसा मनाली एक खूबसूरत हिल स्टेशन है। यहाँ की बर्फ से ढकी पहाड़ियाँ, घने जंगल और बहती नदियाँ पर्यटकों को अपनी ओर आकर्षित करती हैं। सोलंग वैली, रोहतांग पास और हिडिम्बा मंदिर यहाँ के मुख्य आकर्षण हैं।",
    image: "https://images.unsplash.com/photo-1716824412752-47f8f65c8e88?q=80&w=1974&auto=format&fit=crop",
    packageCount: 15
  },
  goa: {
    name: "गोवा",
    state: "गोवा",
    description: "गोवा भारत का सबसे छोटा राज्य है, लेकिन यह अपने खूबसूरत समुद्र तटों, पुर्तगाली विरासत और जीवंत नाइटलाइफ के लिए दुनियाभर में प्रसिद्ध है। यहाँ के सुनहरे रेत के समुद्र तट, नारियल के पेड़ और पानी के खेल पर्यटकों को लुभाते हैं।",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3dfb?q=80&w=1974&auto=format&fit=crop",
    packageCount: 25
  },
  jaipur: {
    name: "जयपुर",
    state: "राजस्थान",
    description: "जयपुर, जिसे 'गुलाबी शहर' के नाम से जाना जाता है, राजस्थान की राजधानी है। यहाँ के भव्य किले, महल और रंगीन बाजार राजपूताना संस्कृति की झलक दिखाते हैं। आमेर किला, हवा महल और सिटी पैलेस प्रमुख आकर्षण हैं।",
    image: "https://images.unsplash.com/photo-1599661418261-2d541594fd6a?q=80&w=1974&auto=format&fit=crop",
    packageCount: 18
  },
  kerala: {
    name: "केरल",
    state: "केरल",
    description: "केरल को 'भगवान का अपना देश' कहा जाता है। यहाँ की हरी-भरी वादियाँ, शांत बैकवाटर्स और आयुर्वेदिक उपचार दुनियाभर में प्रसिद्ध हैं। अलेप्पी की हाउसबोट क्रूज और मुन्नार के चाय बागान अवश्य देखें।",
    image: "https://images.unsplash.com/photo-1602211844026-ee5138d5017f?q=80&w=1974&auto=format&fit=crop",
    packageCount: 22
  },
  ladakh: {
    name: "लद्दाख",
    state: "लद्दाख",
    description: "लद्दाख अपनी ऊंची पहाड़ियों, नीली झीलों और बौद्ध मठों के लिए प्रसिद्ध है। पैंगोंग झील, नुब्रा वैली और खारदुंग ला (दुनिया की सबसे ऊंची मोटरेबल रोड) यहाँ के मुख्य आकर्षण हैं।",
    image: "https://images.unsplash.com/photo-1597088759168-3774c13dd433?q=80&w=1974&auto=format&fit=crop",
    packageCount: 8
  },
  andaman: {
    name: "अंडमान",
    state: "अंडमान निकोबार",
    description: "अंडमान और निकोबार द्वीपसमूह अपने क्रिस्टल क्लियर पानी, सफेद रेत के समुद्र तटों और समृद्ध समुद्री जीवन के लिए प्रसिद्ध है। राधानगर बीच, सेलुलर जेल और स्कूबा डाइविंग यहाँ के मुख्य आकर्षण हैं।",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1974&auto=format&fit=crop",
    packageCount: 12
  }
};

export default async function DestinationPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // डेस्टिनेशन जानकारी लें
  const destination = destinationInfo[slug as keyof typeof destinationInfo];
  
  // अगर डेस्टिनेशन नहीं मिला तो 404 पेज दिखाएं
  if (!destination) {
    notFound();
  }

  // डेटाबेस से इस डेस्टिनेशन के पैकेज लें
  let packages = [];
  try {
    packages = await prisma.package.findMany({
      where: {
        destination: {
          contains: destination.name,
        },
      },
    });
  } catch (error) {
    console.error("Database error:", error);
    // अगर डेटाबेस कनेक्शन नहीं है तो खाली array भेजें
    packages = [];
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* हीरो सेक्शन - डेस्टिनेशन की बड़ी फोटो */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">{destination.name}</h1>
            <p className="text-xl md:text-2xl mb-2">{destination.state}</p>
            <p className="text-sm opacity-90">{destination.packageCount}+ पैकेज उपलब्ध</p>
          </div>
        </div>
      </div>

      {/* डेस्टिनेशन की जानकारी */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">{destination.name} के बारे में</h2>
          <p className="text-gray-700 leading-relaxed">{destination.description}</p>
        </div>

        {/* यहाँ के पैकेज */}
        <h2 className="text-2xl font-bold mb-6">{destination.name} में उपलब्ध पैकेज</h2>
        
        {packages.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500">अभी कोई पैकेज उपलब्ध नहीं है</p>
            <Link href="/packages">
              <Button className="mt-4 bg-orange-600 hover:bg-orange-700">
                सभी पैकेज देखें
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg: any) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={pkg.imageUrl}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
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
                    <span className="text-2xl font-bold text-orange-600">₹{pkg.price}</span>
                    <span className="text-gray-600">/व्यक्ति</span>
                  </div>
                  <Link href={`/packages/${pkg.id}`}>
                    <Button variant="outline">देखें</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}