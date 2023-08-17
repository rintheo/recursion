const fibs = (n) => {
  const fibsArray = [];
  for (let i = 0; i < n; i += 1) {
    if (i < 2) {
      fibsArray.push(i);
    } else {
      fibsArray.push(fibsArray[i - 2] + fibsArray[i - 1]);
    }
  }
  return fibsArray;
};

const execute = () => {
  if (process.argv.length < 3 && !Number.isInteger(process.argv[2])) {
    console.error('Please enter an integer as an argument. (e.g. node fibonacci 8)');
    return;
  }
  if (process.argv.length > 3) {
    console.error('Too many arguments. Please enter only one integer as an argument. (e.g. node fibonacci 8)');
    return;
  }
  console.log(fibs(Number(process.argv[2])));
};

execute();
