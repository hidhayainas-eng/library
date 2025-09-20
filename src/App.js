import React, { useState } from "react";
import UserList from "./components/UserList.js";
import Register from "./components/Register.js";
import Home from "./components/Home.js";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "register":
        return <Register />;
      case "userList":
        return <UserList />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setCurrentPage("home")}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              currentPage === "home"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("register")}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              currentPage === "register"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setCurrentPage("userList")}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              currentPage === "userList"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            User List
          </button>
        </div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
