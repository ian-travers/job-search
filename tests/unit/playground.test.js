import { evenOrOdd } from "@/playground";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("substact two numbers", () => {
    expect(10 - 8).toBe(2);
    expect(4 - 1).toBe(3);
  });

  describe("even or odd", () => {
    describe("when number is even", () => {
      it("indicates the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });

    describe("when number is odd", () => {
      it("indicates the number is odd", () => {
        expect(evenOrOdd(5)).toBe("Odd");
      });
    });
  });
});
