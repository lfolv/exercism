type Filter<T> = (e: T) => boolean;

export function keep<T>(array: T[], callback: Filter<T>): T[] {
  return array.filter(callback);
}

export function discard<T>(array: T[], callback: Filter<T>): T[] {
  return array.filter(value => !callback(value));
}
