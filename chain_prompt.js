/**
 * Step 1: Kebab-case means lowercase words separated by hyphens.
 * Example: "Hello World" → "hello-world"
 */

/**
 * Step 2: Convert string into kebab-case.
 */
function toKebabCase(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  if (input.trim() === "") {
    return "";
  }

  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s_-]/g, "")
    .split(/[\s_]+/)
    .filter(Boolean)
    .join("-");
}

/**
 * Step 3: Test cases
 */
console.log(toKebabCase("Hello World"));      // hello-world
console.log(toKebabCase("user_name test"));   // user-name-test
console.log(toKebabCase("Clean CODE!!"));     // clean-code
