const wait = require("../hard (promises)/1-promisify-setTimeout");

describe("wait function", () => {

  test("resolves after 4 second", () => {
    return wait(4).then((data)=>{
       expect(data).toBeGreaterThanOrEqual(4000);
    })
 }); // Set timeout to 2000 ms (2 seconds)


 test("resolves after 1 second", () => {
  return wait(1).then((data)=>{
     expect(data).toBeGreaterThanOrEqual(1000);
  })
}); // Set timeout to 2000 ms (2 seconds)


  // test("resolves after 3 seconds", () => {
  //   const start = Date.now();
  //   return expect(wait(3))
  //     .resolves.toBeUndefined() // Wait for 3 seconds
  //     .then(() => {
  //       const end = Date.now();
  //       const difference = end - start;
  //       expect(difference).toBeGreaterThanOrEqual(3000); // Expect difference to be at least 3000 ms (3 seconds)
  //     });
  // }, 4000); // Set timeout to 4000 ms (4 seconds)

});
