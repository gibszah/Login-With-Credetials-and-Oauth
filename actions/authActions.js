"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/userModel";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/token";

export async function updateUser({ name, image }) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized!");

  try {
    const user = await User.findByIdAndUpdate(
      session?.user?._id,
      {
        name,
        image,
      },
      { new: true }
    ).select("-password");
    if (!user) throw new Error("Email does not exist!");
    return { msg: "Update Profile Succesfully" };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function signUpWithCredentials(data) {
  try {
    const user = await User.findOne({ email: data.email });
    if (user) throw new Error("Email already exist!");

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }
    const token = generateToken({ user: data });
    console.log({ token });

    const newDataUser = new User({
      name: data.name,
      email: data.email,
    });

    await newDataUser.save();
    return {
      msg: "Sign Up Success! ",
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
