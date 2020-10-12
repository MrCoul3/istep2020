let arr = [1, 12, 34, 11, 10, 7];
function compareNum(a, b) {
    return a-b;
}
arr.sort(compareNum);
console.log(arr);