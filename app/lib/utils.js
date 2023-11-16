import mongoose from "mongoose";

export const connectToBD = async () => {

    const connection = {};
    try {

        if (connection.isConnected) return;
        const db = await mongoose.connect();
        connection.isConnected = db.connection[0].readyState;
    } catch (error) {
        throw new Error(error);
    }
};

//mongodb://127.0.0.1:27017/test

