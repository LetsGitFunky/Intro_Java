// Your code here
function range(start, end) {
    if (start === end) {
        return [start];
    }
    return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr[0] + sumRec(arr.slice(1, arr.length));
}

function exp1(b, n) {
    if (n === 0) {
        return 1;
    }
    return b * exp1(b, n-1);
}

function exp2(b, n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return b;
    }
    if (n%2 === 0) {
        return exp2(b, n/2) **2;
    }else {
        return b * (exp2(b, (n-1)/2) **2);
    }
}