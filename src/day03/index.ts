import { sum, loadDataAsStringArray, multiply } from '../util';

const data: string[] = loadDataAsStringArray('data/day03.txt')

const anglePart1: [number, number] = [3, 1]

const amountOfHits = (forrest: String[], [xAngle, yAngle]: [number, number]): number => {
  return forrest
    .filter((_, index) => (index % yAngle) === 0) // Remove all rows we jumped over
    .map((value, index) => value[(xAngle * index) % value.length]) // Get the character for each row
    .map(char => char === "#" ? 1 : 0) // See if the character is a tree
    .reduce(sum, 0) // Count the amount of trees
}

console.log("Day 3", "Part 1", amountOfHits(data, anglePart1))

const anglesPart2: [number, number][] = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
]

const part2: number = anglesPart2
  .map(angle => amountOfHits(data, angle))
  .reduce(multiply, 1)

console.log("Day 3", "Part 2", part2)
