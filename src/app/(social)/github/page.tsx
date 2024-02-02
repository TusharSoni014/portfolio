"use client";
import NeonLoading from "@/components/ui/NeonLoading/NeonLoading";
import { useEffect } from "react";

export default function Twitter() {
  useEffect(() => {
    window.location.href = "https://github.com/tusharsoni014";
  }, []);
  return (
    <div className="p-3 flex justify-center items-center flex-col gap-3">
      <p>Redirecting to Twitter...</p>
      <NeonLoading />
    </div>
  );
}
