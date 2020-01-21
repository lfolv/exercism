export const encode = data => data.replace(/((.)\2*)/g, shrink);

const shrink = characters =>
  characters.length === 1
    ? characters[0]
    : `${characters.length}${characters[0]}`;

export const decode = data => {
  return data
    .replace(/(\d*)(.)/g, match => {
      if (match.length === 1) {
        return match
      }

      return match[match.length - 1].repeat(Number.parseInt(match))
    })
};
