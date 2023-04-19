const colors = ['red', 'blue', 'green']

// 01
const printFunc = function (color) {
  console.log(color)
}

colors.forEach(printFunc)

// 02
colors.forEach(function (color, index, array) {
  console.log(color)
})

// 03
array.forEach(element => {
  return console.log(color)
});


// 1. 일단 사용해보기
const numbers = [1, 2, 3]

// 함수 정의 (표현식)
const doubleFunc = function (number) {
  return number * 2
}

// 함수를 다른 함수의 인자로 넣기 (콜백함수)
const doubleNumbers = numbers.map(doubleFunc)
console.log(doubleNumbers) // [2, 4, 6]

const doubleNumbers = numbers.map(function (number){
  return numbers *2
})
console.log(doubleNumbers)