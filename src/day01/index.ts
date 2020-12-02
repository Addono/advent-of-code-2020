import { loadData } from "../util"

const data = loadData('data/day01.txt')

const input = data.toString()
  .split("\n")
  .map(parseFloat)


for (let i = 0; i <= input.length; i++) {
  for (let j = i + 1; j <= input.length; j++) {
    const sumFirstTwo = input[i] + input[j]
    if (sumFirstTwo == 2020) {
      console.log("Day 1", "Part 1", input[i] * input[j])
    }

    for (let k = j + 1; k <= input.length; k++) {
      const sumFirstThree = sumFirstTwo + input[k]
      if (sumFirstThree == 2020) {
        console.log("Day 1", "Part 2", input[i] * input[j] * input[k])
      }
    }
  }
}
