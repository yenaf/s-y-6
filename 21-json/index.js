// JSON
// json은 후행쉼표(마지막 키와 값에 쉼표 붙이는거) 인식못함! 에러뜸!
const car = `{
  "model" : "IONIQ 5",
  "company" : "HYUNDAI",
  "price" : 50000000,
  "year" : 2023,
  "isElectricCar" : true,
  "options" : ["side mirror","smart sensor","built-in cam"]
}`;
console.log(car);
// {
//   "model" : "IONIQ 5",
//   "company" : "HYUNDAI",
//   "price" : 50000000,
//   "year" : 2023,
//   "isElectricCar" : true,
//   "options" : ["side mirror","smart sensor","built-in cam"]
// }

// 역직렬화 : JSON.parse() -> 통신하여 받은 데이터를 객체로 변환
// json --> js obj
const obj = JSON.parse(car);
console.log(obj);
// {
//   model: 'IONIQ 5',
//   company: 'HYUNDAI',
//   price: 50000000,
//   year: 2023,
//   isElectricCar: true,
//   options: [ 'side mirror', 'smart sensor', 'built-in cam' ]
// }

// obj변수는 js object 이므로 .(dot)/[] 연산자를 이용해 키 값에 접근 가능
console.log(obj.model);

const json = JSON.stringify(obj);
console.log(json);
console.log(json, typeof json);//string

// json이라는 변수는 JSON 형태의 "문자열(string)"이므로 .(dot)/[] 연산자를 이용해 키 값에 접근 불가능!!
console.log(json.model);//undefined

// string 타입에 쓸 수 있는 내장 메소드들은 쓸 수 있음!
console.log(json.split(""));
console.log(json.toUpperCase());
