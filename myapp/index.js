
const express = require('express')
const post= require("./router/post");
const cors =require("cors")

const app = express()
app.use(cors())
const bodyparser=require("body-parser")
require("./mongo")
app.use(bodyparser.json())
app.use("/post",post)
app.listen(3001, () => {
  console.log("app running")
})
