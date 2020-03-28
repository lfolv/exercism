class Isogram {
    static isIsogram(phrase: string) {
        const letters = new Map<string, boolean>()
        const normalizedPhrase = Isogram.normalize(phrase)

        for (const letter of normalizedPhrase) {
            if (letters.has(letter)) {
                return false
            }

            letters.set(letter, true)
        }

        return true
    }

    static normalize(phrase: string) {
        return phrase
            .replace(/[\-\s]*/g, '')
            .toUpperCase()
    }
}

export default Isogram
