// Package luhn provides methods to work with Luhn algorith
package luhn

import (
	"strconv"
)

// Valid determine whether or not a number is valid per Luhn formula
func Valid(input string) bool {
	sum := 0
	counter := 0

	for i := range(input) {
		r := input[len(input)-1-i]

		if r == ' ' {
			continue
		}

		if r < '0' || r > '9' {
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
