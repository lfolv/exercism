const COLORS = [
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

export const value = colors =>
  Number.parseInt(
    colors.reduce((result, color) => result + COLORS.indexOf(color), ""),
    10
  );
