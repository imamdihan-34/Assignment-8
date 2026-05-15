
"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import toast from "react-hot-toast";
import { FaBars, FaTimes, FaMosque } from "react-icons/fa";
 
export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
 
  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    setMenuOpen(false);
  };
 
  return (
    <nav
      style={{
        background: "linear-gradient(135deg, #1a4a2e 0%, #2d7a4f 100%)",
        boxShadow: "0 2px 20px rgba(26,74,46,0.3)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
     
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}
        >
          <FaMosque style={{ color: "#c9972a", fontSize: "1.8rem" }} />
          <div>
            <div
              style={{
                color: "#fdf6e3",
                fontWeight: "700",
                fontSize: "1.2rem",
                letterSpacing: "0.05em",
                lineHeight: 1,
              }}
            >
              QurbaniMart
            </div>
            <div
              style={{
                color: "#c9972a",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Premium Livestock
            </div>
          </div>
        </Link>
 
        <div
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          className="hidden md:flex"
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/animals">All Animals</NavLink>
          {user && <NavLink href="/my-profile">My Profile</NavLink>}
        </div>
 
      
        <div
          style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          className="hidden md:flex"
        >
          {user ? (
            <>
              <Link href="/my-profile" title={user.displayName || "Profile"}>
                {user.photoURL && !imgError ? (
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    onError={() => setImgError(true)}
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      border: "2px solid #c9972a",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: "#c9972a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "700",
                      fontSize: "1rem",
                      border: "2px solid #e8b84b",
                    }}
                  >
                    {(user.displayName || user.email || "U")[0].toUpperCase()}
                  </div>
                )}
              </Link>
              <button
                onClick={handleLogout}
                className="btn-gold"
                style={{ fontSize: "0.8rem", padding: "0.5rem 1.2rem" }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="btn-outline"
                style={{
                  color: "#fdf6e3",
                  borderColor: "#fdf6e3",
                  padding: "0.5rem 1.2rem",
                  fontSize: "0.9rem",
                }}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="btn-gold"
                style={{ padding: "0.5rem 1.2rem", fontSize: "0.9rem" }}
              >
                Register
              </Link>
            </>
          )}
        </div>
 

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#fdf6e3",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          className="md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
 
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "#1a4a2e",
            borderTop: "1px solid rgba(201,151,42,0.3)",
            padding: "1rem 1.5rem",
          }}
          className="md:hidden animate__animated animate__fadeIn"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <MobileLink href="/" onClick={() => setMenuOpen(false)}>Home</MobileLink>
            <MobileLink href="/animals" onClick={() => setMenuOpen(false)}>All Animals</MobileLink>
            {user && (
              <MobileLink href="/my-profile" onClick={() => setMenuOpen(false)}>My Profile</MobileLink>
            )}
            <div style={{ height: "1px", background: "rgba(201,151,42,0.3)", margin: "0.5rem 0" }} />
            {user ? (
              <button
                onClick={handleLogout}
                style={{
                  color: "#e8b84b",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontFamily: "Georgia, serif",
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <MobileLink href="/login" onClick={() => setMenuOpen(false)}>Login</MobileLink>
                <MobileLink href="/register" onClick={() => setMenuOpen(false)}>Register</MobileLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
 
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      style={{
        color: "#fdf6e3",
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "0.95rem",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#e8b84b")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#fdf6e3")}
    >
      {children}
    </Link>
  );
}
 
function MobileLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{ color: "#fdf6e3", textDecoration: "none", fontSize: "1rem", display: "block", padding: "0.25rem 0" }}
    >
      {children}
    </Link>
  );
}