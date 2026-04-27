
"use client";

import { useState, useEffect } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const useLinks = () => {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/links/`)
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch(console.error);
  }, []);

  return links;
};