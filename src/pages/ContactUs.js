import { useState } from "react";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    if (!message.trim()) {
      setResponse("Please enter a message.");
      return;
    }

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setResponse("Thank you! Your feedback has been sent.");
        setEmail("");
        setMessage("");
      } else {
        setResponse("Something went wrong. Try again.");
      }
    } catch {
      setResponse("Network error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-black text-gray-200 flex flex-col items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4 drop-shadow-lg">
          Contact Us
        </h1>

        <p className="text-gray-300 mb-8 leading-relaxed">
          Have questions, suggestions, or feedback?  
          We’d love to hear from you!
        </p>

        {/* Card */}
        <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-red-500/20 hover:border-red-500/50 transition-all duration-300 text-left">

          <label className="block text-gray-300 mb-2 font-medium">
            Email (optional)
          </label>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-gray-300 focus:outline-none focus:border-red-500 transition mb-4"
          />

          <label className="block text-gray-300 mb-2 font-medium">
            Message
          </label>
          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 p-3 rounded-lg bg-black/40 border border-gray-700 text-gray-300 focus:outline-none focus:border-red-500 transition mb-6 resize-y"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-md"
          >
            Submit
          </button>

          {response && (
            <p
              className={`mt-4 text-center font-medium ${
                response.startsWith("Thank") ? "text-green-400" : "text-red-400"
              }`}
            >
              {response}
            </p>
          )}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          © 2025 Lewis University • Powered by ECaMS
        </p>
      </div>
    </div>
  );
}
