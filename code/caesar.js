const caesar = (str, key) => {
    let out = "";
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i);
        let code = str.charCodeAt(i);
        if ((code >= 65) && (code <= 90)) {
            c = String.fromCharCode(((code - 65 + key) % 26) + 65);
        } else if ((code >= 97) && (code <= 122)) {
            c = String.fromCharCode(((code - 97 + key) % 26) + 97);
        }

        out += c;
    }

    return out;
};

module.exports = caesar;