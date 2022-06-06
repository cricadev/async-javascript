const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve("true")
    }else{
    }
  })
}
somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.err(err))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(true){
      setTimeout(() => {
        resolve('True');
      },2000);
    }
    else{
    }
  })
}
somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.err(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => console.log(response))
.catch(err => console.err(err))