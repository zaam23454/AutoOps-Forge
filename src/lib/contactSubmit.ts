import type { ValidContactSubmission } from "./contactSchema";
import { sendEmailAlert } from "./email";
import { sendToGoogleSheets } from "./googleSheets";

export async function deliverContactSubmission(
  submission: ValidContactSubmission,
  userAgent: string
) {
  const results = await Promise.allSettled([
    sendToGoogleSheets(submission, userAgent),
    sendEmailAlert(submission)
  ]);

  const successes = results.filter(
    (result) => result.status === "fulfilled" && result.value.ok
  );

  const failures = results.map((result) =>
    result.status === "rejected" ? result.reason : result.value
  );

  return {
    ok: successes.length > 0,
    results: failures
  };
}
