import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
    id: string;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
}

function Input({id, type, placeholder}: InputProps) {
    return <input id={id} name={id} type={type} className="w-full px-5 py-3 rounded-lg" placeholder={placeholder}></input>
}

export default Input;