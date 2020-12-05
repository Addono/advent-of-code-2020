import { loadDataAsStringArray, max } from '../util';
import boardingPassToSeatId from './boardingPassToSeatId'

const data: string[] = loadDataAsStringArray('data/day05.txt')

const seatIds: number[] = data.map(boardingPassToSeatId)
  
// Find the highest seat id
console.log("Day 5", "Part 1", seatIds.reduce(max))

const missingSeatId = seatIds
  .sort() // Sort the seat ids in ascending order
  .reduce((v1, v2) => v1 + 1 === v2 ? v2 : v1) // find the seat id of the one before the missing one
  + 1 // add one to get the id of the missing seat

console.log("Day 5", "Part 2", missingSeatId)
