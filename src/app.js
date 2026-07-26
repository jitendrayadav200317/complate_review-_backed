import express from "express";
import multer from "multer";
import dotenv from "dotenv";

import uploadFile from "./services/storage.service.js";
import postModel from "./models/post.model.js";

const app = express();
app.use(express.json());
dotenv.config();

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption,
    });

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating post",
    });
  }
});

app.get("/create-post", async (req, res) => {});

export default app;
