describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should test for divisibility by three", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBeTruthy();
  });

  it("should return false if given a number not divisible by three", function() {
    expect(fizzbuzz.isDivisibleByThree(4)).toBeFalsy();
  });

  it("should test the divisibility by five", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBeTruthy();
  });

  it("should return false if given number not divisible by five", function() {
    expect(fizzbuzz.isDivisibleByFive(7)).toBeFalsy();
  });

  it("should return true if a number is divisible by both three and five", function() {
    expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBeTruthy();
  });

  it("should return false if a number is not divisible by both three and five", function() {
    expect(fizzbuzz.isDivisibleByThreeAndFive(19)).toBeFalsy();
  });

});
