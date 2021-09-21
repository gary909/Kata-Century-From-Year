function century(year) {
    // Finish this :)
    var ans = (''+year).split('');;
    if (ans.length <= 2) {
        // return ans[0];
        return 1;
    } else if (ans.length == 3){
        return ans[0];
    }
}

console.log(century(89)); // 1
console.log(century(100)); // 1
console.log(century(200)); // 2
console.log(century(201)); // 2
console.log(century(300)); // 3
console.log(century(441)); // 4
console.log(century(571)); // 5