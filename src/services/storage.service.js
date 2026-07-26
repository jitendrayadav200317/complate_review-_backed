import imageKit from "@imagekit/nodejs";
import dotenv from "dotenv"
dotenv.config()

const imagekit = new imageKit({
  privateKey: process.env.IMAGE_PRAVITE_KEY,
});
async function uploadFile(buffer) {
  const result = await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
  return result;
}
export default uploadFile;
