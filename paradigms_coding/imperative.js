const arr = [2, 6, 12, 9, 2, 1, 8, 123, 6];

function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
}

selectSort(arr);
console.log(arr);