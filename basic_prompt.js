/**
 * One-shot prompting example
 * Converts a string into camelCase.
 * Example: "hello world" → "helloWorld"
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
