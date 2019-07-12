// Write a function that executes a callback function after a given delay in milliseconds.
// The default value of delay is one second

function myFnc (callback, delay = 1000) {
    setTimeout(callback, delay);
}

const callbackFnc = () => {
  console.log('Hello after 1 second');
}

myFnc(callbackFnc, 1000);