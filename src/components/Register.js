import React, { useState } from "react";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");
    setIsError(false);
    try {
      await addDoc(collection(db, "users"), {
        name,
        email,
        phone,
        timestamp: new Date(),
      });
      setMessage("Registration successful!");
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      console.error("Error adding document: ", err);
      setMessage("Error submitting form. Check the console for details.");
      setIsError(true);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="w-full">
        {message && (
          <div
            className={`p-3 mb-4 rounded-lg text-center font-medium ${
              isError
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
