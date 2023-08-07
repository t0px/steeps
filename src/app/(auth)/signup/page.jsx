"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

const Signup = () => {
  const [isContinued, setIsContinued] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    avatar: "",
  });

  const router = useRouter();

  const convertToBase64 = (e) => {
    console.log(e)
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFormData({...formData, avatar: reader.result})
    }
    reader.onerror = error => {
      console.log("Error:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 201) {
        router.push("/login?success=Account has been created.");
      } else {
        setErrMsg(res.json());
      }
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <section className="min-h-full flex justify-center flex-col items-center gap-16">
      <div>
        <h1 className="text-2xl">
          Create your <strong>steeps</strong> account.
        </h1>
        <p className="mt-2 text-sm text-neutral-500 text-center">
          By signing up, you agree to our{" "}
          <span className="underline text-blue-600">Terms & Service</span>.
        </p>
      </div>
      <form
        className="flex items-center justify-center gap-4 flex-col w-2/5"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4 w-full">
          {!isContinued ? (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="py-2 px-4 border rounded-lg"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      username: e.target.value.trim(),
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="py-2 px-4 border rounded-lg"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2 col-span-2">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="py-2 px-4 border rounded-lg"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value.toLowerCase() })
                  }
                />
              </div>
              <button
                onClick={() => setIsContinued(true)}
                type="button"
                className="col-span-2 py-2 px-4 w-full border cursor-pointer bg-blue-600 hover:bg-blue-500 duration-300 text-white rounded-lg"
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2 col-span-2">
                <label className="text-sm">Upload Avatar</label>
                <div className="flex gap-3">
                  <div className="border relative aspect-square h-32 w-fit bg-white rounded-md">
                    <Image
                      className="object-cover"
                      fill
                      src={formData.avatar || "/placeholder_avatar.png"}
                      alt="User Avatar"
                    />
                  </div>
                  <input type="file" className="rounded-md"/>
                </div>
              </div>
              <input
                type="submit"
                value="Create Account"
                className="col-span-2 py-2 px-4 w-full border cursor-pointer bg-blue-600 hover:bg-blue-500 duration-300 text-white rounded-lg"
              />
            </>
          )}
        </div>
        {errMsg ? <span>{errMsg}</span> : ""}
        <span className="text-sm">
          Already have an account?{" "}
          <Link className="underline" href="/login">
            Sign In.
          </Link>
        </span>
        <span className="hidden text-green-500 text-red-500 text-purple-500 text-yellow-500"></span>
      </form>
    </section>
  );
};

export default Signup;
