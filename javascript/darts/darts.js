export const solve = (x, y) => {
  const distance = calculeDistance([x, y], [0, 0]);

  if (distance <= 1) {
    return 10
  } 

  if (distance <= 5) {
    return 5;
  }

  if (distance <= 10) {
    return 1;
  }

  return 0;
};

const calculeDistance = ([x1, y1], [x2, y2]) => 
  Math.sqrt((x1 ** 2 + x2 ** 2) + (y1 ** 2 + y2 ** 2))


