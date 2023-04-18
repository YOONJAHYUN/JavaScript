// 1번
const nums = [1,2,3,4,5,6,7,8]

console.log('1번 출력 결과')
for (let i = 0; i < nums.length; i++) {
  console.log('nums[' + i + ']: ' + nums[i])
}
console.log()
// for (const i = 0; i < nums.length; i++) {
//                                     ^

// TypeError: Assignment to constant variable.

// 변수 CONST는 재선언과 할당이 불가능 한데 for문 내에서 계속 재할당이 일어나 에러 발생

// 2번
console.log('2번 출력 결과')
for (num of nums) {
  console.log(num, typeof num)
  // 출력 결과
  // 0 string
  // 1 string
  // 2 string
  // 3 string
  // 4 string
  // 5 string
  // 6 string
  // 7 string
}

// for in을 of로 바꾸면 인덱스가 아닌 안의 요소를 출력
