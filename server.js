const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}.`);
});