function threeInOne(arr){
    const output = [];
    for (let i=0; i<arr.length; i=i+3) {
        const tmp = arr.slice();
        output.push(tmp.splice(i,3).reduce((acc, currentValue) => acc + currentValue));
    }
    return output;
}