import React, { useState } from "react";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser"; // FEAT: EmailJS library imported

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setLoading(true);

    // Dynamic parameters mapping to your EmailJS Template variables
    const templateParams = {
      email: email, // This matches {{email}} in your EmailJS dashboard template
    };

    // CRITICAL: Put your real keys here from EmailJS Dashboard
    const SERVICE_ID = "service_7bk4z0b"; 
    const TEMPLATE_ID = "template_nryxu8t";
    const PUBLIC_KEY = "ahahcV8EvJ3hU83k0";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus({ 
          type: "success", 
          message: "Thank you for subscribe." 
        });
        setEmail(""); // Clears the field on success
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus({ 
          type: "error", 
          message: "Something went wrong. Please try again." 
        });
      })
      .finally(() => {
        setLoading(false);
        // Automatically hide the alert message after 4 seconds
        setTimeout(() => setStatus({ type: "", message: "" }), 4000);
      });
  };

  return (
    <section className="py-16 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-14">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left">

              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Mail className="text-orange-500" size={32} />
              </div>

              <span className="text-orange-500 uppercase tracking-widest font-semibold">
                Newsletter
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold mt-3">
                Stay Updated
                <span className="text-orange-500"> With Healthy Meals</span>
              </h2>

              <p className="text-gray-500 mt-5 leading-8">
                Subscribe to receive healthy recipes, exclusive offers,
                discounts and our latest menu updates directly in your inbox.
              </p>

            </div>

            {/* Right Interactive Area */}
            <div>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={loading}
                  className="flex-1 border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500 disabled:bg-gray-100"
                />

                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition duration-300 font-semibold active:scale-[0.98] disabled:bg-orange-300 elements-center"
                >
                  {loading ? "Sending..." : "Subscribe"}
                </button>

              </form>

              {/* Dynamic Success/Error message banner */}
              {status.message && (
                <p className={`text-sm mt-3 font-medium text-center sm:text-left ${
                  status.type === "success" ? "text-emerald-600" : "text-rose-500"
                }`}>
                  {status.message}
                </p>
              )}

              <p className="text-gray-400 text-sm mt-4 text-center sm:text-left">
                We care about your privacy. No spam, ever.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;