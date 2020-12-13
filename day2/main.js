const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

//Part 1
console.log("Part 1 result: ")
total = 0;
array.forEach(element => {
    let min = parseInt(element.substring(0, element.indexOf('-')));
    let max = parseInt(element.substring(element.indexOf('-') + 1, element.indexOf(' ')));
    let letter = element.substring(element.indexOf(' ')+1, element.indexOf(':'));
    let pass = element.substring(element.indexOf(':')+2);
    let regexp = new RegExp(letter, 'g');
    let num = (pass.match(regexp) || []).length;
    if (min <= num && num <= max)
        total++;
});
console.log(total);

//Part 2
console.log("Part 2 result: ")
total = 0;
array.forEach(element => {
    let pos1 = parseInt(element.substring(0, element.indexOf('-')));
    let pos2 = parseInt(element.substring(element.indexOf('-') + 1, element.indexOf(' ')));
    let letter = element.substring(element.indexOf(' ') + 1, element.indexOf(':'));
    let pass = element.substring(element.indexOf(':') + 2);
    if (+(pass.charAt(pos1 - 1) == letter) + +(pass.charAt(pos2 - 1) == letter) == true)
        total++;
});
console.log(total);