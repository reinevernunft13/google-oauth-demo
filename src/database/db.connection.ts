import mongoose from 'mongoose';

//Builds the MongoDB connection string
const mongoURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const initDB = async () => {
  
  try {
      //Connects to MongoDB
      await mongoose.connect(mongoURI);
      console.log(`Connected to MongoDB database ${process.env.DB_NAME}`);
  } catch(err) {
        console.log(err);
  }

}

export default initDB;