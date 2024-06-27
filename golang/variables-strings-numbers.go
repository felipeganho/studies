package main

import "fmt"

// someName := "hello" // shortname declaration only available inside functions

func main() {

	// strings
	var nameOne string = "Ganho"
	var nameTwo = "Felipe"
	var nameThree int = 25
	var nameFour string

	fmt.Println(nameOne)
	fmt.Println(nameTwo)
	fmt.Println(nameThree)
	fmt.Println(nameFour)

	nameOne = "Ganho2"
	fmt.Println(nameOne)

	nameFive := "Ganho3" // var nameFive string = "Ganho3"
	fmt.Println(nameFive)

	// ints
	var ageOne int = 20
	var ageTwo = 30
	ageThree := 40

	fmt.Println(ageOne, ageTwo, ageThree)

	// bits & memory
	var numOne int8 = 25
	var numTwo uint16 = 256

	println(numOne, numTwo)

	// float
	var scoreOne float32 = 25.98
	var scoreTwo float64 = 84841551854.5

	println(scoreOne, scoreTwo)
}
