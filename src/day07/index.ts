import { reverse } from "dns";
import { loadDataAsStringArray, sum } from "../util";

const data: string[] = loadDataAsStringArray("data/day07.txt");

const lineOfDataToInput = (line: string) => {
  const [start, end] = line.split(" contain ");

  const targetBag = start.substring(0, start.length - " bags".length);
  const containingBags = end
    .substring(0, end.length - 1) // Remove trailing dot
    .split(", ")
    .filter((bagInput) => !bagInput.endsWith("no other bags"))
    .map((bagInput) => {
      const splitted = bagInput.split(" ");

      return {
        count: parseFloat(splitted[0]),
        bag: `${splitted[1]} ${splitted[2]}`,
      };
    });

  return {
    targetBag,
    containingBags,
  };
};

const input = data.map(lineOfDataToInput);

const reverseMapping = new Map<string, Set<string>>();

// Fill our reverse mapping
input.forEach(({ targetBag, containingBags }) => {
  containingBags.forEach(({ bag }) => {
    const previousValue = reverseMapping.get(bag) ?? new Set();

    previousValue.add(targetBag);

    reverseMapping.set(bag, previousValue);
  });
});

const bagsWhichCanContainBagType = (target: string): Set<string> => {
  const bags = reverseMapping.get(target) ?? new Set();

  const subBags = [...bags].map(bagsWhichCanContainBagType);
  const combined = subBags.reduce((a, b) => new Set([...a, ...b]), bags);

  return combined;
};

console.log("Day 7", "Part 1", bagsWhichCanContainBagType("shiny gold").size);

const containingBags = (target: string): number => {
  return (
    input
      .find(({ targetBag }) => targetBag === target)
      ?.containingBags.map(({ count, bag }) => containingBags(bag) * count)
      .reduce(sum, 1) ?? 1
  );
};

console.log("Day 7", "Part 2", containingBags("shiny gold") - 1);
