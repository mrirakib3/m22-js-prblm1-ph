function noDuplicateArray(input){
  const unique =[];
  for (const item of input){
    if (unique.includes(item) === false){
      unique.push(item);
    }
  }
  return unique;
}

const array = [1, 1, 2, 3, 4, 5, 5, 7];
console.log(noDuplicateArray(array));