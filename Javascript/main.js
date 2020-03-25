// function boolToWord( bool ){
//   return bool === true ? 'Yes' : 'No';
// }

// boolToWord(true);

// function checkPalindrome(inputString) {
//   const middle = Math.floor(inputString.length/2);
//   let count = 0;
//   for(let i = 0; i < middle; i++) {
//       if(inputString[i] === inputString[inputString.length - 1 - i]) {
//           count++;
//       }
//   }
//   return count === middle ? true : false
// }

// checkPalindrome = (inputString) => {
  // console.log(inputString.split('').reverse());
  // return inputString === inputString.split('').reverse().join('');
//   return [...inputString].reverse().join('') === inputString
// }
// console.log(checkPalindrome("aabaa"));
// console.log(checkPalindrome("aaaa"));
// console.log(checkPalindrome("aaba"));
// console.log(checkPalindrome("a"));

// centuryFromYear = (year) => {
//   return Math.ceil(year / 100)
// }

// console.log(centuryFromYear(700));
// console.log(centuryFromYear(701));
// console.log(centuryFromYear(1900));
// console.log(centuryFromYear(2020));

// function adjacentElementsProduct(inputArray) {
//   let max = inputArray[0] * inputArray[1];
//   for(let i = 2; i < inputArray.length; i++) {
//       if((inputArray[i-1] * inputArray[i]) > max) {
//         max = (inputArray[i-1] * inputArray[i]);
//       }
//   }
//   return max;
// }

// function adjacentElementsProduct(inputArray) {
//   let max = inputArray[0] * inputArray[1];
//   for(let i = 2; i < inputArray.length; i++) {
//     max = Math.max(max, inputArray[i-1] * inputArray[i]);
//   }
//   return max;
// }

// function adjacentElementsProduct(arr) {
//   return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
// }

// adjacentElementsProduct([-1, -2]);

// console.log(adjacentElementsProduct([-1, -2]));
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

// function shapeArea(n) {
//   let result;
//   if(n === 1) {
//     result = 1;
//   } else {
//     let temp = 0;
//     for (let i = 1; i < (n + n -1); i += 2) {
//       temp += i;
//       result = (n + n -1) + temp*2;
//     }
//   }
//   return result;
// }

// function shapeArea(n) {
//   return n*n + (n-1)*(n-1);
// }


// console.log(shapeArea(1));
// console.log(shapeArea(2));
// console.log(shapeArea(3));
// console.log(shapeArea(4));

// function getCount(str) {
//   var vowelsCount = 0;
  
//   // enter your majic here
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//       vowelsCount++;
//     }
//   }
  
//   return vowelsCount;
// }

// function makeArrayConsecutive2(statues) {
//   let min = statues[0];
//   let max = statues[statues.length-1];
//   for(let i = 0; i<statues.length; i++) {
//     if(statues[i] < min) {
//       min = statues[i];
//     }
//     if(statues[i] > max) {
//       max = statues[i];
//     }
//   }
//   return (max-min-statues.length)+1;
// }

// function makeArrayConsecutive2(sequence) {
//   return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
// }

// function firstDuplicate(a) {
//   const seen = [];
//   let result = -1
//   for(let i = 0; i < a.length; i++) {
//     if(seen.indexOf(a[i]) === -1) {
//       seen.push(a[i]);
//     } else {
//       return a[i]
//     }
//   }
//   return result;
// }


// function firstDuplicate(a) {
//   for(let i=0; i<a.length; i++) {
//     if(a[Math.abs(a[i])-1]<0) {
//       return Math.abs(a[i]);
//     } else {
//       a[Math.abs(a[i])-1] = -a[Math.abs(a[i])-1]
//     }
//   }
//   return -1;
// }
// firstDuplicate = a => {
//   r = new Set()
//   for (e of a)
//       if (r.has(e))
//           return e
//       else
//           r.add(e)
//   return -1
// }
// function firstDuplicate(a) {
//   var found={}
//   for(var i=0; i<a.length;i++){
//       if(found.hasOwnProperty(a[i]))
//           return a[i]
//       found[a[i]]=true
//   }
//   return -1
// }

// function almostIncreasingSequence(sequence) {
//   let count = 0;
//   for (let i = 1; i < sequence.length; i++) {
//     // console.log(i,'-',sequence, 'count:', count);
//     if(sequence[i] <= sequence[i-1]) {
//       count++;
//     }
//     if(count > 1) {
//       return false;
//     }
//     if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
      
//   }
//   return true;
// }

// function almostIncreasingSequence(sequence) {
//   let count = 0;
//   let i=0
//   while (i < sequence.length - 1) {
//     console.log(i,'-',sequence, 'count:', count);
//     if(sequence[i] >= sequence[i+1]) {
//       count++;
//     }
//     i++;
//   }
//   if(count > 1) {
//     // console.log(count);
//     return false;
//   } else 
//   return true;
// }


// function firstBadPair(sequence, k) {
//     if (0 < k < (sequence.length) - 1){
//       if (sequence[k-1] >= sequence[k+1]) {
//           return k-1;
//       }
//     }
//     for(let i = k+1; i < sequence.length; i++) {
//       if (sequence[i] >= sequence[i+1]) {
//             return i
//           }
//     }
//     return -1
//   }

// function almostIncreasingSequence(sequence) {
//     j = firstBadPair(sequence, -1);
//     if (j == -1)
//       return true;
//     if (firstBadPair(sequence, j) == -1)
//       return true;
//     if (firstBadPair(sequence, j+1) == -1)
//       return true;
//     return false;
//   }
  

// console.log(makeArrayConsecutive2([6, 2, 3, 8]));
// console.log(makeArrayConsecutive2([0, 3]));
// console.log(makeArrayConsecutive2([5, 4, 6]));
// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
// firstDuplicate([2, 1, 3, 5, 3, 2]);
// almostIncreasingSequence([10, 1, 2, 3, 4, 5]);
// console.log(almostIncreasingSequence([1, 2, 1, 2]));
// console.log('\nThese should be True.')
// console.log(almostIncreasingSequence([]))
// console.log(almostIncreasingSequence([1]))
// console.log(almostIncreasingSequence([1, 2]))
// console.log(almostIncreasingSequence([1, 2, 3]))
// console.log(almostIncreasingSequence([1, 3, 2]))
// console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]))
// console.log(almostIncreasingSequence([0, -2, 5, 6]))
// console.log(almostIncreasingSequence([1, 1]))
// console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]))
// console.log(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]))
// console.log(almostIncreasingSequence([1, 2, 2, 3]))

// console.log('\nThese should be False.')
// console.log(almostIncreasingSequence([1, 3, 2, 1]))
// console.log(almostIncreasingSequence([3, 2, 1]))
// console.log(almostIncreasingSequence([1, 1, 1]))

// function allLongestStrings(inputArray) {
//   // let max = Math.max(...inputArray.map(x => x.length));
//   max = inputArray[0].length;
//   for(let i = 1; i < inputArray.length; i++) {
//     if(inputArray[i].length > max) max = inputArray[i].length;
//   }
//   return inputArray.filter(e => e.length === max);
// }

// console.log(allLongestStrings(["aba", 
// "aa", 
// "ad", 
// "vcd", 
// "aba"]));

function commonCharacterCount(s1, s2) {
  
}
