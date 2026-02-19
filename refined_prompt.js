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
