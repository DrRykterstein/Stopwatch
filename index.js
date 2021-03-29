const express = require('express');
const app = express();
const port = 7000;

app.use(express.static('client'));

app.listen(port, () => console.log(`Server is listening on port ${port}`));