const express = require("express");
const cors = require("cors");
require('dotenv').config()

const mongodb = require("./mongodb");
const app = express();
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 3000;

mongodb(app);


app.listen(`${port}`, () => {
    console.log(`this port in runing on this port ${port}`)
})