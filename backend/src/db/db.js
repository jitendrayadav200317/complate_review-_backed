import mongoose from "mongoose";

async function dbConnect() {
  await mongoose.connect(process.env.BE_URL);
  console.log("connect mongoose");
  
}
export default dbConnect;
