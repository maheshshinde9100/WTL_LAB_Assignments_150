import { useState } from "react";
import './style.css';

const Assignment07 = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState("");
  const emailRegex = /.+@.+\..+/;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setStatus("All fields are required!");
    } else if (!emailRegex.test(form.email)) {
      setStatus("Invalid email format!");
    } else {
      setStatus("Registration Successful!");
      console.log("User Registered:", form);
      setForm({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="form-box">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          placeholder="Full Name"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={form.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
      <p className="status">{status}</p>
    </div>
  );
};

export default Assignment07;
