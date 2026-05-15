
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function Login() {

  const { login, googleLogin } = useAuth();

  const router = useRouter();

  const handleLogin = async (e) => {

    e.preventDefault();

    const { email, password } = e.target.elements;

    try {

      await login(email.value, password.value);

      toast.success("Welcome Back!");

      router.push("/");

    } catch (err) {

      toast.error("Invalid Credentials");

    }
  };

  return (

    <section className="auth-section">

      <div className="auth-card">

        <h1 className="auth-title">
          Welcome Back
        </h1>

        <p className="auth-subtitle">
          Login to continue your Qurbani journey
        </p>

        <form
          onSubmit={handleLogin}
          className="auth-form"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="auth-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="auth-input"
            required
          />

          <button className="btn-primary auth-btn">
            Login
          </button>

        </form>

        <div className="auth-divider">
          OR
        </div>

        <button
          onClick={() =>
            googleLogin().then(() => router.push("/"))
          }
          className="google-btn"
        >
          Continue with Google
        </button>

        <div className="auth-footer">

         Have a account?

          <Link href="/register">
            Register
          </Link>

        </div>

      </div>

    </section>
  );
}

