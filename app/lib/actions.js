"use server";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { Product } from "./models";



export const addUser = async (formData) => {

    const { username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        await connectToDB();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });


        await newUser.save();
        console.log('User saved successfully.');
    } catch (error) {
        console.log(error);
    }

    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
};

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } =
        Object.fromEntries(formData);

    try {
        await connectToDB();
        const newProduct = new Product({
            title, desc, price, stock, color, size
        });


        await newProduct.save();
    } catch (error) {
        console.log(error);
        // throw new Error("Failed to create product!");

    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};