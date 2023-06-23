import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected successfully.' .yellow.bold);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;