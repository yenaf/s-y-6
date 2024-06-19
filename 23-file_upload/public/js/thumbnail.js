console.log("!");

function uploadThumbnail(){
  // FormData 객체
  // 폼전송 할 때, 멀티미디어 파일을 비동기로 제출하고 싶다면 FormData 객체를 이용
  const formData = new FormData();

  // 폼요소 선택
  const fileInput = document.querySelector('#thumbnail');
  console.dir(fileInput);
  console.dir(fileInput.files);

  // FormData에 업로드한 파일정보를 추가
  formData.append('thumbnail',fileInput.files[0]);

  // 서버로 요청보내기
  axios({
    method : 'POST',
    url : '/dynamicFile',
    data : formData,
    headers : {
      'Content-Type' : 'multipart/form-data'
    }
  }).then(function(res){
    console.log(res);
    console.log(res.data.path);
    document.querySelector('img').src = `/${res.data.path}`;
    // document.querySelector('img').classList.add('thumbnail');
  })
}