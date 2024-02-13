import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={label}
        className="text-xs tracking-wider font-base uppercase pl-2 text-white"
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-2xl  py-3 px-4 hover:outline-[#0000ff] outline-none bg-[#1A1A1C]"
      />
    </div>
  );
};

export default Input;
