// for calculate the difference
function calculateDifference() {
    let a = document.querySelector("#num1");
    let b = document.querySelector("#num2");

    result.innerHTML = a.value - b.value;
}

// for findout odd numbers
function isOdd() {
    let x = document.getElementById("number").value;

    if (x % 2 == 0) {
        document.getElementById("Odd").innerHTML = "False";
    }
    else {
        document.getElementById("Odd").innerHTML = "True";
    }
}

// for findout minimum number
function findMin() {
    let num = document.getElementById("min").value;
    let data = num.split(/[\s,]+/).filter(item => item !== "").map(Number);
    let minNum = Math.min(...data);
    
    document.getElementById("findMin").innerHTML = minNum;
}

// for filter even numbers
function filterEvenNumbers() {
    let evenNum = document.getElementById("filterEven").value;
    let data = evenNum.split('');
    let evenDigits = data.filter(digit => digit % 2 === 0);
    let evenCount = evenDigits.length;
    
    document.getElementById("findEven").innerHTML = "There are " + evenCount + " even numbers";
}

// for findout descending numbers
function sortArrayDescending() {
    let bigNum = document.getElementById("sortArray").value;
    let data = bigNum.split(/[\s,]+/).filter(item => item !== "").map(Number);
    data.sort((a, b) => b - a);
    
    document.getElementById("sortDescending").innerHTML = data;
}

// for make first leter lower case
function lowercaseFirstLetter() {
    let word = document.getElementById('lowercase').value;

    if (word.length > 0) {
        let convert = word.charAt(0).toLowerCase() + word.slice(1);
        document.getElementById("lcFirstLetter").innerText = `Converted text is: ${convert}`;
    } else {
        document.getElementById("lcFirstLetter").innerText = "Please enter a valid string!";
    }
}

// for Count Vowels
function countVowels() {
    let count = document.getElementById("vowels").value;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    let vowelCount = 0;
    for (let char of count) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    document.getElementById("countVowels").innerText = "Number of vowels: " + vowelCount;
}

// for Count Average
function findAverage() {
    let avnumber = document.getElementById("avNumber").value.split(/[\s,]+/);
    let numbers = avnumber.map(Number);

    // Check if input is valid
    if (numbers.some(isNaN)) {
        document.getElementById("average").innerText = "Please enter valid numbers.";
        return;
    }
    
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    // Calculate the average
    let average = sum / numbers.length;

    document.getElementById("average").innerText = "Average: " + average;
}