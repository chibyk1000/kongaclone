import mongoose from "mongoose";

const connectDB = () => {
   

    mongoose
      .connect(  
        process.env.MONGODB_URL,
        {
          useNewUrlParser: true,
        }
      )
      .then((connect) => console.log("connected to mongodb.."))
      .catch((e) => console.log("could not connect to mongodb", e));

    mongoose.Promise = global.Promise;
}

export default connectDB