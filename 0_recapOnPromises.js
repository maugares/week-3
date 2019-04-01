// Creating a promise

function returnSomething() {
  return new Promise((resolve, reject) => {
    'callback is setTimeOut()';
    setTimeout(resolve(42), 1000);
  })
}

// Consume the promise
returnSomething()
  .then(a => console.log(a));

// Try to solve the last exercise of the homework 