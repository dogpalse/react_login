import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const { PORT, MONGO_URI } = process.env;

app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log("connected Mongo DB");
}).catch(e => {
	console.error(e);
});

app.listen(5000, () => {
  console.log("Start Server...!");
})
