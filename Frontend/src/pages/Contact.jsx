import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user`, form);
      toast.success(res.data.message || "Our Team Will Contact You Soon !");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || "Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-100 px-4 py-10">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">Contact Us</h1>
        <p className="text-indigo-700 mb-10">
          Got questions? Reach out to us! We’re here to help you with any inquiries.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md space-y-6 border border-indigo-200"
        >
          <div>
            <label className="block mb-2 font-medium text-indigo-800">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-indigo-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-indigo-800">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-indigo-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-indigo-800">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-indigo-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-indigo-700 text-white py-3 rounded-md font-semibold transition-colors duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-800"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>

        <div className="mt-12 rounded-xl overflow-hidden shadow-md border border-indigo-200 bg-white">
          <iframe
            title="LearnSphere Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224344.8395975413!2d77.06889935689392!3d28.527487608733754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c5cf1c7b2d%3A0x29091f3dff29718f!2sDelhi!5e0!3m2!1sen!2sin!4v1684322442453!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
