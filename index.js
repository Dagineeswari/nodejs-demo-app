const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Deployment Successful!</h1><p>Node.js app running via Docker & GitHub Actions CI/CD pipeline.</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});