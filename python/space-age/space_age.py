class SpaceAge(object):
    PLANET_TO_ORBITAL_PERIOD = {
        "earth": 31557600.0,
        "mercury": 7600543.81992,
        "venus": 19414149.052176,
        "mars": 59354032.690079994,
        "jupiter": 374355659.124,
        "saturn": 929292362.8848,
        "uranus": 2651370019.3296,
        "neptune": 5200418560.032001,
    }

    def __init__(self, seconds):
        self.seconds = seconds

    def on_mercury(self):
        return self.on("mercury")

    def on_venus(self):
        return self.on("venus")

    def on_earth(self):
        return self.on("earth")

    def on_mars(self):
        return self.on("mars")

    def on_jupiter(self):
        return self.on("jupiter")

    def on_saturn(self):
        return self.on("saturn")

    def on_uranus(self):
        return self.on("uranus")

    def on_neptune(self):
        return self.on("neptune")

    def on(self, planet):
        return round(self.seconds / self.PLANET_TO_ORBITAL_PERIOD[planet], 2)
