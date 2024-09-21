import express from "express";
import taskRoutes from "./routes/taskRouter"; // Correctly import express
import { notFound } from "./middleware/notFound";
import { errorHandlerMiddleware } from "./middleware/errorHandler";
const app = express();

app.use(express.static("public"));
app.use(express.json());

//api
app.use("/api/v1/tasks", taskRoutes);
app.use(errorHandlerMiddleware);

app.use(notFound);
export default app;
