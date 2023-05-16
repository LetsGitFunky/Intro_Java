// Your code here
Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;
}

Array.prototype.myReduce = function(callback, initialValue = false) {
    let acc;
    let i;
    if (initialValue != false) {
        acc = initialValue;
        i = 0;
    } else {
        acc = this[0];
        i = 1;
    }
    for (i; i < this.length; i++) {
        let el = this[i];
        acc = callback(acc, el);
    }
    return acc;
}