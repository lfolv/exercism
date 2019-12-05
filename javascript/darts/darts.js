const CENTER = [0, 0];
const INNER_CIRCLE_RADIUS = 1;
const INNER_CIRCLE_POINTS = 10;
const MIDDLE_CIRCLE_RADIUS = 5;
const MIDDLE_CIRCLE_POINTS = 5;
const OUTER_CIRCLE_RADIUS = 10;
const OUTER_CIRCLE_POINTS = 1;
const OUTSIDE_CIRCLE_POINTS = 0;

export const solve = (x, y) => {
  const distance = calculeDistance([x, y], CENTER);

  if (distance <= INNER_CIRCLE_RADIUS) {
    return INNER_CIRCLE_POINTS;
  }

  if (distance <= MIDDLE_CIRCLE_RADIUS) {
    return MIDDLE_CIRCLE_POINTS;
  }

  if (distance <= OUTER_CIRCLE_RADIUS) {
    return OUTER_CIRCLE_POINTS;
  }

  return OUTSIDE_CIRCLE_POINTS;
};

const calculeDistance = ([x1, y1], [x2, y2]) =>
  Math.sqrt(
    Math.pow(x1, 2) + Math.pow(x2, 2) + (Math.pow(y1, 2) + Math.pow(y2, 2))
  );
