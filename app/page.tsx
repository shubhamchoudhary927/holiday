"use client";

import Link from "next/link";
import RazorpayButton from "@/components/RazorpayButton";

export default function Home() {
  const packages = [
    { name: "मनाली", price: "₹10,999", image: "🏔️" },
    { name: "गोवा", price: "₹15,999", image: "🏖️" },
    { name: "केरल", price: "₹18,999", image: "🏝️" },
    { name: "जयपुर", price: "₹9,999", image: "🏰" },
    { name: "लद्दाख", price: "₹24,999", image: "⛰️" },
    { name: "अंडमान", price: "₹21,999", image: "🏝️" },
  ];

  // Your Razorpay.me payment link
  const paymentLink = "https://razorpay.me/@shyam7910";

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "1rem 2rem",
          background: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <h2>✈️ TripBook</h2>

        <Link href="/login">
          <button
            style={{
              padding: "0.5rem 1.2rem",
              background: "linear-gradient(135deg,#667eea,#764ba2)",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
            }}
          >
            Login / Signup
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          marginTop: "70px",
          background: "linear-gradient(135deg,#667eea,#764ba2)",
          color: "white",
          padding: "5rem 2rem",
          textAlign: "center",
        }}
      >
        <h1>अपने सपनों की यात्रा बुक करें</h1>
        <p>Best Travel Deals • Secure Payment</p>
      </div>

      {/* Packages */}
      <div
        style={{
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          लोकप्रिय पैकेज
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "2rem",
          }}
        >
          {packages.map((pkg, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "4rem" }}>{pkg.image}</div>

              <h3>{pkg.name}</h3>

              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                }}
              >
                {pkg.price}
              </p>

              {/* Razorpay Embedded Payment Button */}
              <div style={{ marginTop: "1rem" }}>
                <RazorpayButton />
              </div>

              {/* Direct Payment Link */}
              <div style={{ marginTop: "1rem" }}>
                <a
                  href={paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "0.7rem 1.5rem",
                    background: "#2ecc71",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  💳 Pay via Razorpay.me
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          background: "#333",
          color: "white",
          textAlign: "center",
          padding: "2rem",
          marginTop: "3rem",
        }}
      >
        <p>
          © 2026 TripBook | Secure Payments via [Razorpay](https://razorpay.com?utm_source=chatgpt.com)
        </p>
      </footer>
    </div>
  );
}