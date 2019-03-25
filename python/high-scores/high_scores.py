class HighScores(object):
    def __init__(self, scores):
        self.scores = scores

    def latest(self):
        return self.scores[-1]

    def personal_best(self):
        return self.__rank()[0]

    def personal_top_three(self):
        return self.__rank()[:3]

    def __rank(self):
        return sorted(self.scores, reverse=True)
