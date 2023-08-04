import Image from "next/image";
import Link from "next/link";
import {AiOutlineArrowRight} from 'react-icons/ai'

export const metadata = {
  title: "Home - steeps",
};

export default function Home() {
  return (
    <section className="h-full justify-center items-center flex flex-col gap-3">
      <Image src="/favicon.png" width={75} height={75} className="object-cover hover:animate-spin hover:cursor-none" />
        <h1 className="text-6xl font-bold">steeps</h1>
      <h2 className="text-sm text-neutral-500">
        Talk to anyone, about anything.
      </h2>
      <Link
        href="/explore"
        type="button"
        className="flex gap-2 items-center bg-blue-200 h-fit hover:bg-blue-300 w-fit capitalize border rounded-full  transition cursor-pointer
               border-blue-500/25  px-4 py-1"
      >
        Get Started
        <AiOutlineArrowRight />
      </Link>
    </section>
  );
}
