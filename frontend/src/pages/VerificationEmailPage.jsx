import { useState } from "react";
import VerificationInput from "react-verification-input";
import { useAuthStore } from "../store/authStore";

export const VerificationEmailPage = () => {
  const [value, setValue] = useState("");
  const [verifyMessage, setVerifyMessage] = useState(
    "Awaiting verification...."
  );
  const { verifyEmail, isLoading, error } = useAuthStore();

  const handleSubmit = async () => {
    await verifyEmail(value);
    if (!error && !isLoading) {
      setVerifyMessage("Your email has been verified");
    }
  };

  return (
    <div className="space-y-2 flex flex-col w-full mx-auto justify-center">
      <h2 className="text-2xl font-bold mb-6 text-center">Verify Your Email</h2>
      <VerificationInput value={value} onChange={(value) => setValue(value)} />
      <div className="text-center text-sm">
        {value === "" ? (
          <>Enter your verification email code,</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
      <button onClick={handleSubmit}>Verify email now</button>
      <p>{verifyMessage}</p>
    </div>
  );
};
