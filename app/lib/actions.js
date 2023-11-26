"use server";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { Product, User } from "./models";
import { signIn } from "../auth";



export const addUser = async (formData) => {

    const { id, username, email, password, phone, address, isAdmin, isActive } =
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
        throw new Error("Failed to create product!");

    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete user!");
    }

    revalidatePath("/dashboard/products");
};

export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
        Object.fromEntries(formData);

    try {
        connectToDB();

        const updateFields = {
            title,
            desc,
            price,
            stock,
            color,
            size,
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update product!");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        await connectToDB();

        if (!id || typeof id !== 'string') {
            console.error('Invalid user id. Received:', id);
            throw new Error('Invalid user id');
        }

        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        // throw new Error("Failed to update user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Product.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete product!");
    }

    revalidatePath("/dashboard/products");
};

// export const authenticate = async (prevState, formData) => {
//     const { username, password } = Object.fromEntries(formData);

//     try {
//         await signIn("credentials", { username, password });
//     } catch (err) {
//         return "Wrong Credentials!";
//     }
// };










