import { sum } from "../util"

export const resolveBinaryEncoding = (input: string, trueChar: number): number => (
  Buffer.from(input)
    .reverse() // Go from least-significant character to most significant
    .map((char, index) => (char === trueChar) ? 1 << index : 0)
    .reduce(sum, 0)
)

const boardingPassToSeatId = (boardingPass: string): number => (
  8 * resolveBinaryEncoding(boardingPass.slice(0, 7), "B".charCodeAt(0))
  + resolveBinaryEncoding(boardingPass.slice(7), "R".charCodeAt(0))
)

export default boardingPassToSeatId
