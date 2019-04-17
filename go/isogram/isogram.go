// Package isogram provides handy method for handle with isogram sentences
package isogram

import (
	"unicode"
)

// IsIsogram determine if a word or phrase is an isogram
func IsIsogram(phrase string) bool {
	letters := make(map[rune]bool)

	for _, letter := range phrase {
		if letter == '-' || letter == ' ' {
			continue
		}

		upperLetter := unicode.ToUpper(letter)

		if letters[upperLetter] {
			return false
		}

		letters[upperLetter] = true
	}

	return true
}
