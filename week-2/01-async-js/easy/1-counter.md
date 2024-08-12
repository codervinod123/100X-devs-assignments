## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

```
javascript
function timer(counter,stopper){
   const interval=setInterval(()=>{
        console.log(counter);
        counter==stopper ? clearInterval(interval) : counter++ ;
   },1000)
  
}

timer(0,6)

```