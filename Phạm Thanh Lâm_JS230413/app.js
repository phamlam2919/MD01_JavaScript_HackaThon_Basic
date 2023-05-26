// Bài 1:
// function maxValue(array) {
//   let a = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > a) {
//       a = array[i];
//     }
//   }
//   return a;
// }
// let array = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
// let a = maxValue(array);
// console.log(a);

// Bài 2:
// function maxValue(sentence) {
//   sentence = sentence.trim();
//   let a = sentence.split(" ");
//   a = a.map(function (b) {
//     b = b.trim();
//     let firstChar = b.charAt(0).toUpperCase();
//     let reChar = b.slice(1).toLowerCase();
//     return firstChar + reChar;
//   });
//   let maxValue = a.join(" ");
//   return maxValue;
// }
// let sentence1 = " this is A tEst ";
// console.log(maxValue(sentence1));
// let sentence2 = "  heLlo   riKkei   academy  ";
// console.log(maxValue(sentence2));

// Bài 4:
// function withSort(arr) {
//   arr.sort(function (a, b) {
//     return b - a;
//   });
//   return arr;
// }
// let arr = [3, 25, 38, 49, 12];
// console.log(withSort(arr));

// function number(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }

//   return arr;
// }
// console.log(number(arr));

// Bài 3:
function numberDays(month, year) {
  let day;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        day = 29;
      } else {
        day = 28;
      }
      break;
  }
  return day;
}
let month = +prompt("Nhập tháng:");
let year = +prompt("Nhập năm:");

let day = numberDays(month, year);
if (day === -1) {
  console.log("Tháng không hợp lệ!");
} else {
  console.log(`Số ngày của tháng ${month} năm ${year} có ${day}`);
}
