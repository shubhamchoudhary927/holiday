import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    // वेबहुक सिग्नेचर वेरिफाई करें
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  // पेमेंट सक्सेस इवेंट हैंडल करें
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    // बुकिंग स्टेटस अपडेट करें
    await prisma.booking.update({
      where: {
        paymentIntentId: paymentIntent.id,
      },
      data: {
        status: "confirmed",
      },
    });

    // यहां आप कन्फर्मेशन ईमेल भेज सकते हैं
  }

  return NextResponse.json({ received: true });
}