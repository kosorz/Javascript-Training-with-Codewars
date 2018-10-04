function shuffleIt(arr,...swapPaterns){
    for (var i=0; i<swapPaterns.length; i++){
        [arr[(swapPaterns[i])[0]], arr[(swapPaterns[i])[1]]] = [arr[(swapPaterns[i])[1]], arr[(swapPaterns[i])[0]]];
    }
    return arr;
}