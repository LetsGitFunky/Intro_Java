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

function fibonacci(n) {
    if (n === 1) return [1];
    if (n === 2) return [1,1];

    let result = fibonacci(n-1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
}

function deepDup(arr) {
    if (arr instanceof Array === false) return arr;
    return arr.map(deepDup);
}

function bsearch(arr, target, left = 0, right = (arr.length - 1)) {
    if (left > right) return - 1;

    let mid = Math.floor((right + left) / 2);

    if (arr[mid] === target) return mid;

    if (target < arr[mid]) {
        return bsearch(arr, target, left, mid - 1)
    } else {
        return bsearch(arr, target, mid+1, right);
    }
}

function mergesort(arr) {
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);
    // console.log(mid)
    let left = arr.slice(0, mid);
    // console.log(left)
    let right = arr.slice(mid);
    // console.log(right)
    left = mergesort(left);
    right = mergesort(right);
    return merge(left, right);
}

function merge(left, right) {
    let result = [];

    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }

    while (l < left.length) {
        result.push(left[l]);
        l++;
    }

    while (r <right.length) {
        result.push(right[r]);
        r++;
    }
    return result;
}

function subsets(arr) {
    if (arr.length === 1) return [[], [arr[0]]];

    let temp = subsets(arr.slice(1));

    let result = deepDup(temp);

    temp.myEach(function(el) {
        el.unshift(arr[0])
    })

    result = result.concat(temp);

    return result;
}
