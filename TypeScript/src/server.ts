import app from "./index"; // Changed to default import
import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: "./config.env" });

const db = process.env.DATABASE?.replace(
  "<password>",
  process.env.DB_PASS || ""
);
const port = process.env.PORT || 3000;

if (db) {
  mongoose
    .connect(db)
    .then(() => {
      console.log(`You are connected to db`);
    })
    .catch((err) => {
      console.error("Error connecting to the database", err);
    });
}

app.listen(port, () => {
  console.log(`Your server is listening on port ${port}`);
});
