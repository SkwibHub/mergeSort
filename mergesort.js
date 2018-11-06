
function split(wholeArray) {
    if (wholeArray.length <= 1) {
        return wholeArray;
    }
    let firstHalf = [];
    let secondHalf = [];
    let fulcrum = Math.floor(wholeArray.length / 2);
    firstHalf = wholeArray.slice(0, fulcrum);
    secondHalf = wholeArray.slice(fulcrum, wholeArray.length);



    return [firstHalf,secondHalf];
}

function merge(firstHalf, secondHalf) {

    let finalArr = [];
    while(firstHalf.length > 0 && secondHalf.length > 0){
        if(firstHalf[0] < secondHalf[0]){
            finalArr.push(firstHalf[0]);
            firstHalf.shift();
        } else if (firstHalf[0] >= secondHalf[0]) {
            finalArr.push(secondHalf[0]);
            secondHalf.shift();
        }
    }

    if(firstHalf.length === 0){
        return [...finalArr, ...secondHalf];     
    } 
    if(secondHalf.length === 0){
        return [...finalArr, ...firstHalf];  
    }
}



function mergeSort(array) {
    let tempArray = [];

    if (array.length <= 1) {
        return array;
    }
   
    tempArray = split(array);

    let result = merge(mergeSort(tempArray[0]),mergeSort(tempArray[1]));

    console.log(result);
    return result;
} 