"use client";
import { useState } from "react";
const ShareLink = () => {
  const [copied, setCopied] = useState(false);
  const handleclick = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <button
      onClick={handleclick}
      className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-2"
    >
      {!copied ? "Share Link" : "Copied Link"}
    </button>
  );
};

export default ShareLink;
