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

/**  Project Standards:
 *  - Logging standards
 *  - Naming standars:
 *      function, method, variable => CAMEL      goHome
 *      class => PASCAL                          MemberService
 *      folder, file => KEBAB                    router-admin.ts
 *      css => SNAKE                             button_style
 *  - Error handling
 **/
