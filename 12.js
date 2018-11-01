function giveMeFive(obj) {
    var five = new Array();
    for (var key in obj){
        if (key.length === 5) {
            five.push(key);
        }
        if (obj[key].length === 5){
            five.push(obj[key]);
        }
    }
    return five;
}