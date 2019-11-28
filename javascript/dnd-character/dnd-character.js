export const abilityModifier = score => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3')
  }

  if (score > 18) {
    throw new Error('Ability scores can be at most 18')
  }

  return Math.floor((score - 10) / 2);
};

export class Character {
  static rollAbility() {
    const values = []

    for (let i = 0; i < 4; i++) {
      values.push(Math.floor(1 + Math.random(6)))
    }

    return values
      .sort(n => Number(n))
      .slice(1)
      .reduce((sum, n) => sum + n, 0)
  }

  get strength() {
    throw new Error("Remove this statement and implement this function");
  }

  get dexterity() {
    throw new Error("Remove this statement and implement this function");
  }

  get constitution() {
    throw new Error("Remove this statement and implement this function");
  }

  get intelligence() {
    throw new Error("Remove this statement and implement this function");
  }

  get wisdom() {
    throw new Error("Remove this statement and implement this function");
  }

  get charisma() {
    throw new Error("Remove this statement and implement this function");
  }

  get hitpoints() {
    throw new Error("Remove this statement and implement this function");
  }
}
