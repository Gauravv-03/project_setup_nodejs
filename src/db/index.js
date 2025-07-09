import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  try {
    console.log("🔄 connectDB starting...");

    const fullURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
    console.log("🔍 Full MongoDB URI:", fullURI);

    const connectionInstance = await mongoose.connect(fullURI);
    
    console.log("✅ db ke under index vali filddddded");
    console.log(`✅ MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ MONGODB connection FAILED");
    console.error("Details:", error.message);
    process.exit(1);
  }
};

export {connectDB}