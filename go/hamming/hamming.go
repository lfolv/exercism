// Package hamming provides handy method for handle with Hamming difference
package hamming

import "errors"

// Distance calcule the Hamming difference between two DNA strands
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("lenght of a and b can't be different")
	}
	distance := 0
	for i:= 0; i < len(a); i++ {
		if a[i] != b[i] {
			distance++
		}
	}
	return distance, nil;
}
