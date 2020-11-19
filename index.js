module.exports = function removeSpace(string) {
    if (typeof string !== "string") throw new TypeError("This is just a string!");
    return string.replace(/\s/g, "");
};