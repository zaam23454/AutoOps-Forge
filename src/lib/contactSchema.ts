export type ContactFormPayload = {
  name: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
  companyWebsite?: string;
  sourcePage?: string;
};

export type ValidContactSubmission = Omit<ContactFormPayload, "companyWebsite"> & {
  submittedAt: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d\s-]{7,24}$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(input: unknown):
  | { ok: true; data: ValidContactSubmission }
  | { ok: false; errors: Record<string, string>; spam?: boolean } {
  const body = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const errors: Record<string, string> = {};

  if (clean(body.companyWebsite)) {
    return { ok: false, errors: { form: "Submission rejected." }, spam: true };
  }

  const name = clean(body.name);
  const email = clean(body.email).toLowerCase();
  const whatsapp = clean(body.whatsapp);
  const projectType = clean(body.projectType);
  const budgetRange = clean(body.budgetRange);
  const timeline = clean(body.timeline);
  const message = clean(body.message);
  const sourcePage = clean(body.sourcePage) || "/contact";

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!emailPattern.test(email)) errors.email = "Please enter a valid email address.";
  if (!phonePattern.test(whatsapp)) errors.whatsapp = "Please enter a valid WhatsApp number.";
  if (!projectType) errors.projectType = "Please choose a project type.";
  if (!budgetRange) errors.budgetRange = "Please choose a budget range.";
  if (!timeline) errors.timeline = "Please choose a timeline.";
  if (message.length < 20) errors.message = "Please share at least 20 characters about your project.";
  if (message.length > 1200) errors.message = "Please keep the message under 1200 characters.";

  if (Object.keys(errors).length) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      submittedAt: new Date().toISOString(),
      name,
      email,
      whatsapp,
      projectType,
      budgetRange,
      timeline,
      message,
      sourcePage
    }
  };
}
