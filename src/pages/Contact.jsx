import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Replace this with actual email handling logic (e.g., EmailJS, backend, etc.)
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-4 py-16 font-orbitron">
      <h2 className="text-center text-5xl font-bold mb-20 font-orbitron">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl  rounded-xl shadow-[0_0_40px_#FFD70044] p-8 space-y-6 border border-yellow-400"
      >
        <div>
          <label htmlFor="name" className="text-gold block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-black border border-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-gold block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-black border border-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-gold block mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-black border border-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gold text-black font-semibold py-2 rounded hover:bg-white hover:text-yellow-500 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
