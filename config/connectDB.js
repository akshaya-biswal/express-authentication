import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "authentication-apis-express",
    };
    await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
