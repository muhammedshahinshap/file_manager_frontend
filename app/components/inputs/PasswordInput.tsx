"use client";
import { InputHTMLAttributes, useState } from "react";

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "type"
>;

export default function PasswordInput({ ...rest }: InputProps) {
  const [state, setState] = useState<boolean>(false);
  const handleTogglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setState(!state);
  };

  return (
    <div className="relative">
      <input
        {...rest}
        type={state ? "text" : "password"}
        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={(e) => handleTogglePassword(e)}
        className="absolute right-4 top-2 text-gray-500 cursor-pointer"
      >
        {state ? "Hide" : "Show"}
      </button>
    </div>
  );
}
