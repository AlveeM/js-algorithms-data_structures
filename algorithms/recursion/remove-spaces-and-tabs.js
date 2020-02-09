const remove = (string) => {
    if (string.length === 0) {
        return "";
    }
    debugger;
    if (string[0] === "\t" || string[0] === " ") {
        return remove(string.substring(1));
    } else {
        return string[0] + remove(string.substring(1));
    }
}

const string = "hello world";
console.log(remove(string));