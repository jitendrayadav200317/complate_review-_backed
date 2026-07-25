import express from "express";
import multer from "multer";

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    res.status(200).json({
        message:"post create successully"
    })
  } catch (error) {}
});

export default app;
