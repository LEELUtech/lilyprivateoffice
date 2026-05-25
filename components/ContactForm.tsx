"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  objective: string;
  pointOfContact: string;
  encryptedContact: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    objective: "",
    pointOfContact: "",
    encryptedContact: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
      setForm({ name: "", email: "", organization: "", objective: "", pointOfContact: "", encryptedContact: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-success">
        Your inquiry has been transmitted. The Private Office will be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-fields">
        <div className="contact-fields-group">
          <input
            type="text"
            name="name"
            className="contact-input"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="contact-input"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="organization"
            className="contact-input"
            placeholder="Organization / Family Office:"
            value={form.organization}
            onChange={handleChange}
          />
          <select
            name="objective"
            className="contact-input"
            value={form.objective}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Primary Objective</option>
            <option value="human-intelligence">Human Intelligence for M&A</option>
            <option value="leadership-diagnostics">Leadership Diagnostics</option>
            <option value="succession-architecture">Succession Architecture</option>
            <option value="partnership-vetting">Partnership Vetting</option>
          </select>
        </div>
        <div className="contact-fields-group">
          <input
            type="text"
            name="pointOfContact"
            className="contact-input"
            placeholder="Point of Contact:"
            value={form.pointOfContact}
            onChange={handleChange}
          />
          <input
            type="text"
            name="encryptedContact"
            className="contact-input"
            placeholder="Encrypted Contact: (Signal ID / Wire)"
            value={form.encryptedContact}
            onChange={handleChange}
          />
        </div>
      </div>

      {status === "error" && <div className="contact-error">{errorMsg}</div>}

      <button type="submit" className="contact-submit" disabled={status === "loading"}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#000" />
        </svg>
        {status === "loading" ? "TRANSMITTING..." : "TRANSMIT INQUIRY"}
      </button>
    </form>
  );
}
