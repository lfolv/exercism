package luhn

import (
	"strconv"
	"strings"
)

func Valid(input string) bool {
	sum := 0
	input = strings.Replace(input, " ", "", -1)

	if len(input) <= 1 {
		return false
	}

	for i:= len(input) - 1; i >= 0; i-- {
		j := len(input) - i - 1
		rune := input[i]
		n, err := strconv.Atoi(string(rune))

		if err != nil {
			return false
		}

		if j % 2 != 0 {
			n = n * 2
			if n > 9 {
				n = n - 9
			}
		}
		sum += n
	}
	return sum % 10 == 0
}
