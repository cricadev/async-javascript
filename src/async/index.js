const doSomethingAsync = () => new Promise((resolve, reject) => {
  (true)
    ? setTimeout(() => resolve('Do Something Async'), 3000)
    : reject(new Error('Error'));
});

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log('Before');
doSomething();
console.log('after');

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (err) {
    console.err(err);
  }
};
console.log('Before 1');
anotherFunction();
console.log('after 1');
