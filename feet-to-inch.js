function feetInch(input){
  const feet = parseInt(input / 12);
  const inch = input % 12;
  return `${feet} feet, ${inch} inch`;
}
console.log(feetInch(800));