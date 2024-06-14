// async / await 
// async 키워드 : 함수 앞에 작성
// async를 붙이는 순간 해당 함수는 프로미스가 아닌값을 반환하더라도 프로미스로 감싸서 반환

// async function f1(){
//   return 1;
// }
// console.log(`f1() : ${f1()}`);//[object Promise]

// async function f2(){
//   return Promise.resolve(1);
// }
// console.log(`f2() : ${f2()}`);//[object Promise]

// const f3 =async () =>{
//   return 3;
// }
// console.log(`f3() : ${f3()}`);//[object Promise]

// f1().then(function(result){
//   console.log(result);
// })
// f2().then(function(result){
//   console.log(result);
// })
// f3().then(function(result){
//   console.log(result);
// })



// await : 기다리다
// 성공 / 실패로 프로미스 객체의 실행이 완료되기를 기다름
// await 뒤에는 프로미스가 오게됨
// * async키워드를 사용한 함수 내에서만 await를 사용가능
// async / await 는 세트다!

// 뭔가를 가져오는 함수일때 fatch 또는 get으로 변수명
// function fatchFruits() {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       const fruits = ['🍇','🍓','🍑'];
//       resolve(fruits);
//       reject(new Error('알수없는 오류로 가져올수 없습니다.'))
//     },100);
//   }) 
// }

// promise then()
// fatchFruits()
// .then((f)=>{
//   console.log(f);
// })


// async / await
// * async / await 에서는 예외처리를 try-catch 구문으로 하게된다
// https://ko.javascript.info/try-catch
// async function printItems(){
//   try {
//     const fruits = await fatchFruits();//[ '🍇', '🍓', '🍑' ]
//     console.log(fruits);
//   } catch (error) {
//     console.log(error);
//   }
// }
// printItems();


/////////////////////////////////////////////////////////

let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민 끝');
            product = '제로 콜라';
            price = 6000;
            // resolve();
            if (price <= 3000) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
}

function pay() {
    console.log(`상품명: ${product} // 가격: ${price}`);
}

function nopay() {
    console.log('금액 부족ㅜㅜ');
  }

async function exec() {
    try {
        // 장점) 함수의 실행 순서가 명확히 보인다!!
        goMart();
        await pickDrink(); // 시간이 걸리는 pickDrink() 함수의 작업을 await 키워드로 인해 기다려줌
        pay();
    } catch (err) {
        nopay();
    }
}

exec();


