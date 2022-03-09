import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type ButtonProps = {
    img: string;
    title: string;
    rows: string[];
}

function Column({img, title, rows}: ButtonProps) {
    return <>
        <div className="">
            <img src={ img } alt={ title } className="mx-auto"/>
            <p className="text-blueish text-xl mt-5 font-bold">{ title }</p>
            <ul className="mt-8 text-left ml-32">
                {rows.map((value, index) => {
                    return <li className="mt-3 text-gray" key={index}><FontAwesomeIcon icon={faCheck} className={'text-greenish text-xl mr-2'}/> {value}</li>
                })}
            </ul>
        </div>
    </>
}

export default Column;