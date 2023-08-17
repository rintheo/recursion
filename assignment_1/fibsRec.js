const fibsRec = (n) => {
  if (n <= 0) return [];
  const array = fibsRec(n - 1);
  if (n === 1 || n === 2) {
    array.push(n - 1);
  } else {
    array.push(array[n - 3] + array[n - 2]);
  }
  return array;
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
  console.log(fibsRec(Number(process.argv[2])));
};

execute();
