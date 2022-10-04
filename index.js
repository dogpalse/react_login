import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const { PORT, MONGO_URI } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log("connected Mongo DB");
}).catch(e => {
	console.error(e);
});

app.get('/', (req, res) => {
  res.send('get url "/"');
})

app.listen(PORT, () => {
  console.log("Start Server...!");
})
