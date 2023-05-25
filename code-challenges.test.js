// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0

// a) Create a test with expect statements using the variables provided.

// describe("takes in a string and returns a string with a coded message", () => {
//     it('converts certain letter to numbers', () => {
//         expect(encrypter(secretCodeWord1).toEqual("L4ck4d41s1c4l"))
//         expect(encrypter(secretCodeWord2).toEqual("G0bbl3dyg00k"))
//         expect(encrypter(secretCodeWord3).toEqual("3cc3ntr1c"))
//     })
// })

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// Process: created a function that takes in a string as an input, and replaces specified letters with numbers
// Encrypter: we tell the function that our string is gonna have the specifies letter replaces by using the .replace method and we specify each letter and what is the replacement we want
// Display: we run our function alongside our code word to display expected outcome

const encrypter = (str) => {
    return(
    str = str.replace(/a/gi, 4),
    str = str.replace(/e/gi, 3),
    str = str.replace(/i/gi, 2),
    str = str.replace(/o/gi, 0)
    )
}
console.log(encrypter(secretCodeWord1))
console.log(encrypter(secretCodeWord2))
console.log(encrypter(secretCodeWord3))

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe('takes in an arr of words & specified letter and returns arr containing words w/ specified letter', () => {
//     it("returns arr with only words containing specified letter", () => {
//         expect(fruitFilter(filterLetterA).toEqual(["Mango", "Apricot", "Peach"]))
//         expect(fruitFilter(filterLetterE).toEqual(["Cherry", "Blueberry", "Peach"]))
//     })
// })

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// Pseudo code : 
// Process: Creating a method that takes the array and a letter as a parameter we can evaluate anf filter  if a word contains the letter
// Fruit Filter: This function uses the .filter method to evaluate each word and  using .lowercase to get  make them all the same. We apply the .includes method to check for our specified letter.
//Display: we run our test with the fruit array and our variable holding our specified letter to produce desired outcome

const fruitFilter = (arr, letter) => {
    return arr.filter(word => word.toLowerCase().includes(letter))
}

console.log(fruitFilter(fruitArray,filterLetterA))
console.log(fruitFilter(fruitArray,filterLetterE))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("determines whether or not the array is a full house", () => {
    it('returns t/f value if pair and three of a kind is included', () => {
        expect(handChecker(hand1).toEqual(true))
        expect(handChecker(hand2).toEqual(false))
        expect(handChecker(hand3).toEqual(false))
        expect(handChecker(hand4).toEqual(true))
    })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// Pseudo Code: I really struggled with this problem and needed assistance with the whole thing. I needed a lot of guidance on how to make the .filter method work for me and I want to go to office hours this week so that I can brush up on my javascript because I struggled with the javascript portion of my assessment the most. 

// Process: created a method that takes in a hand and uses the .filter method to check if the card matches the value of the specified index.
// Variables: I created two variables defining how many numbers a pair and a three of a kind would have using the .includes method.
// Return: I told it to return and show me if the hand met the specified parameter of needing a pair and a 3 of a kind to be displayed.

const handChecker = (hand) => {
    let checker = hand.filter (card => card === hand[0])
    let pair = checker.includes(2)
    let threeOfAKind= checker.includes(3)
    return pair &&threeOfAKind
}

console.log(handChecker(hand1))
console.log(handChecker(hand2))
console.log(handChecker(hand3))
console.log(handChecker(hand4))


//I keep getting an error when running jest on my computer and it keeps running all my files off my github when I try to run my specific test. I want to find a solution for this issue with one of the instructors. 
