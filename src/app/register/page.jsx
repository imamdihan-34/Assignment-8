"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register, googleLogin } = useAuth();

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const email = form.email.value;

    const photoURL = form.photoURL.value;

    const password = form.password.value;

    try {
      await register(name, email, photoURL, password);

      toast.success("Account Created Successfully!");

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <div>
          <span className="badge badge-gold mb-5">Join QurbaniMart</span>

          <h1 className="auth-title">Create Account</h1>

          <p className="auth-subtitle">Register to explore premium livestock</p>
        </div>

    

        <form onSubmit={handleRegister} className="auth-form">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="auth-input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="auth-input"
            required
          />

          <input
            type="text"
            name="photoURL"
            placeholder="Profile photo URL"
            className="auth-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Create password"
            className="auth-input"
            required
          />

          <button type="submit" className="btn-primary auth-btn">
            Register
          </button>
        </form>


        <div className="auth-divider">OR</div>

      

        <button
          onClick={() => googleLogin().then(() => router.push("/"))}
          className="google-btn"
        >
          Continue with Google
        </button>

        {/* FOOTER */}

        <div className="auth-footer">
          Already have an account? <Link href="/login">Login</Link>
        </div>
      </div>
    </section>
  );
}
