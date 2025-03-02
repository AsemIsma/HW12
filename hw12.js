function checkPali (unknown) {
    if (typeof(unknown) === 'number') {
        let word = unknown.toString();
        let revWord = word.toString().split('').reverse().join('');
        return revWord === word;
    } else if (typeof(unknown) === 'string') {
        let revWord = unknown.split('').reverse().join('');
        return revWord.toUpperCase() === unknown.toUpperCase();
    }
}

console.log(checkPali ('mom'));
console.log(checkPali ('word'));
console.log(checkPali ('Mom'));
console.log(checkPali (123));
console.log(checkPali (121));


