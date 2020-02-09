const removeDuplicates = string => {
    if (string <= 1) {
        return string;
    } else if (string[0] === string[1]) {
        return removeDuplicates(string.substr(1));
    }

    return string[0] + removeDuplicates(string.substr(1));
}

console.log(removeDuplicates("heello"));
console.log(removeDuplicates("Hhello"));
console.log(removeDuplicates("heleo"));