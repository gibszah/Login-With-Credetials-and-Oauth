import React from "react";
import Form from "../global/Form";
import { updateUser } from "@/actions/authActions";
import Button from "../global/Button";

const ProfileUpdate = ({ update }) => {
  async function handleUpdateProfile(formData) {
    const name = formData.get("name");
    const image = formData.get("image");

    if (update) {
      update({ name, image });
    }

    const res = await updateUser({ name, image });
    if (res?.msg) {
      alert(res?.msg);
      window.location.reload();
    }
  }

  return (
    <div>
      <h2>Update Profile</h2>

      <Form action={handleUpdateProfile}>
        <input
          className="border border-sky-950 border-spacing-3"
          type="text"
          name="name"
          placeholder=" Name"
          required
        />
        <input
          className="mx-2 border border-sky-950 border-spacing-3"
          type="text"
          name="image"
          placeholder=" Image"
          required
        />

        <Button value="Update Profile" />
      </Form>
    </div>
  );
};

export default ProfileUpdate;
