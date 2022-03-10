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
        <div className="md:mx-auto mt-16 md:mt-0">
            <div className="flex justify-center md:inline">
                <img src={ img } alt={ title } className="mr-6 md:mx-auto"/>
                <p className="text-blueish text-xl my-auto font-bold md:mt-3">{ title }</p>
            </div>
            <div className="flex justify-center">
                <div className="sm:w-3/4 md:w-full">
                    <ul className="mt-8 text-left columns-1 sm:columns-2 md:columns-1 leading-8">
                        {rows.map((value, index) => {
                            return <li className="text-gray" key={index}><FontAwesomeIcon icon={faCheck} className={'text-greenish text-xl mr-2'}/> {value}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Column;