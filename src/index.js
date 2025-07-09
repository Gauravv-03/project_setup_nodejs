import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
import mongoose from "mongoose";
import app from './app.js';

const DB_NAME = "gauravdb";


import { connectDB } from "./db/index.js";


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 4000, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
  })

})
.catch((err)=>{
  console.log("mongodb me connection error aa gya",err);
}
);












// const MONGODB_URI = "mongodb+srv://gaurav:gaurav@cluster0.i2bziqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const connectDB = async () => {
//   try {
//     const connection = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`, {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//     });

//     console.log(` MongoDB connected: ${connection.connection.host}`);
//   } catch (err) {
//     console.error(" MongoDB connection failed:", err);
//     process.exit(1); 
//   }
// };

// connectDB();
