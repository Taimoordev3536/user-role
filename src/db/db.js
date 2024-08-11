import mongoose from "mongoose";

const db = () =>{
    mongoose.connect(process.env.DB_URI).then(
        () => console.log("Connected to MongoDB")
    ).catch(
        (e) => console.log("DisConnected to MongoDB") 
    )

}

export default db