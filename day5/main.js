const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

//Part 1
console.log("Part 1 result: ")

var highest = 0;
var seat_ids = [];
array.forEach(element => {
    row_start = 0;
    row_end = 127;
    element.substring(0, 7).split('').forEach(element => {
        if (element == 'F')
            row_end = Math.floor((row_end + row_start) / 2);
        if (element == 'B')
            row_start = Math.ceil((row_end + row_start) / 2);
    });

    col_start = 0;
    col_end = 7;
    element.substring(7).split('').forEach(element => {
        if (element == 'L')
            col_end = Math.floor((col_end + col_start) / 2);
        if (element == 'R')
            col_start = Math.ceil((col_end + col_start) / 2);
    });
    seat_ids.push(row_start * 8 + col_start);
});
console.log(Math.max(...seat_ids));

//Part 2
console.log("Part 2 result: ");

for (let i = Math.min(...seat_ids); i < Math.max(...seat_ids); i++) {
    if (!seat_ids.includes(i) && seat_ids.includes(i - 1) && seat_ids.includes(i + 1)){
        console.log(i);
        break;
    }
}