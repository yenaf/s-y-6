// 클래스
// Constructor (생성자)
class House{
  // 생성자 함수, 객체의 속성(내부에서 사용할 변수) 부여
  constructor(year, name, window){
    this.year = year;
    this.name = name;
    this.window = window;
  }
  getAge(){
    console.log(`${this.name}는 건축한지 ${2024-this.year}년 되었어요!`);
  }
  getWindow(){
    console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
  }
}

const house1 = new House(1990,'롯데',1);
// 클래스를 이용해서 인스턴스 생성시 컨스트럭터에 선언된 매개변수대로 값을 지정해야한다
console.log(house1);//House { year: 1990, name: '롯데', window: 1 }
console.log(typeof house1);//object
console.log(house1.year);//1990
house1.getAge();//롯데는 건축한지 34년 되었어요!
house1.getWindow();//롯데의 창문은 1개 입니다!
console.log('------------------------');

// 부모의 속성을 가져올때 super
// 자식이 같은이름의 메서드를 가지고 있으면 덮어쓰기된다 -> 예를들어 House클래스의 getAge() 메서드를 아래 메서드에 같은이름으로 사용하고 내용을 바꾼다면 바뀐 내용으로 덮어써진다.
class Apartment extends House{
  constructor(year, name, window,floor,windowMaker){
    super(year, name, window)
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
  }

  // override (오버라이드) 부모의 메소드와 같은 함수를 재정의할때
  getWindow() {
    return `${this.name} 아파트의 ${this.window} 개의 창문은 
        ${this.windowMaker} 회사에서 생산되었습니다.`;
  }
}

const apt1=new Apartment(2022,'래미안',3,20,'kcc');
console.log(apt1);
console.log(apt1.getAptInfo());
console.log('------------------------');