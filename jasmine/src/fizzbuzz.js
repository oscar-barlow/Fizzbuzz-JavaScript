function Fizzbuzz() {
}

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0;
};

Fizzbuzz.prototype.isDivisibleByThreeAndFive = function(number) {
  return this.isDivisibleByThree(number) && this.isDivisibleByFive(number);
};
