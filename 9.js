function padIt(str,n) {
    var num = 1;
    do{
        num % 2 === 1 ?
            str = "*" + str :
            str = str + "*"
        num++;
    }while (num<=n)
    return str;
}