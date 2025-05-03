import React from "react";

export default function Contacts() {
  const [result, setResult] = React.useState("");

  const Message = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    const accessKey = '25e5b783-4aae-4a24-b547-4b32f5c405fe';

    if (!accessKey) {
      console.error("API Key not found!");
      setResult("API Key Error. Check configuration.");
      return;
    }

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message was submitted successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-page bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
            Get in Touch
          </h1>
          <hr className="mt-4 border-green-500 w-1/4 mx-auto" />
        </div>

        <form
          onSubmit={Message}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
        >
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="Your Name"
              required
              autoComplete="yes"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Your Email"
              required
              autoComplete="yes"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message Field */}
          <textarea
            name="Message"
            id="message"
            placeholder="Your message here..."
            required
            className="p-3 w-full rounded-lg resize-none bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
          ></textarea>

          {/* Status Message */}
          <div className="text-center text-sm text-green-500">
            {result}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
