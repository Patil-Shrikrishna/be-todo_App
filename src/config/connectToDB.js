import mongoose from 'mongoose';

async function connectToDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.error(err)
        connectToDB()
    }
}

export default connectToDB;