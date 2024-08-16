/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n) {
    return new Promise((resolve,rej) => {
      const start=Date.now();
       setTimeout(() => {  
          resolve(Date.now()-start);
       }, n*1000);
    });
 }
 
module.exports = wait;
