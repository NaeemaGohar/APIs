const express = require("express");
const app = express();

const noteRouter = require("./routes/noteRoute");
const userRouter = require("./routes/userRoute");

const mongoose = require("mongoose")

app.use(express.json());

app.use((req, res, next)=>{
    console.log("HTTP Method -" + req.method + ", HTTP URL -" + req.url);
    next();
});

app.use("/users", userRouter)
app.use("/note", noteRouter)

app.get("/", (req,res) =>{
    res.send("Hello")
})



mongoose.connect("mongodb+srv://naeemachang:naeMONGO@api0.xsababo.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("Server started on port number 5000");
    });
    
})

.catch((error)=>{
    console.log(error);
})