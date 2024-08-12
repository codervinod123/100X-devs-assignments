## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

```javascript

function timeWithoutsetInterval(stopper){ 
   for(let i=0; i<=stopper; i++){
          const timer=setTimeout(()=>{
             console.log(i);
          },1000*i);
      
          if(i===stopper){
             clearTimeout(timer);
             break;
          }
    }
}

timeWithoutsetInterval(10);

```






































































(Hint: setTimeout)