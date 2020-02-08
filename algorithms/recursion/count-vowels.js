const countVowels = (string, stringLength) => {
    if (stringLength == 1) {
        return Number(isVowel(string[0]));
    }

    return countVowels(string, stringLength - 1) + isVowel(string[stringLength - 1]);
}

const isVowel = character => {
    character = character.toLowerCase();
    const vowels = "aeios";

    if (vowels.indexOf(character) != -1) {
        return true
    } else {
        return false;
    }
}

string = "Hello"
console.log(countVowels(string, string.length));