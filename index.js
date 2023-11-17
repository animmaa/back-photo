const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 8001;

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server run on ${port}`);
});
