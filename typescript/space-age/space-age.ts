enum OrbitalPeriod {
  earth = 31557600,
  mercury = 7600543.81992,
  venus = 19414149.052176,
  mars = 59354032.690079994,
  jupiter = 374355659.124,
  saturn = 929292362.8848,
  uranus = 2651370019.3296,
  neptune = 5200418560.032001
};

class SpaceAge {
  seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  onEarth(): number {
    return this.age(OrbitalPeriod.earth);
  }

  onMercury(): number {
    return this.age(OrbitalPeriod.mercury);
  }

  onVenus(): number {
    return this.age(OrbitalPeriod.venus);
  }

  onMars(): number {
    return this.age(OrbitalPeriod.mars);
  }

  onJupiter(): number {
    return this.age(OrbitalPeriod.jupiter);
  }

  onSaturn(): number {
    return this.age(OrbitalPeriod.saturn);
  }

  onUranus(): number {
    return this.age(OrbitalPeriod.uranus);
  }

  onNeptune(): number {
    return this.age(OrbitalPeriod.neptune);
  }

  private age(orbitalPeriod: OrbitalPeriod): number {
    return Number((this.seconds / orbitalPeriod).toFixed(2));
  }
}

export default SpaceAge;
