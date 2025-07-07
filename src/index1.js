import mongoose from "mongoose";
import express from "express";
const DB_NAME = "gauravdb";

const PORT=4000;


const MONGODB_URI = "mongodb+srv://gaurav:gaurav@cluster0.i2bziqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app= express();

const connect = async () => {
    try {
        const obj = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);

        console.log(`mongo db connecteddd ${obj.connection.host}`)
    }
    catch (err) {
        console.log("mongodb connectio error", err);
        process.exit(1);
    }
}




connect()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })    
})