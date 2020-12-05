import { loadDataAsStringArray, max } from '../util';
import boardingPassToSeatId from './boardingPassToSeatId'

const data: string[] = loadDataAsStringArray('data/day05.txt')

const part1 = data
  .map(boardingPassToSeatId)
  .reduce(max)  // Find the highest seat id

console.log("Day 5", "Part 1", part1)