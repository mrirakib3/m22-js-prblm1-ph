let odd = [];
function avgOddArry(input){
  for(const number of input){
    if(number % 2 ===1){
      odd.push(number);
    }
  }
  let oddSum = 0;
  for(const number of odd){
    oddSum += number;
  }

  let oddSumAvg = oddSum / odd.length;

  return oddSumAvg;
}

array = [15, 12, 31, 43, 5, 6];
console.log(avgOddArry(array));