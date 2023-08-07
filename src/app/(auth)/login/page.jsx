"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username_or_email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState('');
  const params = useSearchParams();

  const router = useRouter();
  const session = useSession();

  if (session.status === "authenticated") {
    router.push('/explore')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("credentials", {...formData});
    const errorMsg = params.get("error");
    setErrMsg(errorMsg);
 };

  return (
    <section className="min-h-full flex justify-center flex-col items-center gap-16">
      <div>
        <h1 className="text-2xl">
          Sign in to your <strong>steeps</strong> account.
        </h1>
      </div>
      <form
        className="flex items-center justify-center gap-4 flex-col w-2/5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm">Username / Email</label>
          <input
            value={formData.username_or_email}
            onChange={(e) =>
              setFormData({ ...formData, username_or_email: e.target.value })
            }
            type="text"
            placeholder="Username / Email"
            className="py-2 px-4 border rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm">Password</label>
          <input
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
          value="Login"
          className="py-2 px-4 w-full border cursor-pointer bg-blue-600 hover:bg-blue-500 duration-300 text-white rounded-lg"
        />
        {errMsg ? (<span>{errMsg}</span>) : ""}
        <span className="text-sm">
          Don't have an account?{" "}
          <Link className="underline" href="/signup">
            Sign Up.
          </Link>
        </span>
        <span className="hidden text-green-500 text-red-500 text-purple-500 text-yellow-500"></span>
      </form>
    </section>
  );
};

export default LoginPage;
