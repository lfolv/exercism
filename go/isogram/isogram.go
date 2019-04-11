package isogram

import (
	"unicode"
)

func IsIsogram(phrase string) bool {
	letters := make(map[rune]bool)

	for _, letter := range(phrase) {
		if letter == ' ' || letter == '-' {
			continue
		}

		normalizedLetter := unicode.ToUpper(letter)
		if letters[normalizedLetter] {
			return false
		}
		letters[normalizedLetter] = true
	}
	return true
}
