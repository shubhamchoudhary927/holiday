"use client";

import Link from "next/link";

export default function Home() {
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
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "2rem" }}>✈️</span>
          <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
            Trip<span style={{ color: "#ff6b6b" }}>Book</span>
          </span>
        </div>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href="/">Home</Link>
          <Link href="/">Packages</Link>
          <Link href="/">Destinations</Link>
          <Link href="/">Contact</Link>

          {/* FIXED BUTTON */}
          <Link href="/login">
            <button style={{
              padding: "0.5rem 1.2rem",
              background: "linear-gradient(135deg,#667eea,#764ba2)",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "bold"
            }}>
              Login / Signup
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div style={{
        marginTop: "70px",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        padding: "5rem 2rem",
        textAlign: "center"
      }}>
        <h1>अपने सपनों की यात्रा बुक करें</h1>
        <p>1000+ गंतव्य • Best Price</p>
      </div>

      {/* Destinations */}
      <div style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          लोकप्रिय गंतव्य
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
          gap: "2rem"
        }}>
          {[
            { name: "मनाली", price: "₹100", image: "🏔️" },
            { name: "गोवा", price: "₹15,999", image: "🏖️" },
            { name: "केरल", price: "₹18,999", image: "🏝️" }
          ].map((dest, i) => {

            // ✅ IMPORTANT FIX
            const amount = dest.price.replace("₹", "").replace(/,/g, "");

            const upiLink = `upi://pay?pa=Q624421997@ybl&pn=TripBook&am=${amount}&cu=INR&tn=Booking for ${dest.name}`;

            return (
              <div key={i} style={{
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "4rem" }}>{dest.image}</div>

                <h3>{dest.name}</h3>
                <p>{dest.price}</p>

                {/* ✅ UPI BUTTON */}
                <a
                  href={upiLink}
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "0.6rem 1.2rem",
                    background: "#ff6b6b",
                    color: "white",
                    borderRadius: "5px",
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
        padding: "2rem",
        textAlign: "center"
      }}>
        <p>© 2026 TripBook</p>
      </footer>
    </div>
  );
}
