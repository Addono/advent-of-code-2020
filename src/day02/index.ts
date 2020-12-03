import { exit } from "process"
import { loadData, sum } from "../util"

const data = loadData('data/day02.txt')

const input = data.toString()
  .split("\n")
  .map(line => {
    const res = line.match(/(\d+)-(\d+)\s(\w):\s(\w+)/)

    if (!res) {
      console.error(`Couldn't parse "${line}"`)
      exit(1)
    }

    return {
      minAmount: parseFloat(res[1]),
      maxAmount: parseFloat(res[2]),
      targetCharacter: res[3].charCodeAt(0),
      password: res[4],
    }
  })

const validCountPart1 = input.map(({ minAmount, maxAmount, targetCharacter, password }) => {
    const count = Buffer.from(password, "ascii")
      .map(char => char === targetCharacter ? 1 : 0)
      .reduce(sum, 0)

    if (minAmount <= count && count <= maxAmount) {
      return 1
    } else {
      return 0
    }
  })
  .reduce(sum, 0)

console.log("Day 2", "Part 1", validCountPart1)


const validCountPart2 = input.map(({ minAmount, maxAmount, targetCharacter, password }) => {
  const firstChar = password.charCodeAt(minAmount - 1)  // Adjust from 1-based indexing to 0-based
  const secondChar = password.charCodeAt(maxAmount - 1)

  if ((firstChar === targetCharacter || secondChar === targetCharacter) && firstChar !== secondChar) {
    return 1
  } else {
    return 0
  }
})
.reduce(sum, 0)

console.log("Day 2", "Part 2", validCountPart2)


