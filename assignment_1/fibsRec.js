const fibsRec = (n) => {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
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

// (3) [0, 1, 1]
