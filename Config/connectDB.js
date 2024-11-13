import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        const connection= await mongoose.connect(process.env.Db_Url);
        console.log("Databases connected Successfully");        
    } catch (error) {
        console.error("An Error occurred while connecting DB", error);
    }
}


