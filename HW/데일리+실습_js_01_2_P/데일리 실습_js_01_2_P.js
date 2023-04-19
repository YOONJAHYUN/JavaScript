words = ["level", "noon", "mom", "happy", "ssafy", "life"];

function palindrome(word) {
  let answer = "true";
  // word가 회문인지 아닌지 판별
  if (word.split("").reverse().join("") != word) return "false";
  return answer;
}
for (const word of words) {
  console.log(palindrome(word));
}

// 출력 예시
// true
// true
// true
// false
// false
// false
