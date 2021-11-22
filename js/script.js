// Task indexOf()
let array = [1,2,3,4,5,6,7,'d',76,34,'t','yu'];

function IndexOf(arr, value) {
    for (let i = 0; i <= arr.length -1; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
}
console.log (IndexOf(array,34))

// Task lastIndexOf()
let array = [1,2,3,4,5,6,7,'d',76,34,'t','yu'];

function lastIndexOf(arr, value, fromIndex = null) {
  fromIndex === null ? fromIndex = arr.length -1 : null;
    for (let i = fromIndex; i >= 0; i--) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
}
console.log (lastIndexOf(array,'t'));

// Task find()

const find = function(arr,callback) {
  for (let i = 0;i <arr.length;i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i]
    }
  }
}
console.log(find([1,2,3,23,33,4,5],item =>item === 4));


// Task findIndex()

const findIndex = function(arr,callback) {
  for (let i = 0;i <arr.length;i++) {
    if (callback(arr[i], i, arr)) {
      return i
    }
  }
}
console.log(findIndex([1,2,3,23,33,4,5],item =>item === 4));

// Task includes()
const array = [1,2,3,4,5,6,7,'d',76,34,'t','yu']

function includes(arr, value) {
  for (let i = 0; i <= arr.length -1; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
console.log (includes(array,35))


<<<<<<< HEAD
// Решение нагуглил, я не понимаю как пользоваться функциями every и some.
  //как задавать нужные параметры.



// Task some()
const array = [1,2,3,4,5,6,7,'d',76,34,'t','yu']

let some = function(arr, callback, arg) {
  let i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    if (callback.call(arg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
console.log(some([1,2,3,4,5,6,7,'d',76,34,'t','yu'], item => item === 4));


// Task every()
let every = function(arr, callback, arg) {
  let i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    if (!callback.call(arg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
console.log(every([1,2,3,4,5,6,7,'d',76,34,'t','yu'], item => item === 4));





// Это я для себя записал
// task flat 
/*let arr = [[1,2,3],[1,[2,3]],[[[[1,2,3,4]]]]];

function flatFunc (paramArr, arrNew = []) {
    for (let i = 0; i < paramArr.length; i++) {
      if (Array.isArray(paramArr[i])) {
          flatFunc(paramArr[i],arrNew);
      } else {
        arrNew.push(paramArr[i]);
=======
// Task flat()
let arr = [[1, 2, 3], [1,[2, 3]], [[[[1, 2, 3, 4]]]]];

  function flatFunc (paramArr, arrNew = []) {
    for (let i = 0; i < paramArr.length; i++) {
      if (Array.isArray(paramArr[i])) {
           flatFunc(paramArr[i], arrNew)
      } else {
          arrNew.push(paramArr[i]);
>>>>>>> a4859a74bb43213df9684715b164e3f9a07c091f
      }
    }
    return arrNew;
}
<<<<<<< HEAD
console.log(flatFunc(arr));
*/
=======

console.log(flatFunc(arr));
     
>>>>>>> a4859a74bb43213df9684715b164e3f9a07c091f
