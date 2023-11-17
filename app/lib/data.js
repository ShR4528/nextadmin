import { User } from "./models";
import { connectToDB } from "./utils";


export const fetchUser = async () => {
    console.log(fetchUser);
    try {
        connectToDB();
        const user = await User.find();
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};