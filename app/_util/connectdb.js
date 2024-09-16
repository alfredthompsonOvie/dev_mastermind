import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect = async () => {

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

  } catch (e) { 
    console.error('Error connecting to MongoDB', e);
  }
}



export default dbConnect;