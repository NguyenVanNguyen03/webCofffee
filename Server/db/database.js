import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://chaudz:chauyeuai22@cluster0.l5kxahg.mongodb.net/test"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
