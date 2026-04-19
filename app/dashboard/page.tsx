import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f5f5"
    }}>
      {/* Navbar */}
      <nav style={{
        background: "white",
        padding: "1rem 2rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ color: "#333" }}>🚀 Dashboard</h2>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <span>Welcome, {session.user?.name || session.user?.email}!</span>
          <Link href="/api/auth/signout">
            <button style={{
              padding: "0.5rem 1rem",
              background: "#f44",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}>
              Logout
            </button>
          </Link>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div style={{
        maxWidth: "1200px",
        margin: "2rem auto",
        padding: "2rem"
      }}>
        <h1 style={{ marginBottom: "2rem" }}>My Bookings</h1>
        
        <div style={{
          background: "white",
          padding: "2rem",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <p style={{ color: "#666" }}>No bookings yet. Start your journey today!</p>
          <Link href="/packages">
            <button style={{
              marginTop: "1rem",
              padding: "0.8rem 2rem",
              background: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}>
              Browse Packages
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}