// function capitalize(word) {
//   const firstLetter = word.charAt(0)
//   const remainingLetters = word.slice(1)
//   const firstLetterCap = firstLetter.toUpperCase()
//   return firstLetterCap + remainingLetters
//   }
//   module.exports = capitalize;



// let word = 'words'



// function reverseString(string) {
// let reversedString = ''
// for (let i = string.length -1; i >=0; i--) {
//   reversedString += string[i];
//   console.log(reversedString)
// }
// return reversedString
// }

// module.exports = reverseString;


// let string1 = 'eggs'


// const calculator = {
//   add: function(num1,num2) {
// return num1+num2
//   },
//   subtract: function(num1,num2) {
//     return num1-num2
//   },
//   multiply: function(num1,num2) {
//     return num1*num2
//   },
//   divide: function(num1,num2) {
// return num1/num2
//   }
// }

// module.exports = calculator;





 FOR OF LOOPS!!!!
function caesarCipher(string) {
  originalArray = Array.from(string)
  referenceArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  cipherArray = ['d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c']
  originalArray.forEach((element) => {
    let codedString = ''

    for (let i = 0; i < referenceArray.length; i++) {
    if (element === referenceArray[i]) {
      console.log(cipherArray[i])
      codedString += cipherArray[i]
      console.log(codedString)
      return codedString
    } 
    else i++
    } 
    return codedString
})
}
module.exports = caesarCipher;
