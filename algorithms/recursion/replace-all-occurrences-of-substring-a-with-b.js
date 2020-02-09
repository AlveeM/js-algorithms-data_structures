// Change all occurrences of substring a in str with substring b
const replaceSubstr = (str, a, b) => {
    if (str.length === 0) {
        return "";
    } else if (str.substring(0, b.length) === b) {
        return a + replaceSubstr(str.substring(b.length), a, b);
    } else {
        return str[0] + replaceSubstr(str.substring(1), a, b);
    }
}

console.log(replaceSubstr("hello", "yo", "ll"));