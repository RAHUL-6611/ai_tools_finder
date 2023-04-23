const express = require('express');
const router = require('./routes/aiToolsRoutes');
const app = express();

app.use("/api", router);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});