import { useState } from "react";
import { useAuthStore } from "../store/authStore";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword, message } = useAuthStore();

  async function handleForgotPassword(e) {
    e.preventDefault();
    await forgotPassword(email);
  }

  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Enter your email to reset password</p>
      <form onSubmit={handleForgotPassword}>
        <input
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="bg-blue-500">
          Reset Password
        </button>
      </form>
      {message && <p className="text-sm text-green-500">{message}</p>}
      <button>Back to Login</button>
    </div>
  );
};

export default ForgotPasswordPage;
