import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  setText: Function;
}

const Input: React.FC<InputProps> = ({ label, placeholder, setText }) => {
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
        onChange={(e) => setText(e.target.value)}
        className="rounded-2xl  py-3 px-4 hover:outline-[#0000ff] outline-none bg-[#1A1A1C]"
      />
    </div>
  );
};

export default Input;
