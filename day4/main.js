const fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split('\n\n');

array.forEach(function (element, index) {
    array[index] = JSON.parse(('{' + element.replace(/\s+/g, ',') + '}').replace(/[:{,}]/g, function (x) {
        return '"' + x + '"';
    }).slice(1, -1));
});

//Part 1
console.log("Part 1 result: ");
var total = 0;
array.forEach(element => {
    if (element.hasOwnProperty('byr') && element.hasOwnProperty('iyr') && element.hasOwnProperty('eyr') && element.hasOwnProperty('hgt') && element.hasOwnProperty('hcl') && element.hasOwnProperty('ecl') && element.hasOwnProperty('pid')) {
        total++;
    }
});
console.log(total);

//Part 2
console.log("Part 2 result: ");
total = 0;
array.forEach(element => {
    if (element.byr && element.byr.match(/\d{4}/g) && 1920 <= parseInt(element.byr) && parseInt(element.byr) <= 2002)
        if (element.iyr && element.iyr.match(/\d{4}/g) && 2010 <= parseInt(element.iyr) && parseInt(element.iyr) <= 2020)
            if (element.eyr && element.eyr.match(/\d{4}/g) && 2020 <= parseInt(element.eyr) && parseInt(element.eyr) <= 2030)
                if (element.hgt && ((element.hgt.endsWith('in') && 59 <= parseInt(element.hgt.substring(0, element.hgt.indexOf('i'))) && parseInt(element.hgt.substring(0, element.hgt.indexOf('i'))) <= 76) || (element.hgt.endsWith('cm') && 150 <= parseInt(element.hgt.substring(0, element.hgt.indexOf('c'))) && parseInt(element.hgt.substring(0, element.hgt.indexOf('c'))) <= 193)))
                    if (element.hcl && element.hcl.match(/#(\d|[a-f]){6}/g))
                        if (element.ecl && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(element.ecl))
                            if (element.pid && element.pid.match(/^\d{9}$/g))
                                total++;
});
console.log(total);