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
      values.push(Math.floor(1 + Math.random() * 6))
    }

    return values
      .sort(n => Number(n))
      .slice(1)
      .reduce((sum, n) => sum + n, 0)
  }

  constructor() {
    this._strength = Character.rollAbility()
    this._dexterity = Character.rollAbility()
    this._constitution = Character.rollAbility()
    this._intelligence = Character.rollAbility()
    this._wisdom = Character.rollAbility()
    this._charisma = Character.rollAbility()
    this._hitpoints = 10 + abilityModifier(this._constitution)
  }

  get strength() {
    return this._strength
  }

  get dexterity() {
    return this._dexterity
  }

  get constitution() {
    return this._constitution
  }

  get intelligence() {
    return this._intelligence
  }

  get wisdom() {
    return this._wisdom
  }

  get charisma() {
    return this._charisma
  }

  get hitpoints() {
    return this._hitpoints
  }
}
