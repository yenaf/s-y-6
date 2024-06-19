
function backgroundColor(color) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      console.log(color);
      resolve(color);
    }, 1000);
  })
}

async function changeBgColor(){
  try {
    await backgroundColor('red');
    await backgroundColor('orange');
    await backgroundColor('yellow');
    await backgroundColor('green');
    await backgroundColor('blue');
  } catch (error) {
    console.log(error);
  }
}

changeBgColor();



// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve,ms);
//   })
// }

// async function chgColor(){
//   try {
//     await delay(1000);
//     document.body.style.backgroundColor = 'red';

//     await delay(1000);  
//     document.body.style.backgroundColor = 'orange';
//     await delay(1000);
//     document.body.style.backgroundColor = 'yellow';

//     await delay(1000);
//     document.body.style.backgroundColor = 'green';

//     await delay(1000);
//     document.body.style.backgroundColor = 'blue';

//   } catch (error) {
//     console.log(error);
//   }
// }
// chgColor();