// // MITask-G
// // getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini

// function getHighestIndex1(arr: Array<number>) {
//     if (arr.length === 0) {
//         return -1;
//     }
//     let maxValue = arr[0];
//     let maxIndex = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (maxValue < arr[i]) {
//             maxValue = arr[i];
//             maxIndex = i;
//         }
//     }
//     return maxIndex;
// }

// function getHighestIndex2(arr: Array<number>) {
//     return arr.indexOf(Math.max(...arr));
// }

// console.log("version 1: ", getHighestIndex1([5, 21, 1.2, 21, 8]));
// console.log("version 1: ", getHighestIndex1([-1]));
// console.log("version 1: ", getHighestIndex1([]));
// console.log("version 1: ", getHighestIndex1([-5, -21, 1.2, -201, 8]));

// console.log("version 2: ", getHighestIndex2([5, 21, 1.2, 21, 8]));
// console.log("version 2: ", getHighestIndex2([-1]));
// console.log("version 2: ", getHighestIndex2([]));
// console.log("version 2: ", getHighestIndex2([-5, -21, 1.2, -201, 8]));

// // // MITask-H:
// //getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(arr: number[]): string {
//     let result: string = "";
//     arr.forEach((ele) => {
//         ele >= 0 ? (result += ele) : null;
//     });
//     return result;
// }
// console.log("result: ", getPositive([1, -4, 2]));
// console.log("result: ", getPositive([1, -4, 2, 0, -27]));

// // H2-TASK
// // getDigits("m14i1t") return qiladi "141"
// const getDigits = (str: string) => {
//     let result: string = "";
//     for (let letter of str) {
//         if (letter >= "0" && letter <= "9") {
//             result += letter;
//         }
//     }
//     return result;
// };

// console.log(getDigits("asdjlasdkljhaksdj21312312j3b1 23k1j23b"));

// // MITask-I
// // majorityElement([1,2,3,4,5,4,3,4]) return 4
// const majorityElement = (nums: number[]): number => {
//   const countMap: Map<number, number> = new Map();
//   for (const num of nums) {
//     countMap.set(num, (countMap.get(num) || 0) + 1);
//   }
//   let maxCount = 0;
//   let majorityNum = nums[0];

//   for (const [num, count] of countMap) {
//     if (count > maxCount) {
//       maxCount = count;
//       majorityNum = num;
//     }
//   }
//   return majorityNum;
// };
// const nums1: number[] = [3, 1, 2, 3, 4, 5, 4, 3, 4, 4];
// console.log("majorityNum", majorityElement(nums1));
// const nums2: number[] = [12, 123, 32, 45, 5, 6, 7, 1, 2, 34, 4, 3, 5, 7];
// console.log("majorityNum", majorityElement(nums2));

// // // MITask-J
// // findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(str: string): string {
//   const words: string[] = str.split(" ");
//   let longestWord: string = "";

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("I come from Uzbekistan"));
// console.log(findLongestWord("Nimadur yozilishi kerak tekshirish uchun"));

// MITask-K:
// countVowels("string") return 1;
function countVowels(str: string): number {
  const vowels: string[] = ["a", "o", "i", "e", "u"];
  let counter: number = 0;
  for (const letter of str) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels("string"));
console.log(countVowels("tekshirish"));
