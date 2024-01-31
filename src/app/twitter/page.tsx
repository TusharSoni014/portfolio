"use client";
import { useEffect } from "react";

export default function Twitter() {
  useEffect(() => {
    window.location.href = "https://twitter.com/TusharSoni014";
  }, []);
  return <div>Redirecting to Twitter...</div>;
}
