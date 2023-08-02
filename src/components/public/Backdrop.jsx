"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const Backdrop = ({ children }) => {
  const router = useRouter();
  const backdropRef = useRef(null);

  const handleClick = (e) => {
    if (e.target === backdropRef.current) {
      router.back();
    }
  };

  return (
    <div
      ref={backdropRef}
      onClick={(e) => handleClick(e)}
      className="backdrop-brightness-[25%] pt-6 fixed inset-0 flex overflow-y-scroll justify-center items-center"
    >
      {children}
    </div>
  );
};

export default Backdrop;
