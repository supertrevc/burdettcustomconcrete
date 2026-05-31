import { SERVICES } from "./constants";

/** Project type options for the quote form select. */
export const PROJECT_TYPES: string[] = [
  ...SERVICES.map((s) => s.name),
  "Other / not sure yet",
];

export interface QuoteFields {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
  /** Honeypot — must be empty for a real submission. */
  company?: string;
}

export type QuoteErrors = Partial<Record<keyof QuoteFields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validate a single field. Returns an error message or undefined. */
export function validateField(
  field: keyof QuoteFields,
  value: string,
): string | undefined {
  const v = value.trim();
  switch (field) {
    case "name":
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Please enter your full name.";
      return undefined;
    case "phone": {
      if (!v) return "Please enter a phone number.";
      const digits = v.replace(/\D/g, "");
      if (digits.length < 10) return "Please enter a valid phone number.";
      return undefined;
    }
    case "email":
      if (!v) return "Please enter your email address.";
      if (!EMAIL_RE.test(v)) return "Please enter a valid email address.";
      return undefined;
    case "projectType":
      if (!v) return "Please choose a project type.";
      return undefined;
    case "message":
      if (!v) return "Please tell us a little about your project.";
      if (v.length < 10) return "Please add a few more details.";
      return undefined;
    default:
      return undefined;
  }
}

/** Validate the whole form. */
export function validateQuote(data: QuoteFields): QuoteErrors {
  const errors: QuoteErrors = {};
  (["name", "phone", "email", "projectType", "message"] as const).forEach(
    (field) => {
      const err = validateField(field, data[field] ?? "");
      if (err) errors[field] = err;
    },
  );
  return errors;
}
