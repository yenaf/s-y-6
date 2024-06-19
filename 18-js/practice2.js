// Shape 클래스 만들기
// 속성 가로, 세로
// 메소드 getArea() 넓이 반환하느나 메소드(가로*세로)

class Shape{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  getArea(){
    return this.width*this.height;
  }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());
console.log('---------------------');

// Rextangle(직사각형)
// Shape 클래스 상속
// 직사각형의 대각선 길이 구하는 메소드 추가
// Math.sqrt() 이용
class Rectangle extends Shape{
  constructor(width, height){
    super(width, height)
  }
  getArea(){
    return `직사각형의 넓이 : ${this.width*this.height}`
  }
  getDiagonal(){
    this.diagonal = (this.width**2) + (this.height**2);
    return `대각선의 길이 : ${Math.sqrt(this.diagonal)}`;  
  }
}

// console.log(Math.sqrt(25));//5
// console.log(Math.sqrt(9))//3

let rectangle = new Rectangle(3,4);
console.log(rectangle.getArea());
console.log(rectangle.getDiagonal());//5
console.log('---------------------');

// Triangle(삼각형) 클래스
class Triangle{
  constructor(base,height){
    this.base = base;
    this.height = height;
  }
  getArea(){
    return `삼각형의 넓이 : ${this.base*this.height/2}`;
  }
}

let triangle = new Triangle(3,4);
console.log(triangle.getArea());
console.log('---------------------');


// Circle(원) 클래스
class Circle extends Shape{
  constructor(width, height, radius){
    super(width, height);
    this.radius = radius;
  }
  getArea(){
    const PI = Math.PI;
    return `원의 넓이 : ${PI*(this.radius**2)}`;
  }
}

let circle = new Circle(3,4,5);
console.log(circle.getArea());


