// 내장 메서드
// 프로그래밍 언어나 프레임 워크에서 기본적으로 제공되는 메서드
// 따로 설치하거나 추가 설정할 필요가 없다

// 문자열 관련 내장 메서드
// 문자열을 다루는데 유용한 기능들을 제공

let str='Happy Birthday';
let str2='     Happy Birthday~! ';

// 여기서 알수 있듯 문자열은 배열이다
console.log(str[0]);//H
console.log(str[0]+str[12]);//Ha
console.log(str[0]+str[1]+str[8]+str[11]);//Hard

// length : 문자열 길이
// length는 메서드가 아닌 속성이다
console.log(str.length);//14

// toUpperCase() : 대문자 변환
console.log(str.toUpperCase());

// toLowerCase() : 소문자 변환
console.log(str.toLowerCase());

// trim() : 양끝 공백 제거
console.log(str2.trim());
console.log(str2.trim().length);

// indexOf() : 글자 위치 찾기
// 위치(index) : 0부터 시작
// 같은 문자열이 있으면 처음에 나오는 나오는 위치
// 존재하는 문자에 대해 검색하면 -1 반환
// 매개변수에 아무것도 넣지않아도 -1 반환
console.log(str.indexOf('y'));//4
console.log(str.indexOf('v'));//-1
console.log(str.indexOf());//-1

// slice() : 문자열 자르기
// 음수 값이 들어간다면 뒤에서부터 순서를 센다
// 매개변수 2개일때 start ~ end-1
console.log(str.slice(10));
console.log(str.slice(1,5));
console.log((str.slice(-4)));

// replace() : 문자열 바꾸기
console.log(str.replace('p','w'));
console.log(str.replace('B','b'));

console.log(str.replaceAll('p','r'));

// split() : 문자열 쪼개기 (배열로 변환)
// 빈 문자열도 배열로 정렬된다.
let str3='dinner';
console.log(str3.split('e'));// ['dinn', 'r']
console.log(str3.split('n'));// ['di', '', 'er']

// repeat() : 반복
console.log(str3.repeat(3));//dinnerdinnerdinner
