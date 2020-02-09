const merge = (str1, str2) => {
    // base case 1
    if (str1.length === 0) {
        if (str2.length === 0) {
            return "";
        }
        return str2;
    // base case 2
    } else if (str2.length === 0) {
        return str1;
    // recursive case 1
    } else if (str1[0] > str2[0]) {
        return str2[0] + merge(str1, str2.substr(1));
    // recursive case 2
    } return str1[0] + merge(str1.substr(1), str2);
}

const str1 = "acu";
const str2 = "bst";
console.log(merge(str1, str2));