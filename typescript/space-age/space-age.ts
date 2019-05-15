const PLANET_TO_ORBITAL_PERIOD: { [key: string]: number } = {
  earth: 31557600,
  mercury: 7600543.81992,
  venus: 19414149.052176,
  mars: 59354032.690079994,
  jupiter: 374355659.124,
  saturn: 929292362.8848,
  uranus: 2651370019.3296,
  neptune: 5200418560.032001
}

class SpaceAge {
  seconds: number

  constructor(seconds: number) {
    this.seconds = seconds
  }

  onEarth(): number {
    return this.age('earth')
  }

  onMercury(): number {
    return this.age('mercury')
  }

  onVenus(): number {
    return this.age('venus')
  }

  onMars(): number {
    return this.age('mars')
  }

  onJupiter(): number {
    return this.age('jupiter')
  }

  onSaturn(): number {
    return this.age('saturn')
  }

  onUranus(): number {
    return this.age('uranus')
  }

  onNeptune(): number {
    return this.age('neptune')
  }

  private age(planet: string): number {
    return Number.parseFloat((this.seconds / PLANET_TO_ORBITAL_PERIOD[planet]).toFixed(2))
  }
}

export default SpaceAge
