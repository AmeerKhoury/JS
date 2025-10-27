function allAnagrams(str: string): string[] {
  if (str.length === 0) return [];

  let result: string[] = [""];

  for (const char of str) {
    const temp: string[] = [];

    for (const word of result) {
      for (let i = 0; i <= word.length; i++) {
        const newChar = word.slice(0, i) + char + word.slice(i);
        temp.push(newChar);
      }
    }
    result = temp;
  }

  return [...new Set(result)];
}

console.log(allAnagrams("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]
