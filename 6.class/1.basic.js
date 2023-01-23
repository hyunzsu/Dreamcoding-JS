// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ✨


// 생성자 함수
/*
function Fruit(name, emoji) {
  this.name = name; // 객체 자기 자신을 가리킴
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  }
}
*/

// 클래스
class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji){
    this.name = name; 
    this.emoji = emoji;
  }
  display = () => { // 함수는 constructor외로 빼줌
    console.log(`${this.name}: ${this.emoji}`);
  }
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎')
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊')

console.log(apple);
console.log(orange);

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
// const obj = {name: 'ellie'}