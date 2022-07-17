import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
    id: string;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
}

function Input({id, type, placeholder}: InputProps) {
    return <input id={id} name={id} type={type} className="w-full px-7 py-5 rounded-xl border border-solid border-gray-light shadow-3xl" placeholder={placeholder}></input>
}

export default Input;