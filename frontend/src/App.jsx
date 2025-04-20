import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { VerificationEmailPage } from "./pages/VerificationEmailPage";
import { useAuthStore } from "./store/authStore";

function App() {
  const { logout, user } = -useAuthStore();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div>
      {user && <button onClick={handleLogout}>Logout</button>}
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<VerificationEmailPage />} />
      </Routes>
    </div>
  );
}

export default App;
