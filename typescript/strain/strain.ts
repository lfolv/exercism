export function keep<T>(array: T[], callback: (e: T) => boolean): T[] {
  return array.filter(callback);
}

export function discard<T>(array: T[], callback: (e: T) => boolean): T[] {
  return array.filter(value => !callback(value));
}
