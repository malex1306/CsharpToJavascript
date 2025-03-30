function bubbleSort(arr){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log("Unsortiertes Array:", arr);
console.log("Sortiertes Array:", bubbleSort(arr));