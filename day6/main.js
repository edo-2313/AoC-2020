const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split('\n\n');

//Part 1
console.log("Part 1 result: ")

var sum = 0;
array.forEach(element => {
    sum += [...new Set(element.replace(/\s+/g, '').split(''))].join('').length;
});
console.log(sum);

//Part 2
console.log("Part 2 result: ");

sum = 0;
array.forEach(element => {
    chars_to_check = [...new Set(element.replace(/\s+/g, '').split(''))];
    chars_to_check.forEach(char => {
        let regexp = new RegExp(char, 'g');
        if ((element.replace(/\s+/g, '').match(regexp) || []).length == element.split('\n').length)
        sum++;
    });
});

console.log(sum);