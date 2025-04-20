import React from "react";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };
  return (
    <div className="flex-col  items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>
      <form onSubmit={handleLogIn} className="space-y-4 text-center">
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-90 bg-blue-600" disabled={isLoading}>
          {isLoading ? "Loading..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
