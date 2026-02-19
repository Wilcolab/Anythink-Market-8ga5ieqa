/**
 * Few-shot prompting example
 * Handles multiple input formats and converts them to camelCase.
 *
 * Examples:
 * "first name" → "firstName"
 * "user_id" → "userId"
 * "SCREEN_NAME" → "screenName"
 * "mobile-number" → "mobileNumber"
 */

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(/[\s_\-]+/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}
