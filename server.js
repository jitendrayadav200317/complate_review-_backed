import app from "./src/app.js";
import dbConnect from "./src/db/db.js";

dbConnect();
app.listen(1000, () => {
  console.log("server is renning on port 1000");
});
