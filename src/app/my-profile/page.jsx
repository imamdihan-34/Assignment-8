"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import PrivateRoute from "@/app/components/PrivateRoute";
import { FaUser, FaEnvelope, FaEdit, FaShieldAlt } from "react-icons/fa";
import toast from "react-hot-toast";

function ProfileContent() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [imgError, setImgError] = useState(false);

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    router.push("/");
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a4a2e, #2d7a4f)",
          padding: "3rem 1.5rem 5rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#fdf6e3", fontSize: "2rem", fontWeight: "800" }}>
          My Profile
        </h1>
        <p style={{ color: "#a8c5b5" }}>Manage your QurbaniMart account</p>
      </div>

      <div
        style={{
          maxWidth: "640px",
          margin: "-3rem auto 0",
          padding: "0 1.5rem 3rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 40px rgba(26,74,46,0.12)",
            border: "1px solid #e8ddc4",
            overflow: "hidden",
          }}
        >
          {/* Avatar Section */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a4a2e, #2d7a4f)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {user.photoURL && !imgError ? (
              <img
                src={user.photoURL}
                alt="Avatar"
                onError={() => setImgError(true)}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #c9972a",
                  marginBottom: "1rem",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "#c9972a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  color: "white",
                  fontWeight: "700",
                  border: "4px solid #e8b84b",
                  marginBottom: "1rem",
                }}
              >
                {(user.displayName || user.email || "U")[0].toUpperCase()}
              </div>
            )}
            <h2
              style={{
                color: "#fdf6e3",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}
            >
              {user.displayName || "User"}
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                marginTop: "0.4rem",
              }}
            >
              <FaShieldAlt style={{ color: "#c9972a", fontSize: "0.8rem" }} />
              <span style={{ color: "#a8c5b5", fontSize: "0.82rem" }}>
                Verified Member
              </span>
            </div>
          </div>

          <div style={{ padding: "2rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  background: "var(--cream)",
                  borderRadius: "10px",
                  border: "1px solid #e8ddc4",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(45,122,79,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaUser style={{ color: "#2d7a4f" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#8a8a8a",
                      marginBottom: "0.1rem",
                    }}
                  >
                    Full Name
                  </div>
                  <div style={{ fontWeight: "600", color: "#1a4a2e" }}>
                    {user.displayName || "Not set"}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  background: "var(--cream)",
                  borderRadius: "10px",
                  border: "1px solid #e8ddc4",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(45,122,79,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaEnvelope style={{ color: "#2d7a4f" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#8a8a8a",
                      marginBottom: "0.1rem",
                    }}
                  >
                    Email Address
                  </div>
                  <div style={{ fontWeight: "600", color: "#1a4a2e" }}>
                    {user.email}
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <Link
                href="/my-profile/update"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "linear-gradient(135deg, #1a4a2e, #2d7a4f)",
                  color: "white",
                  padding: "0.85rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.92rem",
                }}
              >
                <FaEdit /> Update Info
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  flex: 1,
                  background: "none",
                  border: "2px solid #e53e3e",
                  color: "#e53e3e",
                  padding: "0.85rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontFamily: "Georgia, serif",
                  fontWeight: "600",
                  fontSize: "0.92rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e53e3e";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.color = "#e53e3e";
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyProfilePage() {
  return (
    <PrivateRoute>
      <ProfileContent />
    </PrivateRoute>
  );
}
