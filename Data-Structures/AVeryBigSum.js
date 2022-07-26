/* 

In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements
Input Format

The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.

Constraints


Sample Input

5
1000000001 1000000002 1000000003 1000000004 1000000005
Output

5000000015   */


/*
Time Complexity: Because each element in the array will be visited only one time, the time complexity is O(n), where n represents the number of elements in the array.

Space Complexity: This approach will use a constant amount of space, making the space complexity O(1). 

*/


function aVeryBigSum(ar) {
    return ar.reduce((acc, num) => acc += num);
}


function aVeryBigSum(ar) {
    let totalSum = 0;
    for (let i = 0; i < ar.length; i++) {
        totalSum += ar[i];
    }
    return totalSum;
}

function aVeryBigSum(ar) {
    let sum = 0;
    ar.forEach(s =>{
    sum += s;
  });
  return sum;
}
