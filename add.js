function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const split = numbers.split("\n");
    delimiter = new RegExp(split[0].slice(2));
    numbers = split[1];
  }

  const parts = numbers.split(delimiter);
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}
module.exports = {add};



