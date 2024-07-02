import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async()=>{

    try{
        const connectionInstance = await mongoose.connect("mongodb+srv://ripu:ripu%40123@cluster1.ib0mgbc.mongodb.net");
        console.log(`Database Succcessfully Connected!! DB HOST: ${connectionInstance.connection.host}`);

    }
    catch(error){
        console.log("MONGODB connection FAILED: ", error)
        // console.log("MONGODB connection FAILED: ", error.message);
        process.exit(1);
    }
};

export default connectDB;

