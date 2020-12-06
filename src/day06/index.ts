import { loadDataAsString, sum } from "../util";
import uniqueAnswersInGroup from "./uniqueAnswersInGroup";

const data: string[] = loadDataAsString("data/day06.txt").split("\n\n");

const part1 = data.map(uniqueAnswersInGroup).reduce(sum, 0);

console.log("Day 6", "Part 1", part1);

const sharedAnswerCount = data
  .map(
    (group) =>
      group
        .split("\n") // Split each group into the individual submitions
        .map((entry) => new Set(entry)) // Remove duplicates
        .reduce((g1, g2) => new Set([...g1].filter((x) => g2.has(x)))).size // Find the characters which are shared // Get the amount of shared answers
  )
  .reduce(sum, 0);

console.log("Day 6", "Part 2", sharedAnswerCount);
