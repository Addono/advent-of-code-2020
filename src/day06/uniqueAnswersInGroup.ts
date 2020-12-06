import { removeWhitespace } from "../util";

const uniqueAnswersInGroup = (group: string) => {
  const allAnswersInGroup = removeWhitespace(group);

  const allUniqueAnswersInGroup = new Set(allAnswersInGroup);

  return allUniqueAnswersInGroup.size;
};

export default uniqueAnswersInGroup;
