import express from "express";
import path from "path";
import cors from "cors";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import notesRoutes from "./routes/notes.routes.js";
import rateLimiter from "./middleware/rateLimiter.js";

const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// app.listen(PORT, () => {
//   console.log(`Server running on port: ${PORT}`);
//   connectDB();
// });

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
