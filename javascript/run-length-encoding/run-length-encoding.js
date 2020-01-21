export const encode = data => data.replace(/((.)\2*)/g, shrink);

const shrink = characters =>
  characters.length === 1
    ? characters[0]
    : `${characters.length}${characters[0]}`;

export const decode = () => {
  throw new Error("Remove this statement and implement this function");
};
