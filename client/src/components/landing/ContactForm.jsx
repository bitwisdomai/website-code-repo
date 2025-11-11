import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate API submission here (Express/MongoDB)
  };

  return (
    <section className=" bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 font-orbitron">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-cyan-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-cyan-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-transparent border border-cyan-400 rounded-md px-3 py-2 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">I'm Interested In</option>
              <option value="licensing">Licensing</option>
              <option value="partnership">Partnership</option>
              <option value="demo">Product Demo</option>
              <option value="support">Support</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border border-cyan-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-transparent border border-cyan-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="submit"
              className="bg-cyan-400 text-black font-semibold px-5 py-2 rounded-md hover:bg-cyan-300 transition"
            >
              Request Contact
            </button>
            <button
              type="button"
              className="border border-cyan-400 text-white font-semibold px-5 py-2 rounded-md hover:bg-cyan-400 hover:text-black transition"
            >
              Schedule a Call
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
