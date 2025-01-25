function greatestCommonDivisorOfStrings(str1: string, str2: string) {
  const gcd = (a: number, b: number): number => {
    while (b) {
      console.log(a, b);
      [a, b] = [b, a % b];
    }
    return a;
  };

  const len1 = str1.length;
  const len2 = str2.length;
  console.log(len1, len2);
  const gcdLength = gcd(len1, len2);
  const candidate = str1.substring(0, gcdLength);
  console.log(gcdLength, candidate);
  const repeatStr = (str: string, times: number): string => {
    return Array(times).fill(str).join("");
  };

  if (
    repeatStr(candidate, len1 / gcdLength) === str1 &&
    repeatStr(candidate, len2 / gcdLength) === str2
  ) {
    return candidate;
  }
  return "";
}

console.log(greatestCommonDivisorOfStrings("ABCABC", "ABC")); // "ABC"
