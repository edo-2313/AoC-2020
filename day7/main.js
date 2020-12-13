const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split('\n');

//Part 1
console.log("Part 1 result: ")

var accumulator = 0;
let arraycp = [...array];
for (let i = 0; i < arraycp.length;) {
    if (arraycp[i].endsWith('d'))
        break;
    arraycp[i] += 'd';
    if (arraycp[i].startsWith('nop')) {
        i++;
    } else if (arraycp[i].startsWith('acc')) {
        accumulator += parseInt(arraycp[i].split(' ')[1]);
        i++;
    } else if (arraycp[i].startsWith('jmp')) {
        
        i += parseInt(arraycp[i].split(' ')[1]);
    }
}
console.log(accumulator);

//Part 2
console.log("Part 2 result: ");
var j;
for(let i = 0; i< array.length; i++){
    accumulator = 0;
    arraycp = [...array];
    if (arraycp[i].startsWith('nop'))
        arraycp[i] = arraycp[i].replace('nop', 'jmp');
    else if (arraycp[i].startsWith('jmp'))
        arraycp[i] = arraycp[i].replace('jmp', 'nop');
    
    for (j = 0; j < arraycp.length;) {
        if (arraycp[j].endsWith('d'))
            break;
        arraycp[j] += 'd';
        if (arraycp[j].startsWith('nop')) {
            j++;
        } else if (arraycp[j].startsWith('acc')) {
            accumulator += parseInt(arraycp[j].split(' ')[1]);
            j++;
        } else if (arraycp[j].startsWith('jmp')) {
            j += parseInt(arraycp[j].split(' ')[1]);
        }
    }
    if (j == array.length)
        break;
}

console.log(accumulator);