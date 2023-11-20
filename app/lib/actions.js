import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";



export const addUser = async (formData) => {
    "use server";
    const { username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        const newUser = new User({
            username, email, password, phone, address, isAdmin, isActive
        });

        await newUser.save();
    } catch (error) {
        console.log(err);

        throw new Error("Failed");
    }

    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
};