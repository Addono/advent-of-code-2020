import uniqueAnswersInGroup from "./uniqueAnswersInGroup";
describe("uniqueAnswersInGroup", () => {
  it("abc returns 3", () => {
    // arrange
    const input = "abc";

    // act
    const result = uniqueAnswersInGroup(input);

    // assert
    expect(result).toEqual(3);
  });

  it("a b c returns 3", () => {
    // arrange
    const input = "a\nb\nc";

    // act
    const result = uniqueAnswersInGroup(input);

    // assert
    expect(result).toEqual(3);
  });

  it("ab ac returns 3", () => {
    // arrange
    const input = "ab\nac";

    // act
    const result = uniqueAnswersInGroup(input);

    // assert
    expect(result).toEqual(3);
  });

  it("a a a a returns 1", () => {
    // arrange
    const input = "a\na\na\na";

    // act
    const result = uniqueAnswersInGroup(input);

    // assert
    expect(result).toEqual(1);
  });

  it("b returns 1", () => {
    // arrange
    const input = "b";

    // act
    const result = uniqueAnswersInGroup(input);

    // assert
    expect(result).toEqual(1);
  });
});
