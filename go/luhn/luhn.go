// Package luhn provides methods to work with Luhn algorith
package luhn

import (
	"regexp"
	"strconv"
)

var r = regexp.MustCompile(`^\d+(\s*\d+)+$`)

// Valid determine whether or not a number is valid per Luhn formula
func Valid(input string) bool {
	if !r.MatchString(input) {
		return false
	}

	sum := 0
	spaces := 0

	for i, r := range input {
		if r == ' ' {
			spaces++
			continue
		}

		position := len(input) - i - spaces - 1
		digit, _ := strconv.Atoi(string(r))

		if position%2 != 0 {
			digit = digit * 2
			if digit > 9 {
				digit = digit - 9
			}
		}
		sum += digit
	}
	return sum%10 == 0
}
