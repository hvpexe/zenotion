import { useEffect, useState } from "react";

export default function useOrigin() {
  const [mouted, setMounted] = useState(false);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mouted) {
    return "";
  }

  return origin;
}
