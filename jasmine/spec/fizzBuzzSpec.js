describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should test for divisibility by three", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
  });

});
