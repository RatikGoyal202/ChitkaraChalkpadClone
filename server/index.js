const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

const userRoute = require('./routes/user');

const CONNECTION_URL = 'mongodb+srv://umesh:umesh123@cluster0.mx2trqz.mongodb.net/user';

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));

app.use(bodyParser.json());

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use('/user', userRoute);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
