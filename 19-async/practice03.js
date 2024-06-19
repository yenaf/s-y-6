
// let product, price;

// function goMart() {
//   console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
// }

// function pickDrink() {
//   setTimeout(function () {
//     console.log(`고민 끝`);
//     product = `제로콜라`;
//     price = `3000원`;
//   }, 3000);
// }

// function pay(product, price) {
//   setTimeout(function () {
//     console.log(`상품명: ${product} // 가격: ${price}`);
//   }, 5000);
// }

// goMart();
// pickDrink();
// pay(product, price);


/*
마트에 가서 어떤 음료를 살지 고민한다..
고민 끝
상품명: undefined // 가격: undefined
*/


// * undefined가 출력되는 원인
// 상품명과 가격이 undefined로 출력되는 이유는 pickDrink 함수가 비동기적으로 실행되기 때문이다. pickDrink()함수는 setTimeout() 함수에 의해 3초뒤에 실행되고 product와 price 값 또한 3초뒤에 변수값에 할당되는데 pay함수는 이를 기다리지않고 바로 실행(setTimeout 대기상태)되기 때문에 undefined값이 출력된다. 즉, pay 함수가 실행될 때, pickDrink 함수의 비동기 처리가 아직 완료되지 않았기 때문에 product와 price 변수의 값이 undefined값이 출력된다

// * 올바르게 수정한 코드

// * async/await 사용
// async function goMart() {
//   console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
//   const [product, price] = await pickDrink();
//   pay(product, price);
// }

// function pickDrink() {
//   return new Promise((resolve) => {
//     setTimeout(function() {
//       console.log(`고민 끝`);
//       let product = `제로콜라`;
//       let price = `3000원`;
//       resolve([product, price]);
//     }, 3000);
//   });
// }

// function pay(product, price) {
//   console.log(`상품명: ${product} // 가격: ${price}`);
// }

// goMart();

////////////////////////////////////////

let product, price;

function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`고민 끝`);
      product = `제로콜라`;
      price = `3000원`;
      resolve();
    }, 3000);
  })
}

function pay(product, price) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`상품명: ${product} // 가격: ${price}`);
    }, 5000);
    resolve();
  },5000);
}

async function exec() {
  try {
    goMart();
    await pickDrink();
    await pay(product, price);
  } catch (error) {
    console.log(error);
  }
}

exec();