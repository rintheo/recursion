const fibs = (n) => {
  if (n === 0) return [];
  if (n === 1) return [0];
  const array = [0, 1];
  for (let i = 2; i < n; i += 1) array.push(array[i - 1] + array[i - 2]);
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
  console.log(fibs(Number(process.argv[2])));
};

execute();
