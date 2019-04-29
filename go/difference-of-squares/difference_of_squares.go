// Package diffsquares provides helper methods to handle with square numbers
// calculations
package diffsquares

// SquareOfSum calculate the square of the sum of the first N natural numbers
func SquareOfSum(n int) int {
	t := (n+1)*n/2
	return t * t
}

// SumOfSquares calculate the square of the sum of the first N natural numbers.
func SumOfSquares(n int) int {
	return (n + 1) * n * (2*n + 1) / 6
}

// Difference calculate the difference between the square of sum and the sum of
// the squares of the first N natural numbers.
func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
