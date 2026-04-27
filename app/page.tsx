import Link from "next/link";
import Image from "next/image";

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
          <Link href="/" style={{ color: "#333", textDecoration: "none" }}>Home</Link>
          <Link href="/" style={{ color: "#333", textDecoration: "none" }}>Packages</Link>
          <Link href="/" style={{ color: "#333", textDecoration: "none" }}>Destinations</Link>
          <Link href="/" style={{ color: "#333", textDecoration: "none" }}>Contact</Link>
          <Link href="/login">
            <button style={{
              padding: "0.5rem 1.5rem",
              background: "#ff6b6b",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}>
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button style={{
              padding: "0.5rem 1.5rem",
              background: "#333",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}>
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        marginTop: "70px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "5rem 2rem",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
          अपने सपनों की यात्रा बुक करें
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
          दुनिया भर के 1000+ गंतव्य • सबसे कम कीमत की गारंटी
        </p>
        
        {/* Search Bar */}
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "white",
          padding: "0.5rem",
          borderRadius: "50px",
          display: "flex",
          gap: "0.5rem"
        }}>
          <input
            type="text"
            placeholder="कहाँ जाना चाहते हैं?"
            style={{
              flex: 1,
              padding: "1rem",
              border: "none",
              outline: "none",
              borderRadius: "50px",
              fontSize: "1rem"
            }}
          />
          <button style={{
            padding: "1rem 2rem",
            background: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            खोजें 🔍
          </button>
        </div>
      </div>

      {/* Popular Destinations */}
      <div style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem", color: "#333" }}>
          लोकप्रिय गंतव्य
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {[
            { name: "मनाली", state: "हिमाचल प्रदेश", price: "₹12,999", image: "🏔️", rating: "4.8" },
            { name: "गोवा", state: "गोवा", price: "₹15,999", image: "🏖️", rating: "4.7" },
            { name: "केरल", state: "केरल", price: "₹18,999", image: "🏝️", rating: "4.9" },
            { name: "जयपुर", state: "राजस्थान", price: "₹9,999", image: "🏰", rating: "4.6" },
            { name: "लद्दाख", state: "लद्दाख", price: "₹24,999", image: "⛰️", rating: "4.9" },
            { name: "अंडमान", state: "अंडमान", price: "₹21,999", image: "🏝️", rating: "4.8" }
          ].map((dest, i) => (
            <div key={i} style={{
              background: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
              cursor: "pointer"
            }}>
              <div style={{
                height: "200px",
                background: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "5rem"
              }}>
                {dest.image}
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontSize: "1.3rem", color: "#333" }}>{dest.name}</h3>
                  <span style={{ background: "#ff6b6b", color: "white", padding: "0.2rem 0.5rem", borderRadius: "5px", fontSize: "0.8rem" }}>
                    ⭐ {dest.rating}
                  </span>
                </div>
                <p style={{ color: "#666", marginBottom: "1rem" }}>{dest.state}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333" }}>{dest.price}</span>
                  <span style={{ color: "#999" }}>/व्यक्ति</span>
                  <a
  href={`upi://pay?pa=Q624421997@ybl&pn=TripBook&am=${dest.price.replace("₹","")}&cu=INR&tn=Booking for ${dest.name}`}
  style={{
    padding: "0.5rem 1rem",
    background: "#ff6b6b",
    color: "white",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block"
  }}
>
  बुक करें
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={{ background: "#f8f9fa", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem", color: "#333" }}>
            हमें क्यों चुनें?
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem"
          }}>
            {[
              { icon: "💰", title: "कम कीमत", desc: "सबसे कम कीमत की गारंटी" },
              { icon: "🛡️", title: "सुरक्षित यात्रा", desc: "24/7 हेल्पलाइन सपोर्ट" },
              { icon: "⭐", title: "5000+ रिव्यू", desc: "खुश ग्राहकों के अनुभव" },
              { icon: "🔄", title: "फ्री कैंसलेशन", desc: "48 घंटे पहले फ्री कैंसलेशन" }
            ].map((item, i) => (
              <div key={i} style={{
                textAlign: "center",
                padding: "2rem",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
              }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#333" }}>{item.title}</h3>
                <p style={{ color: "#666" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem", color: "#333" }}>
          हमारे ग्राहक क्या कहते हैं
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {[
            { name: "राहुल शर्मा", place: "दिल्ली", review: "बहुत ही शानदार अनुभव! मनाली ट्रेकिंग पैकेज बहुत अच्छा था।", rating: 5 },
            { name: "प्रिया सिंह", place: "मुंबई", review: "गोवा बीच हॉलिडे यादगार रहा। सारी व्यवस्थाएं बहुत अच्छी थीं।", rating: 5 },
            { name: "अमित कुमार", place: "बैंगलोर", review: "केरल हाउसबोट का अनुभव अद्भुत था। जरूर जाएं।", rating: 4 }
          ].map((testimonial, i) => (
            <div key={i} style={{
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "#ff6b6b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.5rem"
                }}>
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem", color: "#333" }}>{testimonial.name}</h4>
                  <p style={{ color: "#666", fontSize: "0.9rem" }}>{testimonial.place}</p>
                </div>
              </div>
              <p style={{ color: "#555", marginBottom: "1rem", fontStyle: "italic" }}>"{testimonial.review}"</p>
              <div>
                {"⭐".repeat(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "4rem 2rem",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          अपनी अगली यात्रा आज ही बुक करें
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
          5000+ खुश ग्राहक | 100+ पैकेज | 50+ गंतव्य
        </p>
        <Link href="/signup">
          <button style={{
            padding: "1rem 3rem",
            fontSize: "1.2rem",
            background: "white",
            color: "#667eea",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}>
            अभी जॉइन करें 🚀
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer style={{
        background: "#333",
        color: "white",
        padding: "3rem 2rem",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>TripBook - आपका भरोसेमंद यात्रा साथी</p>
          <p style={{ color: "#999", marginBottom: "1rem" }}>© 2026 TripBook. All rights reserved.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
            <Link href="/privacy" style={{ color: "#999", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "#999", textDecoration: "none" }}>Terms of Service</Link>
            <Link href="/contact" style={{ color: "#999", textDecoration: "none" }}>Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
