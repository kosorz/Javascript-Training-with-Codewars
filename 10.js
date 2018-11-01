function pickIt(arr) {
    var odd=[],even=[];
    for (var i = 0; i < arr.length; i++){
        (arr[i]%2 === 1)?odd.push(arr[i]):even.push(arr[i]);
    }
    return [odd,even];
}