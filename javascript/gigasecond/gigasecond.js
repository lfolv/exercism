const GIGASECOND_IN_MS = 1e12;

export const gigasecond = actual => {
  return new Date(actual.getTime() + GIGASECOND_IN_MS);
};
