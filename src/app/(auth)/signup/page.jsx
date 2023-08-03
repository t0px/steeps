"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        return new Error("Couldn't receive data from user fetch.");
      }
      return res.json();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form
      className="w-full flex items-center gap-4 flex-col"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm">Email</label>
        <input
        required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          placeholder="Email"
          className="py-2 px-4 border rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm">Username</label>
        <input
        required
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          type="text"
          placeholder="Username"
          className="py-2 px-4 border rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm">Profile Picture</label>
        <input
          value={formData.avatar}
          onChange={(e) =>
            setFormData({ ...formData, avatar: e.target.value })
          }
          type="text"
          placeholder="Profile Picture"
          className="py-2 px-4 border rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm">Password</label>
        <input
        required
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
          placeholder="Password"
          className="py-2 px-4 border rounded-lg"
        />
      </div>
      <input
        type="submit"
        value="Signup"
        className="py-2 px-4 border cursor-pointer bg-blue-600 text-white rounded-lg"
      />
    </form>
  );
};

export default SignupPage;
