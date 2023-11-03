function bubbleSortDescending(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                // Swap arr[i] and arr[i+1]
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const arr = [5, 3, 8, 1, 4, 2];
const sortedArr = bubbleSortDescending(arr);
console.log(sortedArr); // Outputs: [8, 5, 4, 3, 2, 1]
