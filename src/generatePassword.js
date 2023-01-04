function generatePassword(length, hasLower, hasUpper, hasNumbers, hasSpecial, prevPassword) {
    if (hasLower || hasUpper || hasNumbers || hasSpecial) {
        let availableChars = [
            ...(hasLower ? ['abcdefghijklmnopqrstuvwxyz'.split('')] : []),
            ...(hasUpper ? ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')] : []),
            ...(hasNumbers ? ['0123456789'.split('')] : []),
            ...(hasSpecial ? ['~!@#$%^&*_-+?.:;'.split('')] : [])
        ];

        let result = "";

        for (let i = 0; i < length; ++i) {
            let rowIndex = Math.floor(Math.random() * availableChars.length);
            let colIndex = Math.floor(Math.random() * availableChars[rowIndex].length);
            result += availableChars[rowIndex][colIndex];
        }

        return result;
    }
    else {
        alert("Select atleast one paramater");
        return prevPassword;
    }
}

export default generatePassword;