// 조건문

// if문
// if(5>3){
//   console.log('집에 가고싶습니다.');
// }

// prompt()로 사용자로부터 값을 입력받고(문자열)
// 숫자형 형변환
// let num=Number(prompt('숫자를 입력해주세요'));


// if~else문
// if(num>10){
//   console.log('입력한 수는 10보다 크다');
// }else{
//   console.log('입력한 수는 10보다 작거나 같다');
// }


// if~else if문
// if(num>10){
//   console.log('입력한 수는 10보다 크다');
// }else if(num === 10){
//   console.log('입력한 수는 10이다');
// }else{
//   console.log('입력한 수는 10보다 작다');
// }


// if(num>100 || num < 0){
//   console.log('입력값이 잘못 되었음. 숫자 범위는 0~100');
// }else if(num>=90){
//   console.log('A');
// }else if(num>=80){
//   console.log('B');
// }else if(num>=70){
//   console.log('C');
// }else if(num>=60){
//   console.log('D');
// }else{
//   console.log('F(재수강)');
// }


// 중첩 if문
let userId = 'user01';
let userPw = '1234';

// id, pw 검사하는 함수
function loginUser() {
    let inputId = prompt('아이디 입력');
    let inputPw = prompt('비밀번호 입력');

    // Q) userId와 inputId가 같다면?
    // -- userPw와 inputPw를 비교
    // Q) inputId에 빈값이 입력이 됐다면?
    // -- '아이디 입력 안함' 이라는 문구를 반환.
    // Q) 두 경우가 아니라면? (inputId가 틀렸을 때)
    // -- '아이디 틀림' 문구를 반환.

    if(userId === inputId) {
        if(userPw === inputPw) {
            return '로그인 성공';
        } else {
            return '비번 오류! 로그인 실패';
        }
    } else if (inputId === '') {
        return "아이디 입력 안함!";
    } else {
        return "아이디 틀림! 로그인 실패";
    }
}
// const result = loginUser();
// -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
// console.log(result);



// * switch문
// 하나 이상의 case 문으로 구성
// default가 필수는 아니지만, 사용하길 권장 = if문의 else같은 존재.
// switch 문 내의 모든 case가 매칭 되지 않을 때 실행
// break : 조건을 빠져 나갈때 사용하는 키워드

// let a=1;
// switch (a) {
//     case 1:
//     case 2:
//     case 3:
//         console.log('a가 1~3이군요!');
//         break;
//     case 4:
//         console.log('a가 4군요!');
//         break;
//     case 5:
//         console.log('a가 5군요!');
//         break;
//     default:
//         console.log('a가 무슨 값인지 모르겠습니다');
//         break;
// }

// switch 실습
// Quiz ) 학점계산기
// 조건 0~100 외의 숫자는 들어오지 않는다고 가정
// A~F등급
// 힌트 : number / parseInt() , 10

// let score = Number(prompt('점수를 입력하세요.'));
// switch (true) {
//     case (score>90 && score<=100):
//         console.log('A');
//         break;
//     case (score>80):
//         console.log('B');
//         break;
//     case (score>70):
//         console.log('C');
//         break;
//     case (score>60):
//         console.log('D');
//         break;
//     default: console.log('F');
//         break;
//     }

// let score = Number(prompt('점수를 입력하세요.'));
// console.log(parseInt(score/10));
let score = 1;
switch (parseInt(score/10)) {
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
        break;
}

// 삼항 연산자
// 조건식 ? A : B
// 조건식이 참이면 A 거짓이면 B
// if 문을 더 간단하게

// 일반 if문
let num = 5;
if(num%2==1){
    console.log('홀수');
}else{
    console.log('짝수');
}

// 삼항연산자로 바꿔본다면?
num%2==1 ? console.log('홀수') : console.log('짝수');

// 실습 - new date
