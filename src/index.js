import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: "./env"
});

connectDB();











/*
import express from "express";
const app = express();
(async ()=>{

    try{
        // await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

        await mongoose.connect("mongodb+srv://ripu:ripu%40123@cluster1.ib0mgbc.mongodb.net")
        app.on("Error", (err)=>{
            console.log("Error: ", err)
            throw err
        })
        app.listen(3000, ()=>{
            console.log("Server is running on port 3000")
        })
    } catch(err){
        console.log("Error: ", err);
        throw err
    }
})()
*/