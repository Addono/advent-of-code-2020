import boardingPassToSeatId, {resolveBinaryEncoding} from './boardingPassToSeatId';

describe('boardingPassToSeatId', () => {
  it('passes example BFFFBBFRRR', () => {
    // arrange
    const input = "BFFFBBFRRR"

    // act
    const result = boardingPassToSeatId(input)

    // assert
    expect(result).toEqual(567)
  })

  it('passes example FFFBBBFRRR', () => {
    // arrange
    const input = "FFFBBBFRRR"

    // act
    const result = boardingPassToSeatId(input)

    // assert
    expect(result).toEqual(119)
  })

  it('passes example BBFFBBFRLL', () => {
    // arrange
    const input = "BBFFBBFRLL"

    // act
    const result = boardingPassToSeatId(input)

    // assert
    expect(result).toEqual(820)
  })
})

describe('resolveBinaryEncoding', () => {
  it('parses RRR', () => {
    // arrange
    const input = "RRR"
    const trueChar = "R"

    // act
    const result = resolveBinaryEncoding(input, "R".charCodeAt(0))

    // assert
    expect(result).toEqual(7)
  })
})