import { useState } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  help: string;
}

export default function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitContactForm = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("https://dashboard.jolojolo.com/api/v1/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSuccess(true);
      return await res.json();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitContactForm,
    loading,
    error,
    success,
  };
}
