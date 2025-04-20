import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { VerificationEmailPage } from "./pages/VerificationEmailPage";

function App() {
  return (
    <div>
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
