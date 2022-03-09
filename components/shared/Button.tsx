import React from "react";

type ButtonProps = {
    text: string;
    outline: boolean;
    className?: string;
}

function Button({text, outline, className}: ButtonProps) {
    if(outline == false){
        return <button type="button" className={`text-base text-center text-white bg-greenish font-semibold border-solid border-2 border-greenish rounded-lg px-5 py-2 ${ className }`}>{ text }</button>
    } else {
        return <button type="button" className="text-base text-center text-greenish font-semibold border-solid border-2 border-greenish rounded-lg px-5 py-2">{ text }</button>
    }
}

export default Button;