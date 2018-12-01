"use strict";

const calc = number => {
  const numberStr = number.toString();
  return numberStr.split("").reduce((x, y) => x + y ** numberStr.length, 0);
};

export const validate = number => number === calc(number);
