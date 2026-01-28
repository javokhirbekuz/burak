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

// // MITask-U:
// // MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
// function sumOdds(number: number): number {
//   const arr = [...Array(number).keys()].filter((ele) => ele % 2 == 1);
//   return arr.length;
// }

// console.log(sumOdds(9));
// console.log(sumOdds(11));

// // MITask-V:
// // Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// // MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
// interface T {
//   [key: string]: number;
// }
// function countChars(str: string): T {
//   const result: T = {};
//   for (const letter of str.split("")) {
//     if (!result[letter]) result[letter] = 1;
//     else result[letter] += 1;
//   }
//   return result;
// }

// console.log(countChars("hello"));

// // MITask-W:
// // Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// // MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]
// // const chunkArray = function (arr: number[], n: number): number[][] {
// //   let counter = 0;
// //   const result = [];
// //   while (Math.ceil(arr.length / n) > counter) {
// //     result.push(arr.slice(counter * n, counter * n + n));
// //     counter++;
// //   }
// //   return result;
// // };

// const chunkArray = function (arr: number[], n: number) {
//   const result = [];
//   for (let i = 0; i < arr.length; i = i + n) {
//     result.push(arr.slice(i, i + n));
//   }
//   return result;
// };
// console.log(chunkArray([6, 2, 1, 4, 2, 3, 4, 6, 9], 2));

// console.log(chunkArray([6, 2, 1], 2));

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// // MITask-X
// // MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// const countOccurrences = (object: {}, prop: string): number => {
//   let count = 0;
//   function helper(value: any) {
//     if (value && typeof value === "object") {
//       for (const key in value) {
//         if (key === prop) {
//           count += 1;
//         }
//         helper(value[key]);
//       }
//     }
//   }
//   helper(object);
//   return count;
// };

// console.log(
//   countOccurrences(
//     {
//       model: "Bugatti",
//       steer: { model: "HANKOOK", size: 30 },
//       tyre: { model: { model: "Nexen", year: 2025 }, size: 18 },
//     },
//     "model"
//   )
// );

// // MITask-Y:
// // MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter((ele) => arr2.includes(ele));
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

// // MITask-Z:
// // MASALAN: sumEvens([1,2,3]) return 2

// function sumEvens(arr: number[]): number {
//   return arr.reduce((acc, ele) => (ele % 2 === 0 ? acc + ele : acc), 0);
// }
// console.log(sumEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// // MITask-ZA:
// // MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// function sortByAge(arr: { age: number }[]): { age: number }[] {
//   return arr.sort((a, b) => a.age - b.age);
// }

// console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));

// // MITask-ZC:
// // MASALAN: celsiusToFahrenheit(0) return 32

// const celsiusToFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;

// console.log(celsiusToFahrenheit(0));

// // MITask-ZD:
// // MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

// function changeNumberInArray(
//   num: number,
//   arr: number[],
//   newValue: number
// ): number[] {
//   return arr.map((ele: number, i: number) => (i === num ? newValue : ele));
// }
// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));

// // MITask-ZE:
// // MASALAN: removeDuplicate('stringg') return 'string'

// function removeDuplicate(str: string): string {
//   return str.split("").reduce((acc, char) => {
//     return acc.includes(char) ? acc : acc + char;
//   }, "");
// }

// console.log(removeDuplicate("stringg"));

// // MITask-ZF:
// // MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// function capitalizeWords(text: string): string {
//   return text
//     .split(" ")
//     .map((word) => {
//       if (word.length <= 2) {
//         return word;
//       }
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

// console.log(capitalizeWords("name should be a string"));

// // MITask-ZG:

// function toSnakeCase(str: string): string {
//   return str.trim().toLowerCase().replace(/\s+/g, "_");
// }

// console.log(toSnakeCase("name should be a string"));

// // MITask-ZH:
// function findDisappearedNumbers(arr: number[]): number[] {
//   if (arr.length === 0) return [];

//   const max = Math.max(...arr);
//   const numSet = new Set(arr);

//   return Array.from({ length: max }, (_, i) => i + 1).filter(
//     (num) => !numSet.has(num)
//   );
// }

// console.log(findDisappearedNumbers([1, 3, 4, 7]));

// // MITask-ZI:
// // MASALAN: delayHelloWorld("Hello World"); return "Hello World";

// function delayHelloWorld(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello World!");
//     }, 3000);
//   });
// }

// delayHelloWorld().then((result) => {
//   console.log(result);
// });

// // MITask-ZJ:
// // MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;
// function reduceNestedArray(arr: any[]): number {
//   return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
// }

// console.log(reduceNestedArray([1, [1, 2, [4]]])); // 8

// // MITask-ZK:
// function printNumbers(): void {
//   let index = 0;

//   const intervalId = setInterval(() => {
//     const num = (index % 5) + 1;
//     console.log(num);

//     index++;
//     if (index >= 5) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

// printNumbers();

// // MITask-ZL:
// // MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(str: string): string {
//     return str.toLowerCase().split(" ").join("-");
// }

// console.log(stringToKebab("I love Kebab"));

// // MITask-ZM:
// // MASALAN: squareDigits(9119) return "811181"
// function squareDigits(num: number): string {
// 	return num
// 		.toString()
// 		.split('')
// 		.map(digit => {
// 			const n = parseInt(digit);
// 			return (n * n).toString();
// 		})
// 		.join('');
//     }

// console.log(squareDigits(9119));

// // MITask-ZN:
// // MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4].

// function rotateArray<T>(arr: T[], k: number): T[] {
//     if (arr.length === 0 || k === 0) {
//         return arr;
//     }
//     const steps = k % arr.length;

//     if (steps === 0) {
//         return arr;
//     } return [...arr.slice(-steps), ...arr.slice(0, arr.length - steps)];
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 4));

// // MITask-ZO:
// // MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(str: string): boolean {
//     let count = 0;
//     for (const char of str) {
//         if (char === '(') {
//             count++;
//         } else if (char === ')') {
//             count--;
//             if (count < 0) {
//                 return false;
//             }
//         }
//     }
//     return count === 0;
// }

// console.log(areParenthesesBalanced("()string()ichida(qavslar)soni()balansda"));

// // MITask-ZP:
// // MASALAN: countNumberAndLetters("string152%\¥") return {number:3, letter:6}

// function countNumbersAndLetters(text: string) {
//   return {
//     numbers: (text.match(/\d/g) || []).length,
//     letters: (text.match(/[a-zA-Z]/g) || []).length
//   };
// }

// console.log(countNumbersAndLetters("string152%¥"));

// // MITask-ZQ:
// // MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4].

// function findDuplicates(arr: number[]): number[] {
//   const countMap = new Map<number, number>();
//   const result: number[] = [];

//   for (const num of arr) {
//     const count = (countMap.get(num) || 0) + 1;
//     countMap.set(num, count);

//     if (count === 2) {
//       result.push(num);
//     }
//   }

//   return result;
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4, 3, 4, 2]));

// // MIask-ZR:
// // MASALAN: areArraysEqual([1, 2, 3], [3, 1, 2]) // true

// function areArraysEqual(arr1: number[], arr2: number[]): boolean {
//     if (arr1.length !== arr2.length) return false;
//     const sorted1 = [...arr1].sort((a, b) => a - b);
//     const sorted2 = [...arr2].sort((a, b) => a - b);

//     return sorted1.every((value, index) => value === sorted2[index]);
// }

// console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));


// // MITask-ZS:
// // MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4.

// function singleNumber(nums: number[]): number{
//     let result = 0;

//     for (const num of nums){
//         result ^= num
//     }
//     return result
// }

// console.log(singleNumber([4, 2, 1, 2, 1, 4, 5]))


// // MITask-ZT:
// // MASALAN: firstUniqueCharIndex("stamp") return 0.

// function firstUniqueCharIndex(str: string): number {
//     const map = new Map<string, number>();

//     for (const ch of str) {
//       map.set(ch, (map.get(ch) ?? 0) + 1);
//     }

//     for (let i = 0; i < str.length; i++) {
//       if (map.get(str[i]) === 1) {
//         return i;
//       }
//     }
//     return -1;
//   }

// console.log(firstUniqueCharIndex("stamp"))
// console.log(firstUniqueCharIndex("ssdiurdiu"))


// // MITask-ZU:
// // MASALAN: sumOfUnique([1,2,3,2]) return 4.

// function sumOfUnique(arr: number[]): number {
//     return arr
//       .filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
//       .reduce((sum, num) => sum + num, 0);
//   }

// console.log(sumOfUnique([1,2,3,2,3]) )


// MITask-ZV:
// MASALAN: moveZeroes([0, 1, 0, 3, 12]) return [1, 3, 12, 0, 0]

function moveZeroes(nums: number[]): number[] {
  const result: number[] = [];
  let zeroCount = 0;
  for (const num of nums) {
    if (num === 0) zeroCount++;
    else result.push(num);
  }
  return result.concat(Array(zeroCount).fill(0));
}


console.log(moveZeroes([0, 1, 0, 3, 12]))