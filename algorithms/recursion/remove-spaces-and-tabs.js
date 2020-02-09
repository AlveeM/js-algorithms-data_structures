const remove = str => {
    if (str.length === 0) {
        return "";
    }
    if (str[0] === "\t" || str[0] === " ") {
        return remove(str.substring(1));
    } else {
        return str[0] + remove(str.substring(1));
    }
}

const str = "hello world";
console.log(remove(str));