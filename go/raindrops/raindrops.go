// Package raindrops provide a methods to convert strings
package raindrops

import (
	"strconv"
)

// Convert transform a number to a string, the contents depend on the number's
// factory
func Convert(number int) string {
	b := ""

	if number%3 == 0 {
		b += "Pling"
	}

	if number%5 == 0 {
		b += "Plang"
	}

	if number%7 == 0 {
		b += "Plong"
	}

	if len(b) == 0 {
		return strconv.Itoa(number)
	}

	return b
}
