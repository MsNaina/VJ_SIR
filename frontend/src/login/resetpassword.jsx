import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { uid, token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/user/reset-password/${uid}/${token}/`,
        {
          method: "POST",
          body: JSON.stringify({ password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert("Password reset successfully!");
        // Optionally, redirect to login or another page
      } else {
        alert(data.detail || "Failed to reset password.");
      }
    } catch (error) {
      alert("Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ResetPassword">
      <h2>Reset Your Password</h2>
      <div>
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button onClick={handleResetPassword} disabled={loading}>
        {loading ? "Resetting Password..." : "Reset Password"}
      </button>
    </section>
  );
};

export default ResetPassword;
