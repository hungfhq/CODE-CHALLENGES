package main

import (
	"fmt"
	"math"
)

func add(param1 int, param2 int) int {
	return param1 + param2
}

func centuryFromYear(year int) int {
	if (year % 100) == 0 {
		return (year / 100)
	}
	return (year / 100) + 1
}

func centuryFromYear1(year int) int {
	return 1 + ((year - 1) / 100)
}

func checkPalindrome(inputString string) bool {
	middle := len(inputString) / 2
	count := 0
	for i := 0; i < middle; i++ {
		if inputString[i] == inputString[len(inputString)-1-i] {
			count++
		}
	}
	if count == middle {
		return true
	}
	return false
}

func checkPalindrome1(inputString string) bool {
	for i := 0; i < len(inputString)/2; i++ {
		if inputString[i] != inputString[len(inputString)-1-i] {
			return false
		}
	}
	return true
}

func checkPalindrome2(s string) bool {
	return s == Reverse(s)
}

// Reverse ...
func Reverse(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func adjacentElementsProduct(inputArray []int) int {
	max := float64(inputArray[0] * inputArray[1])
	for i := 2; i < len(inputArray); i++ {
		max = math.Max(max, float64(inputArray[i-1]*inputArray[i]))
	}
	return int(max)
}

func shapeArea(n int) int {
	if n == 1 {
		return 1
	}
	temp := 0
	result := 0
	for i := 1; i < (n + n - 1); i += 2 {
		temp += i
		result = (n + n - 1) + temp*2
	}
	return result
}

func shapeArea1(n int) int {
	return n*n + (n-1)*(n-1)
	// return 2*n*n - 2*n + 1
}

func makeArrayConsecutive2(statues []int) int {
	min := statues[0]
	max := statues[len(statues)-1]
	for i := 0; i < len(statues); i++ {
		if statues[i] < min {
			min = statues[i]
		}
		if statues[i] > max {
			max = statues[i]
		}
	}
	return (max - min - len(statues)) + 1
}

func matrixElementsSum(matrix [][]int) int {
	result := 0
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] != 0 {
				result += matrix[i][j]
			} else {
				if i < len(matrix)-1 {
					matrix[i+1][j] = 0
				}
			}
		}
	}
	return result
}

func matrixElementsSum2(matrix [][]int) int {
	sum := 0
	for x := 0; x < len(matrix[0]); x++ {
		for y := 0; y < len(matrix) && matrix[y][x] != 0; y++ {
			// for y := 0; y < len(matrix); y++ {
			fmt.Println("x=", x, "y=", y, "matrix[y][x]=", matrix[y][x])
			sum += matrix[y][x]
		}
		// fmt.Println()
	}
	return sum
}

func bubbleSort(numbers []int) []int {
	//Start the loop in reverse order, so the loop will start with length
	//which is equal to the length of input array and then loop untill
	//reaches 1
	for i := len(numbers); i > 0; i-- {
		//The inner loop will first iterate through the full length
		//the next iteration will be through n-1
		// the next will be through n-2 and so on
		for j := 1; j < i; j++ {
			if numbers[j-1] > numbers[j] {
				intermediate := numbers[j]
				numbers[j] = numbers[j-1]
				numbers[j-1] = intermediate
			}
		}
	}
	return numbers
}

// func firstDuplicate(a []int) int {
// 	for i := 0; i < len(a); i++ {
// 		if a[math.Abs(a[i])-1] < 0 {
// 			return math.Abs(a[i])
// 		}
// 		a[math.Abs(a[i])-1] = -a[math.Abs(a[i])-1]
// 	}
// 	return -1
// }

func main() {
	// var matrix = [][]int{
	// 	{1, 1, 1, 1},
	// 	{1, 5, 0, 0},
	// 	{2, 0, 3, 3}}
	// matrix = [][]int{{1}}
	// fmt.Println(add(1, 3))
	// fmt.Println(centuryFromYear(1900))
	// fmt.Println(centuryFromYear(1901))
	// fmt.Println(checkPalindrome("aabaa"))

	// fmt.Println(adjacentElementsProduct([]int{3, 6, -2, -5, 7, 3}))
	// fmt.Println(matrixElementsSum2(matrix))
	// fmt.Println(6 / 2)
	// fmt.Println(7 / 2)
	var a = []int{2, 1, 3, 5, 3, 2}
	// a = []int{2, 2}
	// fmt.Println(firstDuplicate(a))
}
