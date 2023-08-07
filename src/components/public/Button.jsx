import Link from "next/link";

export const PrimaryBtn = ({ handleClick, className, children }) => {
  return (
    <button
      className={`text-lg border border-purple-500/25 flex items-center gap-1 bg-violet-300 w-fit font-semibold px-4 rounded-full py-1 hover:bg-violet-400 duration-300`}
      onClick={handleClick || ""}
    >
      {children}
    </button>
  );
};

export const SecondaryBtn = ({ href, className, children }) => {
  return (
    <Link
      className={`text-lg border border-purple-500/25 flex items-center gap-1 bg-violet-300 w-fit font-semibold px-4 rounded-full py-1 hover:bg-violet-400 duration-300 ${
        className ? className : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export const SubmitBtn = ({ value, className }) => {
  return (
    <input
    value={value}
      className={`text-lg border border-purple-500/25 flex items-center gap-1 bg-violet-300 w-fit font-semibold px-4 rounded-full py-1 hover:bg-violet-400 duration-300 ${
        className ? className : ""
      }`}
    />
  );
};
