const express = require("express");
const app =express();
const cors = require("cors");
const PORT =8081;

app.use(cors());

app.get("/", (req, res)=>{
    res.json({message: "Template Server Test", testArr : ["test1", "test2", "test3"]});
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})