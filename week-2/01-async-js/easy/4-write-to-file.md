## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

```javascript
const fs = require('fs');
fs.writeFile("content.txt", "This content willl be wriiten to th content.txt in case context.txt is't present then it will be created automatically", ()=>{
      console.log("file has been written");
});

console.log("Hello before writing the file");
```