function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const split = numbers.split("\n");
    delimiter = new RegExp(split[0].slice(2));
    numbers = split[1];
  }

  const parts = numbers.split(delimiter);
  const negatives = parts.filter(num => parseInt(num) < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = {add};