// Package luhn provides methods to work with Luhn algorith
package luhn

import (
	"strconv"
)

// Valid determine whether or not a number is valid per Luhn formula
func Valid(input string) bool {
	sum := 0
	counter := 0
	spaces := 0

	for i := range(input) {
		r := input[i]

		if r == ' ' {
			spaces++
			continue
		}

		if r < '0' || r > '9' {
			return false
		}

		digit, _ := strconv.Atoi(string(r))
		index := len(input) - 1 - i - spaces

		if index%2 != 0 {
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
