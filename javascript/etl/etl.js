export function transform (oldSystem) {
  return Object.keys(oldSystem).reduce((newSystem, points) => {
    for (let key of oldSystem[points]) {
      newSystem[key.toLowerCase()] = Number.parseInt(points, 10)
    }
    return newSystem
  }, {})
}
