function checkPalindrome() {
    let str = document.getElementById("inputString").value;
    let cleanedStr = cleanString(str);
    let reversedStr = reverseString(cleanedStr);
    displayResult(str, cleanedStr, reversedStr);
}

function cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

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
