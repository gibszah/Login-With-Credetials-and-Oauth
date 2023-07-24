"use client";
import { signUpWithCredentials } from "@/actions/authActions";
import Button from "../global/Button";
import Form from "../global/Form";

const SignUp = () => {
  async function handleSignUpCredentials(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ name, email, password });
    const res = await signUpWithCredentials({ name, email, password });

    if (res?.msg) alert(res?.msg);
  }

  return (
    <div>
      <h2>Sign up with NextAuth</h2>

      <Form action={handleSignUpCredentials} style={{ margin: "30px 0" }}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="your email" required />
        <input
          type="password"
          name="password"
          placeholder="your password"
          required
        />

        <Button value="Register" />
      </Form>
    </div>
  );
};

export default SignUp;
