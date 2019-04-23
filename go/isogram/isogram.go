// Package isogram provides helpful method to handle with isogram sentences
// An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and
// hyphens are allowed to appear multiple times
package isogram

import (
	"unicode"
)

// IsIsogram determine if a word or phrase is an isogram
func IsIsogram(phrase string) bool {
	letters := make(map[rune]bool)

	for _, letter := range phrase {
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
