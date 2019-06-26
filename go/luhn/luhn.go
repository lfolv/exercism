// Package luhn provides methods to work with Luhn algorith
package luhn

import (
	"strconv"
	"unicode"
)

// Valid determine whether or not a number is valid per Luhn formula
func Valid(input string) bool {
	sum := 0
	counter := 0

	for i := len(input) - 1; i >= 0; i-- {
		r := rune(input[i])

		if r == ' ' {
			continue
		}

		if !unicode.IsDigit(r) {
			return false
		}

		digit, _ := strconv.Atoi(string(r))

		if counter%2 != 0 {
			digit = digit * 2
			if digit > 9 {
				digit = digit - 9
			}
		}
		sum += digit
		counter++
	}

	if counter > 1 {
		return sum%10 == 0
	}

	return false
}
