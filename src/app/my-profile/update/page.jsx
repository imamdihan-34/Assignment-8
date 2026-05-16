"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import PrivateRoute from "../components/PrivateRoute";
import toast from "react-hot-toast";
import { FaArrowLeft, FaCamera } from "react-icons/fa";

function UpdateContent() {
  const { user, updateUserProfile } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", photoURL: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateUserProfile(form.name, form.photoURL);
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    } catch {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a4a2e 0%, #2d7a4f 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <Link
          href="/my-profile"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#a8c5b5",
            textDecoration: "none",
            marginBottom: "1.5rem",
            fontSize: "0.9rem",
          }}
        >
          <FaArrowLeft /> Back to Profile
        </Link>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
            {form.photoURL ? (
              <img
                src={form.photoURL}
                alt="Preview"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #c9972a",
                  marginBottom: "0.5rem",
                  display: "block",
                  margin: "0 auto 0.75rem",
                }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            ) : (
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "#c9972a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 0.75rem",
                }}
              >
                <FaCamera style={{ color: "white", fontSize: "1.5rem" }} />
              </div>
            )}
            <h2
              style={{
                color: "#1a4a2e",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}
            >
              Update Information
            </h2>
            <p style={{ color: "#8a8a8a", fontSize: "0.85rem" }}>
              Update your name and profile photo
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.4rem",
                  fontWeight: "600",
                  fontSize: "0.88rem",
                  color: "#1a4a2e",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.4rem",
                  fontWeight: "600",
                  fontSize: "0.88rem",
                  color: "#1a4a2e",
                }}
              >
                Photo URL
              </label>
              <input
                type="url"
                className="form-input"
                placeholder="https://your-photo-url.com"
                value={form.photoURL}
                onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
              />
              <p
                style={{
                  color: "#8a8a8a",
                  fontSize: "0.78rem",
                  marginTop: "0.3rem",
                }}
              >
                Paste a direct image URL for your profile photo
              </p>
            </div>

            <button
              type="submit"
              className="btn-gold"
              disabled={saving}
              style={{
                width: "100%",
                padding: "0.85rem",
                fontSize: "1rem",
                opacity: saving ? 0.7 : 1,
                cursor: saving ? "not-allowed" : "pointer",
              }}
            >
              {saving ? "Saving..." : "Update Information"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function UpdateProfilePage() {
  return (
    <PrivateRoute>
      <UpdateContent />
    </PrivateRoute>
  );
}
