const express = require("express");
const router = require("./routes/aiToolsRoutes");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api", router);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
