/**
 * Chain prompting example
 *
 * Step 1: Define kebab-case → lowercase words separated by hyphens.
 * Example: "Hello World" → "hello-world"
 *
 * Step 2: Implement conversion logic with validation.
 * Step 3: Provide example test cases.
 */

function toKebabCase(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s_-]/g, "")
    .split(/[\s_]+/)
    .filter(Boolean)
    .join("-");
}

// Example test cases
console.log(toKebabCase("Hello World"));     // hello-world
console.log(toKebabCase("user_name test"));  // user-name-test
console.log(toKebabCase("Clean CODE!!"));    // clean-code
