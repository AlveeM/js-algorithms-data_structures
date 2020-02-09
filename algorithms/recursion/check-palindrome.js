const isPalindrome = str => {
    if (str.length === 1) {
        return true;
    } else if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.substring(1, str.length - 1));
    }
    return false;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("ada"));
console.log(isPalindrome("Ada"));
