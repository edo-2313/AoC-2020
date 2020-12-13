const fs = require('fs');

var matrix = [];
var i = 0;

fs.readFileSync('input.txt').toString().split("\n").forEach(element => {
    matrix[i] = element.split("");
    i++;
});

var rows = matrix.length;
var cols = matrix[0].length;
var trees = 0;

//Part 1
console.log("Part 1 result: ")
coords = [0, 0]; //x,y
for (let i = 0;; i++) {
    coords[0] += 3;
    coords[1] += 1;
    if (coords[1] >= rows) {
        break;
    }
    if (coords[0] >= cols) {
        coords[0] -= cols;
    }
    if (matrix[coords[1]][coords[0]] == '#') {
        trees++;
    }
}
console.log(trees);


//Part 2
console.log("Part 2 result: ")
coords = [0, 0]; //x,y

var mult = 1;
let steps = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
];
steps.forEach(el => {
    trees = 0;
    coords = [0, 0];
    for (let i = 0;; i++) {
        coords[0] += el[0];
        coords[1] += el[1];
        if (coords[1] >= rows) {
            break;
        }
        if (coords[0] >= cols) {
            coords[0] -= cols;
        }
        if (matrix[coords[1]][coords[0]] == '#') {
            trees++;
        }
    }
    console.log(trees);
    mult *= trees;
});
console.log(mult);