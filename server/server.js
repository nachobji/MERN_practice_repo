import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from 'cors';
import ConnectDb from './ConnectDb.js';
import User from './models/User.js';

app.use(cors());
app.use(express.json());
app.get('/api/v1/users', async (req, res) => {
  try {
    const response = await User.find({}).exec();
    res.status(200).json({response});
  } catch (err) {
    console.error(err.message);
    res.status(500);
  }
});

const Start = async () => {
  try {
    await ConnectDb();
    app.listen(process.env.PORT, () => {
      console.log(`Server runing on PORT: ${process.env.PORT}`);
    });
  } catch (err) {
    console.error(`ConnectDb didn't work: ${err.message}`);
  }
}
Start();
