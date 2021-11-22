const express = require("express");
const router = express.Router();

const {recover} = require("./controller");

let initAPIs = (app) => {
    router.post("/recover", recover);
    return app.use("/", router);
  }
  
  module.exports = initAPIs;
  