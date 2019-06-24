package luhn

import (
	"strconv"
)

func Valid(input string) bool {
	sum := 0
	offset := 1
	for i:= len(input) - 1; i >= 0; i-- {
		j := len(input) - i - offset
		rune := input[i]
		if rune == ' ' {
			offset++
		} else {
			n, _ := strconv.Atoi(string(rune))
			if j % 2 != 0 {
				n = n * 2
				if n > 9 {
					n = n - 9
				}
			}
			sum += n

		}
	}
	return sum % 10 == 0
}
