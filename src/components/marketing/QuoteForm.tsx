"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import {
  PROJECT_TYPES,
  validateField,
  validateQuote,
  type QuoteErrors,
  type QuoteFields,
} from "@/lib/quote";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { buttonVariants } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: QuoteFields = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
  company: "",
};

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFields>(EMPTY);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const setField = (field: keyof QuoteFields, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof QuoteFields) => {
    const err = validateField(field, values[field] ?? "");
    setErrors((e) => ({ ...e, [field]: err }));
  };

  const focusFirstError = (errs: QuoteErrors) => {
    const order: (keyof QuoteFields)[] = [
      "name",
      "phone",
      "email",
      "projectType",
      "message",
    ];
    const first = order.find((f) => errs[f]);
    if (first && formRef.current) {
      formRef.current
        .querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateQuote(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      focusFirstError(found);
      return;
    }
    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("success");
        setValues(EMPTY);
      } else {
        setStatus("error");
        setServerMessage(
          data.message ||
            "Something went wrong. Please call us instead.",
        );
        if (data.errors) {
          setErrors(data.errors);
          focusFirstError(data.errors);
        }
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "We couldn't reach the server. Please call us instead.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-line bg-white p-8 text-center shadow-sm"
      >
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-amber/10 text-amber-ink">
          <CheckCircle2 aria-hidden="true" className="size-8" />
        </span>
        <h2 className="mt-4 text-2xl font-bold text-navy">Thanks, we got it</h2>
        <p className="mx-auto mt-3 max-w-md text-ink">
          Dave or someone on the crew will call you back, usually within a day.
          If you need us sooner, give us a call.
        </p>
        <a
          href={BUSINESS.phoneHref}
          className={buttonVariants({
            variant: "primary",
            size: "lg",
            className: "mt-6",
          })}
        >
          <Phone aria-hidden="true" className="size-5" />
          Call {BUSINESS.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit}
      className="rounded-xl border border-line bg-white p-6 shadow-sm md:p-8"
    >
      {status === "error" && serverMessage && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <span>{serverMessage}</span>
        </div>
      )}

      {/* Honeypot field — hidden from users, catches bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => setField("company", e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          error={errors.name}
          required
        >
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            onBlur={() => handleBlur("name")}
          />
        </Field>

        <Field label="Phone" name="phone" error={errors.phone} required>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
          />
        </Field>

        <Field label="Email" name="email" error={errors.email} required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            onBlur={() => handleBlur("email")}
          />
        </Field>

        <Field
          label="Project type"
          name="projectType"
          error={errors.projectType}
          required
        >
          <Select
            id="projectType"
            name="projectType"
            aria-required="true"
            aria-invalid={!!errors.projectType}
            aria-describedby={
              errors.projectType ? "projectType-error" : undefined
            }
            value={values.projectType}
            onChange={(e) => setField("projectType", e.target.value)}
            onBlur={() => handleBlur("projectType")}
          >
            <option value="">Choose a project type…</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Tell us about your project"
          name="message"
          error={errors.message}
          required
        >
          <Textarea
            id="message"
            name="message"
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="What are you looking to build, roughly how big, and where? Any timeline in mind?"
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            onBlur={() => handleBlur("message")}
          />
        </Field>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-6 w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 aria-hidden="true" className="size-5 animate-spin" />
            Sending…
          </>
        ) : (
          "Request my free estimate"
        )}
      </Button>

      <p className="mt-4 text-sm text-muted">
        Prefer to talk? Call Dave at{" "}
        <Link
          href={BUSINESS.phoneHref}
          className="font-semibold text-navy hover:text-amber-ink"
        >
          {BUSINESS.phone}
        </Link>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-heading text-sm font-semibold text-navy"
      >
        {label}
        {required && (
          <span className="text-amber-ink" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1 text-sm text-red-600"
        >
          <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
