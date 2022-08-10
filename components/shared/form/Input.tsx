import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
};

function Input({ id, type, placeholder, required = false }: InputProps) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      className="w-full px-7 py-5 rounded-xl border border-solid border-gray-light shadow-3xl focus-visible:outline-greenish-light"
      placeholder={placeholder}
      required={required}
    ></input>
  );
}

export default Input;
