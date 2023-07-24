"use client";
import React from "react";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button className="btn btn-info" onClick={signOut}>
      SignOut
    </button>
  );
};

export default SignOut;
