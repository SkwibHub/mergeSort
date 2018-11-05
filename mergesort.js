
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

    /* your code here to define the firstHalf and secondHalf arrays */
    //firstHalf[0]  secondHalf[0]
    // finalArr.push(lesser of firstHalf[0] or second........)
    // push remaining if one array.length is 0;
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

    if (array.length < 1) {
        return array;
    }
   
    tempArray = split(array);

    return merge(mergeSort(tempArray[0]),mergeSort(tempArray[1]));
} 