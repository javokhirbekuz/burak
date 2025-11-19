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

// // MITask-K:
// // countVowels("string") return 1;
// function countVowels(str: string): number {
//   const vowels: string[] = ["a", "o", "i", "e", "u"];
//   let counter: number = 0;
//   for (const letter of str) {
//     if (vowels.includes(letter)) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countVowels("string"));
// console.log(countVowels("tekshirish"));

// // MITask-L:
// // reverseSentence("we like coding!") return "ew ekil gnidoc";
// function reverseSentence(str: string) {
//   const words: string[] = str.split(" ");
//   let result: any = [];
//   for (const word of words) {
//     result.push(word.split("").reverse().join(""), " ");
//   }
//   return result.join("");
// }

// console.log(reverseSentence("we like coding!"));
// console.log(reverseSentence("Nimadur yozilishi kerak tekshirish uchun"));

// // MITask-M:
// // getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
// function getSquareNumbers(arr: number[]): object[] {
//   const result: object[] = arr.map((ele) => ({
//     number: ele,
//     square: ele * ele,
//   }));
//   return result;
// }
// console.log("result:", getSquareNumbers([2, 13, 25]));

// // MITask-N:
// // palindromCheck("dad") return true;  palindromCheck("son") return false;
// function palindromCheck(str: string) {
//   const reversedString = str.split("").reverse().join("");
//   if (reversedString === str) return true;
//   else return false;
// }

// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));

// // MITask-O:
// // calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
// function calculateSumOfNumbers(data: any[]) {
//   return data.reduce(
//     (tot, ele) => (typeof ele === "number" ? (tot += ele) : tot),
//     0
//   );
// }

// console.log(
//   calculateSumOfNumbers(["10", "10", { son: 10 }, true, 35, 45, -100])
// );

// // MITask-P:
// // objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
// const objectToArray = (data: { [key: string]: any }) => {
//   return Object.keys(data).map((key) => [key, data[key]]);
// };

// console.log(objectToArray({ a: 10, b: 20 }));
// console.log(objectToArray({ a: 10, b: 20, men: "salom" }));

// // MITask-Q:
// // hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false
// function hasProperty(obj: object, prop: string): boolean {
//   return prop in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));

// // MITask-R:
// // calculate("1+3") return 4;

// function calculate(str: string): number {
//   const numbers: string[] = str.split("+");
//   const result = numbers.reduce((acc, ele) => {
//     return (acc += Number(ele));
//   }, 0);
//   return result;
// }

// console.log(calculate("1+ 33"));
// console.log(calculate("11 +23"));
// console.log(calculate("14+53"));
// console.log(calculate("18+31"));

// // MITask-S:
// // missingNumber([3, 0, 1]) return 2

// function missingNumber(nums: number[]): number {
//   const leng = nums.length;
//   const expectedSum = (leng * (leng + 1)) / 2;
//   const actualSum = nums.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// console.log(missingNumber([0]));

// // MITask-T:
// // MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// };

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// console.log(
//   mergeSortedArrays(
//     [1231, 1231, 231, 231, 23],
//     [5, 6756, 75, 6756, 743, 534, 5345]
//   )
// );

// MITask-U:
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
function sumOdds(number: number): number {
  const arr = [...Array(number).keys()].filter((ele) => ele % 2 == 1);
  return arr.length;
}

console.log(sumOdds(9));
console.log(sumOdds(11));
