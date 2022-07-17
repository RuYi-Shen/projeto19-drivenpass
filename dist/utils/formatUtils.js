export function formatDate(date) {
    var data = date, month = (data.getMonth() + 1).toString(), monthF = month.length == 1 ? "0" + month : month, yearF = data.getFullYear().toString().slice(-2);
    return monthF + "/" + yearF;
}
export function formatName(name) {
    var parts = name.trim().split(" ");
    var nameLength = parts.length;
    var firstName = parts.shift();
    var lastName = "";
    if (nameLength > 0) {
        lastName = parts.pop() || "";
    }
    var middleName = parts
        .map(function (part) {
        if (part.length > 2)
            return part[0];
    })
        .join(" ");
    var formatedName = "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
    return formatedName
        .toUpperCase()
        .replace(/\s{2,}/g, " ")
        .trim();
}
export function convertToDate(date) {
    var _a = date.split("/").map(Number), month = _a[0], year = _a[1];
    return new Date(year + 2000, month - 1);
}
