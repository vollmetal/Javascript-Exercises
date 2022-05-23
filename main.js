let input1 = 15;

function FizzBuzz(input) {
    let output = "";
    if (Number.isInteger((input / 3) % 1)) {
        output += "Fizz";
    }
    if (Number.isInteger((input / 5) % 1)) {
        output += "Buzz";
    }
    return output;
}

console.log(FizzBuzz(input1));

let exampleArray = ["john", "john", "mary", "sally"];

function RemoveDuplicates(inputArray) {
    let tempArray = [];
    for (let index = 0; index < inputArray.length; index++) {
        if (tempArray.includes(inputArray[index])) {
        } else {
            tempArray.push(inputArray[index]);
        }
    }
    return tempArray;
}

console.log(exampleArray);
console.log(RemoveDuplicates(exampleArray));

function isInArray(item, array) {
    let output = true
    if (array.includes(item)) {
    } else {
        output = false
    }
    return output
}
let exampleNumArray = [0, 10, 2, 4, 6, 7, 9, -1]
console.log('array solution for 10: ' + isInArray(10, exampleNumArray))
console.log('array solution for 5: ' + isInArray(5, exampleNumArray))

function palindrome(inputString) {
    output = false
    let tempString = ''
    for (index = (inputString.length - 1); index < inputString.length && index >= 0; index--) {
        tempString += inputString[index]

    }
    if (inputString == tempString) {
        console.log(inputString + ' is a palindrome')
        output = true
    }
    else {
        console.log(inputString + ' is not a palindrome')
    }
    return output
}

function findLargestNum(arrayNumbers) {
    let currentLargestNum = 0
    for (index = 0; index < arrayNumbers.length; index++) {
        if (arrayNumbers[index] > currentLargestNum) {
            currentLargestNum = arrayNumbers[index]
        }
    }
    return currentLargestNum
}
function findSmallestNum(arrayNumbers) {
    let currentSmallestNum = findLargestNum(arrayNumbers)
    for (index = 0; index < arrayNumbers.length; index++) {
        if (arrayNumbers[index] < currentSmallestNum) {
            currentSmallestNum = arrayNumbers[index]
        }
    }
    return currentSmallestNum

}
function isEvenOrOdd(input) {
    let output = 'is Odd'
    if (Number.isInteger((input / 2) % 1)) {
        output = 'is Even'
    }
    return output
}

function sortNumbers(arrayNumbers, order) {
    let tempNumArray = []
    let tempPlaceHolderArray = arrayNumbers
    if (order == 'ASCENDING') {
        while (tempPlaceHolderArray.length > 0) {
            tempNumArray.push(findSmallestNum(tempPlaceHolderArray))
            tempPlaceHolderArray.splice(tempPlaceHolderArray.indexOf(findSmallestNum(tempPlaceHolderArray)), 1)
        }
    }
    else if (order == 'DESCENDING') {
        while (tempPlaceHolderArray.length > 0) {
            tempNumArray.push(findLargestNum(tempPlaceHolderArray))
            tempPlaceHolderArray.splice(tempPlaceHolderArray.indexOf(findLargestNum(tempPlaceHolderArray)), 1)
        }

    }
    return tempNumArray
}

let newArray = [3, 4, 56, 7, 8, 1]

console.log('largest number in array is: ' + findLargestNum(exampleNumArray))
console.log('smallest number in array is: ' + findSmallestNum(exampleNumArray))
console.log('sorted Ascending array is: ' + sortNumbers(exampleNumArray, 'ASCENDING'))
console.log(exampleNumArray)
console.log('sorted Ascending array is: ' + sortNumbers(newArray, 'DESCENDING'))
console.log('10 ' + isEvenOrOdd(10))


let examplePalindrome = 'mom'
let exampleNotPalindrome = 'ball'
console.log(palindrome(examplePalindrome))
console.log(palindrome(exampleNotPalindrome))

class BankAccount {
    constructor(
        firstName,
        lastName,
        balance,
        accountType,
        middleName = "",
        accountStatus = "OPEN"
    ) {
        if (balance >= 100) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.middleName = middleName;
            this.balance = balance;
            this.accountType = accountType;
            this.accountStatus = accountStatus;
        }
        else {
            console.log("NOT ENOUGH MONEY")
        }

    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            this.accountStatus = "OVERDRAFT";
            this.balance -= amount + 35;
        }
    }
    deposit(amount) {
        this.balance += amount;
    }
    transferToOtherAccount(amount, otherAccount) {
        if (this.balance >= otherAccount.balance) {
            this.withdraw(amount);
            otherAccount.deposit(amount);
        } else {
            console.log("YOU DO NOT HAVE ENOUGH MONEY");
        }
    }
    overdraft() {
        if (this.balance < 0) {
            this.balance -= 35;
        }
    }
}

let account1 = new BankAccount("John", "Doe", 100, "Checking");
let account2 = new BankAccount("Jane", "Doe", 500, "Checking");
let account3 = new BankAccount('Jeff', 'Bezos', 10, "Checking")
console.log(account1);
console.log(account2);
console.log(account3);
account1.withdraw(10);
account2.deposit(10);
console.log(account1);
console.log(account2);
account1.transferToOtherAccount(50, account2);
console.log(account1);
console.log(account2);
account1.withdraw(200);
console.log(account1);
