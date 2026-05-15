"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Register() {
  const { registerUser, updateUser, googleSignIn } = useAuth();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    try {
      await registerUser(email, password);
      await updateUser(name, photo);
      toast.success("Account created successfully!");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="text-2xl font-bold text-center">Create Account</h2>
          <div className="form-control">
            <label className="label">Name:</label>
            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">Email</label>
            <input name="email" type="email" placeholder="Mail" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">Photo URL</label>
            <input name="photo" type="text" placeholder="https://..." className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">Password</label>
            <input name="password" type="password" placeholder="12345" className="input input-bordered" required />
          </div>
          <button className="btn btn-primary mt-4">Register</button>
          <div className="divider">OR</div>
          <button type="button" onClick={() => googleSignIn().then(() => router.push("/"))} className="btn btn-outline">Google Login</button>
        </form>
      </div>
    </div>
  );
}