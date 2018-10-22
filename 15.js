function howManySmaller(arr,n){
    var i = 0;
    arr.forEach((el) => {
        if (el.toPrecision(3)<n) {
            i++;
        }
    })
    return i;
}