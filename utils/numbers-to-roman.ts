const romanNumList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XV: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

export const numbersToRoman = (value: number) => {
    if (value < 1 || value > 1000)
        return "Enter a number between 1 and 1000";

    let roman = "";
    for (let key in romanNumList) {
        let quotient = Math.floor(value / romanNumList[key]);
        for (let i = 0; i < quotient; i++) {
            roman += key;
        }
        value = value % romanNumList[key];
    }

    return roman;
}