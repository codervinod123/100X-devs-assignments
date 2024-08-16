Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

```js
function updateTimer(timer,interval){
      timer.SS++;
      if(timer.SS==59){
         timer.SS=0;
         timer.MM++;
      }
     else if(timer.MM==59){
        timer.MM=0;
        timer.HH++;
    }
    else if(timer.HH==23){
        // Restart it or reset the clock
        timer.SS=0;
        timer.MM=0;
        timer.HH=0;

        //OR
        clearInterval(interval);


    }
}
function showTimes(){
     let time={
        HH:00,
        MM:00,
        SS:00,
     }
    const interval=setInterval(()=>{
        console.log(time.HH,":",time.MM,":",time.SS, time.HH<12?"AM":"PM");
        updateTimer(time,interval);
    },1000)
   
}
showTimes();
```