import express from "express";
import cors from "cors";
import bikeRouter from "./route.js";
import { loggingMiddleware } from "./logging.middleware.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(express.json());
app.use(loggingMiddleware);
app.use(bikeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
