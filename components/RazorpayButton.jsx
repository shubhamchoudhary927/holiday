"use client";

import { useEffect, useRef } from "react";

export default function RazorpayButton() {
  const formRef = useRef(null);

  useEffect(() => {
    if (!formRef.current) return;

    // Existing content remove करें
    formRef.current.innerHTML = "";

    // Razorpay script create करें
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute("data-payment_button_id", "pl_Sn9SGS3c4XspbR");

    formRef.current.appendChild(script);
  }, []);

  return <form ref={formRef}></form>;
}