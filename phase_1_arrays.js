Array.prototype.uniq = function() {
    let result = [];
    this.forEach(function(el) {
        if (!result.includes(el)) {
            result.push(el);
        }

    })
    return result;
}

Array.prototype.twoSum = function() {
    let result = [];

    for (let i = 0; i < this.length - 1; i++) {
        // console.log(i)
        for (let j = i + 1; j < this.length; j++) {
            // console.log(j)
            if (this[i] + this[j] === 0) {
                // console.log(this[i], this[j])
                // console.log(i, j)
                let temp = []
                temp.push(i, j);
                // console.log(result)
                result.push(temp)
            }
        }
    }
    return result;
}

Array.prototype.transpose = function() {
    let result = [];

    for (let col = 0; col < this[0].length; col++) {
        let temp = [];

        for (let row = 0; row < this.length; row++) {
            temp.push(this[row][col])
        }

        result.push(temp)
    }
    return result
}
