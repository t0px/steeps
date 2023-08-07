"use client"

import { useRouter } from "next/navigation";
import { PrimaryBtn } from "@/components/public/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const metadata = {
  title: "404 - steeps",
};

const Custom404 = () => {
  const router = useRouter();

  return (
    <section className="flex h-full justify-center items-center flex-col gap-3">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-neutral-500 text-lg">The page you were looking for does not exist.</p>
      <PrimaryBtn handleClick={() => router.back()}><AiOutlineArrowLeft /> Go Back</PrimaryBtn>
    </section>
  );
};

export default Custom404;
