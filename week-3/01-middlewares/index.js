const express=require("express");
const app=require('./03-errorcount');

// const app=express();

const startAndRunServer=()=>{

   
    

//     // app.use(express.json());

//     app.get("/sum",(req,res)=>{ 
//         const a=parseInt(req.query.a);
//         const b=parseInt(req.query.b);
//          res.json({
//                  result:a+b,
//                  Message:"Successfully Finded the sum at /sum?a=1&b=2 ",
//                  success:true,
//                  status:"OK",
//          })
//     })

//     app.get("/sub",(req,res)=>{
//          const a=parseInt(req.query.a);
//          const b=parseInt(req.query.b);
//          res.json({
//             result:a-b,
//             Message:"Successfully Finded the sum at /sub?a=1&b=2 ",
//             success:true,
//             status:"OK",
//          })
//     })

//     app.get("/mul",(req,res)=>{
//         const a=parseInt(req.query.a);
//         const b=parseInt(req.query.b);
//         res.json({
//            result:a*b,
//            Message:"Successfully Finded the mul at /mul?a=1&b=2 ",
//            success:true,
//            status:"OK",
//         })
//    })

//    app.get("/div",(req,res)=>{
//     const a=parseInt(req.query.a);
//     const b=parseInt(req.query.b);
//     res.json({
//        result:a/b,
//        Message:"Successfully Finded the div at /div?a=1&b=2 ",
//        success:true,
//        status:"OK",
//     })
// })



// app.post("/no_of_req",(req,res)=>{
  
//     console.log("JSON DATA",req.body);

//     res.json({
//        Message:"Successfully Finded the number Of Req",
//        success:true,
//        status:"OK",
//     })
// })



    app.listen(3000,()=>{
        console.log("Application is running on port 3000")
    })
}

startAndRunServer();