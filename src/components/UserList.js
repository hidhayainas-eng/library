import React, { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { collection, onSnapshot } from "firebase/firestore";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (querySnapshot) => {
      const userData = [];
      querySnapshot.forEach((doc) => {
        userData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(userData);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // Filter users based on the search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center p-6 text-gray-600">
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading users...
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center p-6 text-gray-600">
        No registered users found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Registered Users</h2>
      {/* Search Input Field */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Phone</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {/* Render filteredUsers instead of users */}
          {filteredUsers.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {user.name}
              </td>
              <td className="py-3 px-6 text-left">{user.email}</td>
              <td className="py-3 px-6 text-left">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
