"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Button = (props: any) => <button {...props} />;
const Card = (props: any) => <div {...props} />;
const CardContent = (props: any) => <div {...props} />;

export default function CheckoutPage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/create-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          packageId: params.id,
          travelDate: searchParams.get("date"),
          people: parseInt(searchParams.get("people") || "1"),
          userId: "user-id-here",
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Booking Successful ✅");
      } else {
        alert("Booking Failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <Card>
        <CardContent className="p-6 space-y-4">
          <p>Package ID: {params.id}</p>
          <p>Date: {searchParams.get("date")}</p>
          <p>People: {searchParams.get("people")}</p>

          <Button
            onClick={handleBooking}
            disabled={loading}
            className="w-full bg-black text-white p-2 rounded"
          >
            {loading ? "Processing..." : "Confirm Booking"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}