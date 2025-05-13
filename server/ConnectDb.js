import mongoose from 'mongoose';

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (err) {
    console.error(`Error: database connection failed ${err.message}`);
  }
}
export default ConnectDb;
