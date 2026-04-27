"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export const getData = async (endpoint) => {
  const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
};

// Custom hook to fetch DPPC members
export const useDPPC = () => {
  const [DPPC, setDPPC] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData("dppc")
      .then((team) =>
        setDPPC(
          team.map((m) => ({
            name: m.name || "",
            post: m.post || "",
            phone: m.phone || "",
            email: m.email || "",
            linkedin: m.linkedin || "",
            extra_por: m.extra_por,
            Photo: m.photo ? (
              <Image
                src={m.photo}
                alt={m.name}
                width={200}
                height={200}
                className="object-cover"
              />
            ) : null,
          }))
        )
      )
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { DPPC, loading, error };
};

// Custom hook to fetch CPPC members
export const useCPPC = () => {
  const [CPPC, setCPPC] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData("cppc")
      .then((team) =>
        setCPPC(
          team.map((m) => ({
            name: m.name || "",
            post: m.post || "",
            phone: m.phone || "",
            email: m.email || "",
            linkedin: m.linkedin || "",
            extra_por: m.extra_por,
            Photo: m.photo ? (
              <Image
                src={m.photo}
                alt={m.name}
                width={200}
                height={200}
                className="object-cover"
              />
            ) : null,
          }))
        )
      )
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { CPPC, loading, error };
};

// Custom hook to fetch SPPC members
export const useSPPC = () => {
  const [SPPC, setSPPC] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData("sppc")
      .then((team) =>
        setSPPC(
          team.map((m) => ({
            name: m.name || "",
            post: m.post || "",
            phone: m.phone || "",
            email: m.email || "",
            linkedin: m.linkedin || "",
            extra_por: m.extra_por,
            Photo: m.photo ? (
              <Image
                src={m.photo}
                alt={m.name}
                width={200}
                height={200}
                className="object-cover"
              />
            ) : null,
          }))
        )
      )
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { SPPC, loading, error };
};

// Custom hook to fetch Doctoral Representatives
export const useDoctoralRep = () => {
  const [REP, setREP] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData("council")
      .then((team) =>
        setREP(
          team
            .filter((m) => m.post?.includes("Doctoral Representative"))
            .map((m) => ({
              name: m.name || "",
              post: m.post || "",
              phone: m.phone || "",
              email: m.email || "",
              linkedin: m.linkedin || "",
              Photo: m.photo ? (
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              ) : null,
            }))
        )
      )
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { REP, loading, error };
};
