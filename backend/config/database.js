import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const connectDb = async () => {
  const mongo_url = process.env.MONGO_URL;
  console.log(mongo_url)
  if (!mongo_url) {
    console.error("MongoDB URL is not defined!");
    process.exit(1);
  }
  try {
    await mongoose.connect(mongo_url, {
    });
    console.log("Connection successful");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDb;