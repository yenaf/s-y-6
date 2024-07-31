function validateForm(event) {
  event.preventDefault(); // 기본 제출 동작 방지

  const userid = document.querySelector('input[name="userid"]').value;
  const userpwd = document.querySelector('input[name="userpwd"]').value;
  const username = document.querySelector('input[name="username"]').value;

  // 유효성 검사
  if (!userid) {
    alert("아이디를 입력해주세요.");
    return;
  }
  if (!userpwd) {
    alert("비밀번호를 입력해주세요.");
    return;
  }
  if (!username) {
    alert("이름을 입력해주세요.");
    return;
  }

  // 모든 입력이 유효하면 폼 제출
  document.querySelector('form').submit();
}
///////////////////////////////////////////////////////////////////////

async function registerUser(event) {
  event.preventDefault(); // 기본 제출 동작 방지

  // 사용자 입력값 가져오기
  const userid = document.querySelector('input[name="userid"]').value;
  const userpwd = document.querySelector('input[name="userpwd"]').value;
  const username = document.querySelector('input[name="username"]').value;

  // 사용자 데이터 객체 생성
  const userData = {
    userid,
    userpwd,
    username
  };

  try {
    // 서버에 POST 요청 보내기
    const response = await axios.post('https://api.example.com/join', userData);
    console.log('가입 성공:', response.data);
    alert('회원가입이 완료되었습니다!');
    // 가입 후 다른 페이지로 이동하거나 추가 작업 수행
  } catch (error) {
    console.error('가입 중 오류 발생:', error);
    alert('회원가입에 실패했습니다. 다시 시도해주세요.');
  }
}







// 이메일 정규 표현식
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
  return emailPattern.test(email);
}

// 비밀번호가 최소 8자 이상, 대문자, 소문자, 숫자 및 특수 문자를 포함하는지 확인하는 정규 표현식
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validatePassword(password) {
  return passwordPattern.test(password);
}