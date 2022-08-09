import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

type ButtonProps = {
    text: string;
    outline: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>
    callback?: MouseEventHandler<HTMLButtonElement>
    className?: string;
}

const Button = ({text, outline, className, callback}: ButtonProps) => {
    if(outline == false){
        return <button type="button" onClick={callback} className={`text-base text-center text-white font-semibold bg-greenish rounded-2xl px-8 py-3 ${ className }`}>{ text }</button>
    } else {
        return <button type="button" onClick={callback} className="text-base text-center text-greenish font-semibold bg-white shadow-3xl rounded-2xl px-8 py-3 border-solid border-2 border-gray-light">{ text }</button>
    }
}

export default Button;