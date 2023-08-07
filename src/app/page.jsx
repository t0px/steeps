import { SecondaryBtn } from "@/components/public/Button";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineArrowRight} from 'react-icons/ai'

export const metadata = {
  title: "Home - steeps",
};

export default function HomePage() {
  return (
    <section className="h-full justify-center items-center flex flex-col gap-3">
      <Image
        src="/favicon.png"
        width={75}
        height={75}
        className="object-cover hover:animate-spin hover:cursor-none"
        alt="steeps-logo"
      />
      <h1 className="text-6xl font-bold">steeps</h1>
      <h2 className="text-sm text-neutral-500">
        Talk to anyone, about anything.
      </h2>
      <SecondaryBtn href="/explore" className="mt-4">
        <AiOutlineArrowRight /> Get Started
      </SecondaryBtn>
    </section>
  );
}
