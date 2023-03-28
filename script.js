let numbers = [2,3,4,6,9,12,13,15,18,20];
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if(num % 3 === 0 && num % 2 !==0) {
    console.log(num)
    continue;
  }
}