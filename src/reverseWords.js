export const reverseWords = text =>
  text
    .split(" ")
    .reverse()
    .reduce((a, b) => a + b + " ", "")
    .slice(0, -1);
