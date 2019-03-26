const calc = number => {
  const numberStr = number.toString();
  return numberStr
    .split("")
    .reduce((x, y) => x + Number.parseInt(y, 10) ** numberStr.length, 0);
};

export const validate = number => number === calc(number);
