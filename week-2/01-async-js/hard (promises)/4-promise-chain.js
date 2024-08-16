/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function wait1(t) {
    return new Promise((resolve, reject) => {
       const start = Date.now();
       setTimeout(() => {
          console.log("Timer 1");
          resolve(Date.now() - start ,"Mili Seconds");
       }, t * 1000);
    });
 }
 
 function wait2(t) {
    return new Promise((resolve, reject) => {
        const start = Date.now();
       setTimeout(() => {
          console.log("Timer 2");
           resolve(Date.now() - start ,"Mili Seconds");
       }, t * 1000);
    });
 }
 
 function wait3(t) {
    return new Promise((resolve, reject) => {
        const start = Date.now();
       setTimeout(() => {
          console.log("Timer 3");
           resolve(Date.now() - start ,"Mili Seconds");
       }, t * 1000);
    });
 }
 
 function calculateTime(t1, t2, t3) {
    wait1(t1).then((time1) => {
       console.log(time1);
       wait2(t2).then((time2) => {
          console.log(time2);
          wait3(t3).then((time3) => {
             console.log(time3);
          });
       });
    });
 }
 
// calculateTime(2, 4, 6);
module.exports = calculateTime;

/*
output

Timer 1
2008
Timer 2
4003
Timer 3
6009
*/
