function checkPalindrome() {
    // Get the input string value
    let str = document.getElementById("inputString").value;

    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = cleanString(str);

    // Reverse the cleaned string
    let reversedStr = reverseString(cleanedStr);

    // Show result
    displayResult(str, cleanedStr, reversedStr);
}

// Function to clean the string (remove spaces and special characters, make lowercase)
function cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to display the result on the webpage
function displayResult(originalStr, cleanedStr, reversedStr) {
    let resultElement = document.getElementById("result");

    if (cleanedStr === reversedStr && cleanedStr !== "") {
        resultElement.innerHTML = `"${originalStr}" is a palindrome.`;
        resultElement.classList.remove("error");
    } else if (cleanedStr === "") {
        resultElement.innerHTML = "Please enter a valid word or phrase!";
        resultElement.classList.add("error");
    } else {
        resultElement.innerHTML = `"${originalStr}" is not a palindrome.`;
        resultElement.classList.add("error");
    }
}
