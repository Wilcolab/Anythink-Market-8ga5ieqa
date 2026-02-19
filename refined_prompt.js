/**
 * Converts a string to camelCase with validation and error handling.
 * @param {string} input
 * @returns {string}
 */
function toCamelCase(input) {
  if (input === null || input === undefined) {
    throw new Error("Input cannot be null or undefined");
  }

  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  if (input.trim() === "") {
    return "";
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
 * Converts a string to dot.case format.
 * @param {string} input
 * @returns {string}
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

// Example usage
console.log(toCamelCase("hello world"));
console.log(toDotCase("hello world"));
