// Task indexOf()
/*let array = [1,2,3,4,5];

function lastIndexOf(arr, value) {
    for (let i = 0; i <= arr.length -1; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
}
console.log (lastIndexOf(array,7))

// Task lastIndexOf()
/*let array = [1,2,3,4,5];

function lastIndexOf(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
}
console.log (lastIndexOf(array,2))
*/
// Task find()
/*let arr = [1,2,3,4,5];

const find = function(arr,callback) {
  for (let i = 0;i <arr.length;i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i]
    }
  }
}
console.log(find([1,2,3,3,3,4,5],item =>item === 3));
*/

// Task findIndex()


// Task includes()



// Task every()
let arr = [1,2,3,4,5];

function every(a) {

  for (let i = 0; i > arr.length; i++){
    if (arr[i] > 0) {
    return true;
  } else {
    return false;
  }
  return console.log();
}
every(arr);
