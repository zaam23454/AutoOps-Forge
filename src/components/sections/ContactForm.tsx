"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { GlowButton } from "@/components/ui/GlowButton";
import {
  budgetRangeOptions,
  projectTypeOptions,
  timelineOptions
} from "@/data/contactOptions";
import styles from "./Prompt5Pages.module.css";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
  companyWebsite: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  projectType: "",
  budgetRange: "",
  timeline: "",
  message: "",
  companyWebsite: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function updateField(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, sourcePage: "/contact" })
    });

    const result = await response.json();

    if (!response.ok) {
      setErrors(result.errors || {});
      setStatus("error");
      setMessage(result.message || "Please review the highlighted fields.");
      return;
    }

    setStatus("success");
    setForm(initialState);
    setErrors({});
    setMessage(result.message);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.honeypot}>
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={form.companyWebsite}
          onChange={(event) => updateField("companyWebsite", event.target.value)}
        />
      </div>

      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="name">Name *</label>
          <input id="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} />
          {errors.name ? <span className={styles.errorText}>{errors.name}</span> : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} />
          {errors.email ? <span className={styles.errorText}>{errors.email}</span> : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="whatsapp">WhatsApp Number *</label>
          <input id="whatsapp" value={form.whatsapp} onChange={(event) => updateField("whatsapp", event.target.value)} />
          {errors.whatsapp ? <span className={styles.errorText}>{errors.whatsapp}</span> : null}
        </div>
        <SelectField
          id="projectType"
          label="Project Type *"
          value={form.projectType}
          options={projectTypeOptions}
          error={errors.projectType}
          onChange={(value) => updateField("projectType", value)}
        />
        <SelectField
          id="budgetRange"
          label="Budget Range *"
          value={form.budgetRange}
          options={budgetRangeOptions}
          error={errors.budgetRange}
          onChange={(value) => updateField("budgetRange", value)}
        />
        <SelectField
          id="timeline"
          label="Timeline *"
          value={form.timeline}
          options={timelineOptions}
          error={errors.timeline}
          onChange={(value) => updateField("timeline", value)}
        />
        <div className={styles.fullField}>
          <label htmlFor="message">Message / Project Details *</label>
          <textarea
            id="message"
            value={form.message}
            maxLength={1200}
            onChange={(event) => updateField("message", event.target.value)}
          />
          {errors.message ? <span className={styles.errorText}>{errors.message}</span> : null}
        </div>
      </div>

      <div className={styles.actions}>
        <GlowButton type="submit" className={styles.submitButton}>
          {status === "loading" ? "Submitting..." : "Start My Project"}
        </GlowButton>
      </div>

      {message ? (
        <p className={status === "success" ? styles.statusSuccess : styles.statusError}>
          {message}
        </p>
      ) : null}
      <p className={styles.secureNote}>Your information is secure and never shared with third parties.</p>
    </form>
  );
}

function SelectField({
  id,
  label,
  value,
  options,
  error,
  onChange
}: {
  id: keyof FormState;
  label: string;
  value: string;
  options: string[];
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">Select option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <span className={styles.errorText}>{error}</span> : null}
    </div>
  );
}
