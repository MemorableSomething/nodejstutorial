var _ = require('underscore');
var arr = [3,6,9,1,12];
console.log(arr[0]);
console.log(_.first(arr,2));
console.log(arr[arr.length-1]);
console.log(_.last(arr));
console.log(_.last(arr,2));
