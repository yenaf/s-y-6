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

call('kim')
.then(function(result){
  console.log(result + '반가워');
  return back(result);
})
.then(function(result){
  console.log(result + '을 실행했구나');
  return hell();
})
.then(function(result){
  console.log('여기는 ' + result);
})