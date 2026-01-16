import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!email.endsWith("@mail.jiit.ac.in")) {
      setError("Only JIIT college email IDs are allowed");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

     try {
      await API.post("/api/auth/register", {
        name,
        email,
        password,
        enrollment: email.split("@")[0],
      });

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Sign Up for <span className="text-red-500">FoundIt</span>
        </h2>

        {error && (
          <p className="bg-red-500/20 text-red-400 text-sm p-2 rounded mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-red-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">College Email</label>
            <input
              type="email"
              placeholder="enrollment@mail.jiit.ac.in"
              className="w-full px-3 py-2 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-red-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-400 cursor-pointer"
          >
            Login
          </span>
        </p>

        <p
          onClick={() => navigate("/")}
          className="text-center text-sm mt-3 text-gray-500 cursor-pointer hover:underline"
        >
          ← Back to Home
        </p>
      </div>
    </div>
  );
}

export default Signup;
