export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

/**
 * Return the encoded resistor value of a color.
 *
 * @param {string} the color to be encoded
 * @return {number} the encoded value of the color
 */
export function colorCode(color) {
  return COLORS.indexOf(color);
}
