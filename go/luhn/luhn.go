// Package luhn provides methods to work with Luhn algorith
package luhn

import (
	"strconv"
	"strings"
	"regexp"
)

// Valid determine whether or not a number is valid per Luhn formula
func Valid(input string) bool {
	r, _ := regexp.Compile(`^\d+(\s*\d+)+$`)

	if !r.MatchString(input) {
		return false
	}

	sum := 0
	input = strings.Replace(input, " ", "", -1)

	for i := len(input) - 1; i >= 0; i-- {
		j := len(input) - i - 1
		rune := input[i]
		n, _ := strconv.Atoi(string(rune))

		if j%2 != 0 {
			n = n * 2
			if n > 9 {
				n = n - 9
			}
		}
		sum += n
	}
	return sum%10 == 0
}
