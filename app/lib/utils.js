
// import mongoose from 'mongoose';

// const connection = {};


// export const connectToDB = async () => {
//     try {
//         if (connection.isConnected) return;
//         const db = await mongoose.connect(process.env.MONGO);
//         // console.log(connection);
//         console.log('MongoDB connected:', connection.isConnected);
//         connection.isConnected = db.connections[0].readyState;
//     } catch (error) {
//         console.log(error);
//         throw new Error(error);
//     }
// };


import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
    try {
        if (connection.isConnected) return;

        const db = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        connection.isConnected = db.connections[0].readyState;
        console.log('MongoDB connected: 👎', connection.isConnected);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw new Error(error);
    }
};