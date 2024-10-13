import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import contactRouter from "./route/contact.route.js"

const app = express()

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT =process.env.PORT || 4000;

const URI=process.env.MongoDBURI;

//connect to Mongo DB
try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to mongoDB")

}catch(error){
    console.log("Error",error)

}

// Defining Routes

app.use("/book",bookRoute);
app.use("/user",userRoute);
app.use("/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})