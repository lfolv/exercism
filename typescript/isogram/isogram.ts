class Isogram {
    static isIsogram(phrase: string) {
        const letters = new Map<string, boolean>()

        for (const letter of phrase) {
            if (letters.has(letter)) {
                return false
            }

            letters.set(letter, true)
        }

        return true
    }
}

export default Isogram
