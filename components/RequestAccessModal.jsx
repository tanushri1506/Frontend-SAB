"use client";

import { useState } from "react";

export default function RequestAccessModal({
  isOpen,
  onClose,
  requestType,
  session,
}) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

  const handleRequest = async () => {
    if (!username) {
      alert("Enter username");
      return;
    }

    const email = `${username}@iitg.ac.in`;

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/api/request/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          type: requestType,
          session,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      alert("Request sent for approval");
      onClose();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[350px]">
        <h2 className="text-lg font-semibold mb-4">
          Request {requestType} Data
        </h2>

        <div className="flex border rounded overflow-hidden mb-3">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-1 py-2 outline-none"
          />
          <span className="bg-gray-100 py-2">@iitg.ac.in</span>
        </div>

        <button
          onClick={handleRequest}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Submitting..." : "Request Access"}
        </button>

        <button
          onClick={onClose}
          className="mt-3 text-sm text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}