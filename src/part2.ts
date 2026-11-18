import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = (s: string): number =>
    stringToArray(s).map((c: string) => c.toLowerCase()).filter((c: string) => vowels.includes(c)).length;
    
/* Question 2.2 */

  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => undefined as any;;
