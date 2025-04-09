// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    // mongoose.connect create a default connection.
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};
