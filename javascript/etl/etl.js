export function transform (oldSystem) {
  return Object.keys(oldSystem).reduce((newSystem, points) => {
    for (let key of oldSystem[points]) {
      newSystem[key.toLowerCase()] = Number(points)
    }
    return newSystem
  }, {})
}
