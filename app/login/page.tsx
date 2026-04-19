"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/dashboard");
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
        maxWidth: "400px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{ 
          textAlign: "center", 
          marginBottom: "2rem",
          color: "#333",
          fontSize: "2rem"
        }}>
          Welcome Back! 👋
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

          <div style={{ marginBottom: "1.5rem" }}>
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
              placeholder="Enter your password"
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

          <div style={{ 
            textAlign: "right", 
            marginBottom: "1.5rem" 
          }}>
            <Link 
              href="/forgot-password"
              style={{
                color: "#667eea",
                textDecoration: "none",
                fontSize: "0.9rem"
              }}
            >
              Forgot password?
            </Link>
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={{ 
          textAlign: "center", 
          marginTop: "1.5rem",
          color: "#666" 
        }}>
          Don't have an account?{" "}
          <Link 
            href="/signup"
            style={{
              color: "#667eea",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}