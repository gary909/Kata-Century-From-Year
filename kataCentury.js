function century(year) {
    var ans = (''+year).split('');;
    if (ans.length <= 2) {
        return 1;
    } else if (ans.length == 3){
        return ans[0];
    } else if (ans.length >= 4 && ans[ans.length - 1] == 0){
        ans = ans[0] + ans[1];
        return parseInt(ans, 10);
    } else if (ans.length >= 4 && ans[ans.length - 1] >= 1){
        ans = ans[0] + ans[1];
        ans = parseInt(ans, 10) +1;
        return ans;
    }
}

// function century(year) {
//     let result = 0;
//     for (let i = 0; i < year; i++) {
//       if (i % 100 === 0) {
//         result++;
//       }
//     }
//     return result;
//   }
  

console.log(century(89)); // 1
console.log(century(100)); // 1
console.log(century(200)); // 2
console.log(century(201)); // 2
console.log(century(300)); // 3
console.log(century(441)); // 4
console.log(century(571)); // 5
console.log(century(1900)); // 19
console.log(century(1901)); // 20
console.log(century(123924)); // 1240