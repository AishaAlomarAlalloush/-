import React, { useState } from "react";
import "./LoginPage.css"; // we'll style separately

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Syrian phone validation (+963 or starting with 09)
    const syrianPhoneRegex = /^(\+9639\d{8}|09\d{8})$/;
    if (!syrianPhoneRegex.test(phone)) {
      setError("أدخل رقم سوري حقيقي!");
      return;
    }

    try {
      const response = await fetch("https://your-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      });

      if (!response.ok) {
        alert("تم تسجيل الدخول بنجاح");
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token); // store token
      alert("تم تسجيل الدخول بنجاح");
      // redirect user, e.g. window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <a href="http://localhost:5173/" class="logoLogin">ورتّـل</a>
      <div className="login-card">
        <h2>أهلا بكَ في نادي ورتّل</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="رقم هاتف سوري"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="تسجيل الدخول">تسجيل</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;