import React, { useState } from "react";
import { useParams } from "react-router-dom";
import config from "../config";

const ResetPassword = () => {
  const { uid, token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setLoading(true);
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(
        `${config.BASE_URL}/api/user/reset-password/${uid}/${token}/`,
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
        // Redirect to login page or any other page
        window.location.href = "/login";
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
