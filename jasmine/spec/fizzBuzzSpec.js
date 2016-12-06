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

});
