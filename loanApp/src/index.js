import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./route";

dotenv.config();
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database connected");
});
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route);

const port = parseInt(process.env.PORT || 5007);
app.set("port", port);

app.listen(port, () => {
  console.log(`sever running on port ${port}`);
});

app.use(route);

export default app;
