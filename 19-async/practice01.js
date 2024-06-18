// 콜백함수로 이루어진 코드
function call(name, cb) {
  setTimeout(function() {
      console.log(name);
      cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function() {
      console.log('back');
      cb('back');
  }, 1000)
}

function hell(cb) {
  setTimeout(function() {
      cb('callback hell');
  }, 1000);
}

call('kim', function (name) {
  console.log(name + '반가워');
  back(function (txt) {
      console.log(txt + '을 실행했구나');
      hell(function (message) {
          console.log('여기는' + message);
      });
  });
});

// function call(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log(name);
//         resolve(name);
//     }, 1000);
//   })
// }

// function back() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log('back');
//         resolve('back');
//     }, 1000)
//   })
// }

// function hell() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve('callback hell');
//     }, 1000);
//   })
// }

// call('kim')
// .then(function(result){
//   console.log(result + '반가워');
//   return back(result);
// })
// .then(function(result){
//   console.log(result + '을 실행했구나');
//   return hell();
// })
// .then(function(result){
//   console.log('여기는 ' + result);
// })



//////////////////////////////////////////
function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log(name);
        resolve(name);
    }, 1000);
  })
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log('back');
        resolve('back');
    }, 1000)
  })
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('callback hell');
    }, 1000);
  })
}

async function exex(){
  try {
    const name =  await call('kim');
    console .log(name + '반가워');
    const txt = await back();
    console.log(txt + '을 실행했구나');
    const message = await hell();
    console.log('여기는 ' + message);

  } catch(err) {
    console.log(err);
  }
}
