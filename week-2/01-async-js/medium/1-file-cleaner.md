## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```




```javascript

// we can use data.split(" ").join(" ")
// data = data.replace(/\s+/g, " ");  (best method);
function spaceRemover(data) {
   let val = "";
   let flag = false;

   
   for(let i=0;i<data.length;i++){
      if(data[i]!=" "){
         val=val+data[i];
         flag=false;
      }else{
          if(flag==true) continue;
          val=val+" ";
          flag=true;
      }

   }
   return val;
}

function readingTHeFile(err, data) {
   if (err) {
      console.log("file can not be read");
      console.log(err);
      return;
   }

   fs.writeFile("context.txt", spaceRemover(data), () => {
      console.log("file written done");
   });
}

fs.readFile("content.txt", "utf-8", readingTHeFile);

```