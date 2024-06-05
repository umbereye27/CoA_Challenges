 subarraySum = (array, target) => {
    let left = 0;
    let currentSum = 0;
    let n = array.length;

    for (let right = 0; right < n ; right++) {
        currentSum += array[right];

        while (currentSum > target) {
            currentSum -= array[left];
            left++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

const array = [9,4,2,1,6,7];
const target = 14;
console.log(subarraySum(array, target)); 
