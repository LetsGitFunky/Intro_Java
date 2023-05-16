Array.prototype.bubbleSort = function() {
    let result = [];
    this.forEach(function(el) {
        result.push(el);
    })
    let swapped = true;
    while (swapped === true) {
        swapped = false;
        for (let i = 0; i < result.length -1; i++) {
            if (result[i+1] < result[i]) {
                let temp = result[i];
                result[i] = result[i+1];
                result[i+1] = temp;
                swapped = true;
            }
        }
    }
    return result;
}

String.prototype.substrings = function() {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        let temp = "";
        for (let j = i; j < this.length; j++) {
            temp += this[j];
            result.push(temp);
        }
    }
    return result;
}


