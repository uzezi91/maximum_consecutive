function consecutive_1(arr = []){
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < arr.length) {
       if (arr[right] === 0) {
          if (right - left > max) {
             max = right - left
          };
          right++;
          left = right;
       } else {
          right++
       };
    };
    return right - left > max ? right - left : max;
 }