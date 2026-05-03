"use client";

import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";

export default function Home() {

  const packages = [
    { name: "मनाली", price: "₹10,999", image: "🏔️" },
    { name: "गोवा", price: "₹15,999", image: "🏖️" },
    { name: "केरल", price: "₹18,999", image: "🏝️" },
    { name: "जयपुर", price: "₹9,999", image: "🏰" },
    { name: "लद्दाख", price: "₹24,999", image: "⛰️" },
    { name: "अंडमान", price: "₹21,999", image: "🏝️" }
  ];

  return (
    <div>

      {/* Navbar */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1rem 2rem",
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000
      }}>
        <h2>✈️ TripBook</h2>

        <Link href="/login">
          <button style={{
            padding: "0.5rem 1.2rem",
            background: "linear-gradient(135deg,#667eea,#764ba2)",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer"
          }}>
            Login / Signup
          </button>
        </Link>
      </nav>

      {/* Hero */}
      <div style={{
        marginTop: "70px",
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        color: "white",
        padding: "5rem 2rem",
        textAlign: "center"
      }}>
        <h1>अपने सपनों की यात्रा बुक करें</h1>
        <p>Best Travel Deals • Secure Payment</p>
      </div>

      {/* Packages */}
      <div style={{
        padding: "4rem 2rem",
        maxWidth: "1200px",
        margin: "auto"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          लोकप्रिय पैकेज
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "2rem"
        }}>
          {packages.map((pkg, i) => {

            const amount = pkg.price.replace("₹", "").replace(/,/g, "");

            const upiLink = `upi://pay?pa=Q624421997@ybl&pn=TripBook&am=${amount}&cu=INR&tn=Booking for ${pkg.name}`;

            return (
              <div key={i} style={{
                background: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}>
                <div style={{ fontSize: "4rem" }}>{pkg.image}</div>

                <h3>{pkg.name}</h3>
                <p style={{ fontWeight: "bold" }}>{pkg.price}</p>

                {/* QR CODE */}
                <QRCodeCanvas value={upiLink} size={140} />

                <p style={{ fontSize: "0.8rem", color: "#666" }}>
                  Scan & Pay
                </p>

                {/* BUTTON */}
                <a
                  href={upiLink}
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "0.6rem 1.5rem",
                    background: "#ff6b6b",
                    color: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "bold"
                  }}
                >
                  Pay Now
                </a>

              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: "#333",
        color: "white",
        textAlign: "center",
        padding: "2rem"
      }}>
        <p>© 2026 TripBook | Secure UPI Payments</p>
      </footer>

    </div>
  );
}