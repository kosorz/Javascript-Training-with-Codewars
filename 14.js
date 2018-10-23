function colorOf(r,g,b){
    var arr = [];
    arr.push(r,g,b);
    var text = '#'
    arr.forEach((el) => {
        tmp = (el.toString(16))
        if(tmp.length == 2){
            text += tmp
        } else {
            text += '0' + tmp
        }
    })
    return text
}