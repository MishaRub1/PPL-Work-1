import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = (s: string): number =>
    stringToArray(s).map((c: string) => c.toLowerCase()).filter((c: string) => vowels.includes(c)).length;
    
/* Question 2.2 */

const lettersAndDigits: string[] = stringToArray("abcdefghijklmnopqrstuvwxyz0123456789");
export const isPalindrome = (text: string): boolean => {
    const chars: string[] = stringToArray(text)
        .map((c: string) => c.toLowerCase())
        .filter((c: string) => lettersAndDigits.includes(c));
    const forward: string = chars.reduce((acc: string, curr: string) => acc + curr, "");
    const backward: string = chars.reduce((acc: string, curr: string) => curr + acc, "");
    return forward === backward;
}

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => undefined as any;;
