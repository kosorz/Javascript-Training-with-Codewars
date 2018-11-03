function whatNumberIsIt(n) {
    var num = new Number(n);
    if (isNaN(num)) {
        return "Input number is Number.NaN"
    }
    if (num == Number.MAX_VALUE){
        return "Input number is Number.MAX_VALUE"
    }
    if (num > Number.MAX_VALUE){
        return "Input number is Number.POSITIVE_INFINITY"
    }
    if (num == Number.MIN_VALUE){
        return "Input number is Number.MIN_VALUE"
    }
    if (num < Number.MIN_VALUE){
        return "Input number is Number.NEGATIVE_INFINITY"
    }
    return `Input number is ${num}`
}