const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const express=require('express');


const app=express();

app.use(express.json());

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here
    const jw=jwt.sign({username:username,password:password}, 'VinodPr', { expiresIn: 60 * 60 });
    return jw;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    const res=jwt.verify(token,"VinodPr",(error)=>{
        if(error){
            console.log("error occured");
            return false;
        }else{
            console.log("Verifired token");
            return true;
        }
    });
  
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
async function decodeJwt(token) {
    // Your code here
    const res=jwt.verify(token,"VinodPr");
    return res;
}



app.get("/tokengeneration",(req,res)=>{
    try {
        const resp=signJwt(req.body.username,req.body.password);
        res.status(200).json({
           data: resp,
           message: "Succcess",
           statuscode: 200,
           error: null,
        })
    } catch (error) {
     console.log("Error error error",error);
     res.status(404).json({
        message:"Failed",
        statuscode:404,
        error:error,
     }) 
    }
})



app.get("/decodeToken",async(req,res)=>{
    try {
        const response=await decodeJwt(req.headers.token);
        res.status(200).json({
           data: response,
           message: "Succcess",
           statuscode: 200,
           error: null,
        })
    } catch (error) {
     console.log("Error error error",error);
     res.status(404).json({
        message:"Failed",
        statuscode:404,
        error:error,
     }) 
    }
})


app.listen(3000,()=>{
    console.log("App is running on port no 3000");
})


