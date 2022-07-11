import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

type ButtonProps = {
    text: string;
    outline: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>
    callback?: MouseEventHandler<HTMLButtonElement>
    className?: string;
}

function Button({text, outline, className, callback}: ButtonProps) {
    if(outline == false){
        return <button type="button" onClick={callback} className={`text-base text-center text-white bg-greenish font-bold border-solid border-2 border-greenish rounded-full px-6 py-2 ${ className }`}>{ text }</button>
    } else {
        return <button type="button" onClick={callback} className="text-base text-center text-greenish font-semibold border-solid border-2 border-greenish rounded-full px-6 py-2">{ text }</button>
    }
}

export default Button;