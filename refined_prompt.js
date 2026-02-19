/**
 * Refined prompting example
 * Adds validation, edge-case handling, and improved robustness.
 */

function toCamelCase(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  return input
    .toLowerCase()
    .split(/[\s_\-]+/)
    .filter(Boolean)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

/**
 * Additional function generated using context from existing code.
 * Converts string into dot.case format.
 */
function toDotCase(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  return input
    .toLowerCase()
    .split(/[\s_\-]+/)
    .filter(Boolean)
    .join(".");
}
