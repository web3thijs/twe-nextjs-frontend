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
        <div className="sm:mx-auto mt-16 sm:mt-0">
            <div className="flex ml-3 sm:ml-3 sm:inline">
                <img src={ img } alt={ title } className="mr-6 sm:mx-auto"/>
                <p className="text-blueish text-xl my-auto font-bold sm:mt-3">{ title }</p>
            </div>
            <div className="flex ml-3 sm:ml-0 sm:justify-center">
                <div className="sm:w-full">
                    <ul className="mt-8 text-left columns-1 xs:columns-2 sm:columns-1 leading-8">
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