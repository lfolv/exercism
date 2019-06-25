// Package luhn provides methods to work with Luhn algorith
package luhn

import (
	"regexp"
	"strconv"
)

// Valid determine whether or not a number is valid per Luhn formula
func Valid(input string) bool {
	r, _ := regexp.Compile(`^\d+(\s*\d+)+$`)

	if !r.MatchString(input) {
		return false
	}

	sum := 0
	spaces := 0

	for i, r := range input {
		if r == ' ' {
			spaces++
		} else {
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
	}
	return sum%10 == 0
}
