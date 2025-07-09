import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app= express();
app.use(cors({
    origin: "*",
    credentials: true
}));
app.use((req, res, next) => {
  console.log("⏳ Incoming:++++++++++++++++++ postman ", req.method, req.originalUrl);
  next();
});


console.log("hahahahah")
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

/// import kro router ko

import userRouter from "./routes/user.router.js"


// declaration router ka

app.use("/api/v1/users",userRouter);
// app.js
app.use((req, res, next) => {
  console.log("⏳  Incoming: Browesser", req.method, req.originalUrl);
  next();
});



// Global error handler (last middleware)
// app.use((err, req, res, next) => {
//   console.error("🔥 Error caught:", err.message);
//   res.status(500).json({
//     success: false,
//     message: err.message || "Internal Server Error",
//   });
// });

export default app;
