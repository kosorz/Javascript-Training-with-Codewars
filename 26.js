function isolateIt(arr) {
    return arr.map((el)=>el.length%2===0? el.slice(0, el.length/2) + "|" + el.slice(el.length/2) : el.slice(0, (el.length/2)) + "|" + el.slice((el.length/2)+1))
}