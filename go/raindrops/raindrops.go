// Package raindrops provide a methods to convert strings
package raindrops

import (
	"bytes"
	"strconv"
)

// Convert transform a number to a string, the contents depend on the number's
// factory
func Convert(number int) string {
	var b bytes.Buffer

	if number%3 == 0 {
		b.WriteString("Pling")
	}

	if number%5 == 0 {
		b.WriteString("Plang")
	}

	if number%7 == 0 {
		b.WriteString("Plong")
	}

	if b.Len() == 0 {
		return strconv.Itoa(number)
	}

	return b.String()
}
