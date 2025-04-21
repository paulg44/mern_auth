import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useParams } from "react-router-dom";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const { resetPassword, message } = useAuthStore();

  async function handleResetPassword(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
    await resetPassword(token, password);
  }

  return (
    <div>
      <h1>Reset Password</h1>
      <p>Enter your new password</p>
      <form onSubmit={handleResetPassword}>
        <input
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {message && <p className="text-sm text-green-500">{message}</p>}
        <button type="submit" className="bg-blue-500">
          Reset Password
        </button>
      </form>
      <button type="button">Back to Login</button>
    </div>
  );
};

export default ResetPasswordPage;
