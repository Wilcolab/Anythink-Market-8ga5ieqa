// Convert different string formats into camelCase.
// Examples:
// "first name" → "firstName"
// "user_id" → "userId"
// "SCREEN_NAME" → "screenName"
// "mobile-number" → "mobileNumber"

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(/[\s_\-]+/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

// Test examples
console.log(toCamelCase("first name"));
console.log(toCamelCase("user_id"));
console.log(toCamelCase("SCREEN_NAME"));
console.log(toCamelCase("mobile-number"));
