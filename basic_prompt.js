// Write a function that converts a string to camelCase.
// Example: "hello world" → "helloWorld"

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(/[\s_\-]+/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

// Example usage
console.log(toCamelCase("hello world")); // helloWorld
