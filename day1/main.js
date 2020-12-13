const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

//Part 1
console.log("Part 1 result: ")
for (let i = 0; i < array.length; i++)
    for (let j = i; j< array.length; j++)
        if (parseInt(array[i]) + parseInt(array[j]) == 2020)
            console.log(parseInt(array[i]) * parseInt(array[j]));

//Part 2
console.log("Part 2 result: ")
for (let i = 0; i < array.length; i++)
    for (let j = i; j < array.length; j++)
        for (let k = j; k < array.length; k++)
            if (parseInt(array[i]) + parseInt(array[j]) + parseInt(array[k]) == 2020)
                console.log(parseInt(array[i]) * parseInt(array[j]) * parseInt(array[k]));