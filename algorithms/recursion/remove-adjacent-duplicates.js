const removeDuplicates = str => {
    if (str <= 1) {
        return str;
    } else if (str[0] === str[1]) {
        return removeDuplicates(str.substr(1));
    }

    return str[0] + removeDuplicates(str.substr(1));
}

console.log(removeDuplicates("heello"));
console.log(removeDuplicates("Hhello"));
console.log(removeDuplicates("heleo"));