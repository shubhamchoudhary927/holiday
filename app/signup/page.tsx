"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Password match check
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // API call
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/login?registered=true");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem"
    }}>
      <div style={{
        background: "white",
        padding: "2.5rem",
        borderRadius: "15px",
        width: "100%",
        maxWidth: "450px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{ 
          textAlign: "center", 
          marginBottom: "2rem",
          color: "#333",
          fontSize: "2rem"
        }}>
          Create Account ✨
        </h1>

        {error && (
          <div style={{
            background: "#fee",
            color: "#c00",
            padding: "0.75rem",
            borderRadius: "5px",
            marginBottom: "1rem",
            textAlign: "center"
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "0.5rem",
              color: "#555",
              fontWeight: "500"
            }}>
              Full Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                outline: "none",
                transition: "border 0.3s"
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "0.5rem",
              color: "#555",
              fontWeight: "500"
            }}>
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                outline: "none",
                transition: "border 0.3s"
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "0.5rem",
              color: "#555",
              fontWeight: "500"
            }}>
              Password
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                outline: "none",
                transition: "border 0.3s"
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "0.5rem",
              color: "#555",
              fontWeight: "500"
            }}>
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                outline: "none",
                transition: "border 0.3s"
              }}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "0.9rem",
              background: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "background 0.3s"
            }}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p style={{ 
          textAlign: "center", 
          marginTop: "1.5rem",
          color: "#666" 
        }}>
          Already have an account?{" "}
          <Link 
            href="/login"
            style={{
              color: "#667eea",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}