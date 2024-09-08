const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.get('/user', function(req, res) {
 try {
     res.status(200).son({ name: 'john' });
 } catch (error) {
    errorCount=errorCount+1;
    res.status(404).json({
      Message:"Error occured",
      result:false,
    })
 }
});

app.post('/user', function(req, res) {
  try {
    res.status(200).json({ msg: 'created dummy user' });
} catch (error) {
   errorCount=errorCount+1;
   res.status(404).json({
     Message:"Error occured",
     result:false,
   })
}
 
});

app.get('/errorCount', function(req, res) {
  try {
    res.status(200).json({ errorCount });
} catch (error) {
   res.status(404).json({
     Message:"Error occured",
     result:false,
   })
 }
});

module.exports = app;