// Your task is to implement function toReadable that converts given number, to readable string.
// For example:
// toReadable(1); // Will return 'one'
// toReadable(997); //will return 'nine hundred ninety seven'
// You can find even more examples in test.js

module.exports = function toReadable(number) {
    number = number + "";
    let c = number.split("");
    let counter = c.length;
    a = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let a1 = ["twen", "thir", "four", "fif", "six", "seven", "eigh", "nine"];

    switch (counter) {
        case 1:
            for (let j = 0; j < 10; j++) {
                if (c[0] == b[j]) return a[j];
            }
            break;
        case 2:
            if (number == "10") return "ten";
            else if (number == "11") return "eleven";
            else if (number == "12") return "twelve";
            else {
                for (let i = 1; i < 10; i++) {
                    if (c[0] == "1" && c[1] == b[i]) return a1[i - 2] + "teen";
                }
            }
            for (let k = 2; k < 10; k++) {
                for (let m = 1; m < 10; m++) {
                    if (c[0] == b[k] && c[1] == "0" && number != "40")
                        return a1[b[k - 2]] + "ty";
                    else if (c[0] == "4" && c[1] == "0") return "forty";
                    else if (c[0] == "4" && c[1] == b[m])
                        return "forty " + a[b[m]];
                    else if (c[0] == b[k] && c[1] == b[m])
                        return a1[b[k - 2]] + "ty " + a[b[m]];
                }
            }
            break;
        case 3:
            for (let j = 0; j < 10; j++) {
                if (c[0] == b[j] && c[1] == 0 && c[2] == "0") {
                    return a[j] + " hundred";
                } else if (c[0] == b[j] && c[1] == "1" && c[2] == "0") {
                    return a[j] + " hundred ten";
                } else if (c[0] == b[j] && c[1] == "1" && c[2] == "1") {
                    return a[j] + " hundred eleven";
                } else if (c[0] == b[j] && c[1] == "1" && c[2] == "2") {
                    return a[j] + " hundred twelve";
                } else if (c[0] == b[j] && c[1] == "4" && c[2] == "0") {
                    return a[j] + " hundred forty";
                } else {
                    for (let i = 1; i < 10; i++) {
                        if (c[0] == b[j] && c[1] == [0] && c[2] == b[i]) {
                            return a[j] + " hundred " + a[i];
                        } else if (
                            c[0] == b[j] &&
                            c[1] == b[i] &&
                            c[2] == "0"
                        ) {
                            return a[j] + " hundred " + a1[i - 2] + "ty";
                        } else {
                            for (let m = 1; m < 10; m++) {
                                if (
                                    c[0] == b[j] &&
                                    c[1] == "1" &&
                                    c[2] == b[m]
                                ) {
                                    return (a[j] + " hundred " + a1[m - 2] + "teen");
                                } else if (c[0] == b[j] && c[1] == "4" && c[2] == b[m]) return (a[j] + " hundred " + "forty " + a[b[m]]);
                                else if (
                                    c[0] == b[j] &&
                                    c[1] == b[i] &&
                                    c[2] == b[m]
                                ) {
                                    return (a[j] + " hundred " + a1[i - 2] + "ty " + a[m]);
                                }
                            }
                        }
                    }
                }
            }
    }
};
