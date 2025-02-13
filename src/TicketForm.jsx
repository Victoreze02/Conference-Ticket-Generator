import React, { useState, useEffect } from "react";

const TicketForm = ({ setTicketData }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatarUrl: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("ticketData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.avatarUrl) {
      alert("All fields are required");
      return;
    }
    localStorage.setItem("ticketData", JSON.stringify(formData));
    setTicketData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="url" name="avatarUrl" placeholder="Avatar URL" value={formData.avatarUrl} onChange={handleChange} required />
      <button type="submit">Generate Ticket</button>
    </form>
  );
};

export default TicketForm;