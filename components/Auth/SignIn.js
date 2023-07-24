"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const SignIn = ({ callbackUrl }) => {
  return (
    <div>
      <h2>Sign In with NextAuth</h2>
      <div style={{ margin: "30px 0" }}>
        <button
          className="btn btn-primary"
          onClick={() => signIn("google", { callbackUrl })}
        >
          Continue with Google
        </button>
      </div>

      <div style={{ margin: "30px 0" }}>
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
