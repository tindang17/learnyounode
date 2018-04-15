var newArr = process.argv.slice(2);
var total = 0;
newArr.forEach(function(num) {
 total = total + Number(num);
});
console.log(total);
