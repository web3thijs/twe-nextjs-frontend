import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
    img: string;
    title: string;
    rows: string[];
}

function Column({img, title, rows}: ButtonProps) {
    return <>
        <div className="sm:mx-auto mt-16 sm:mt-0 bg-white  pt-8 pb-12 px-24 rounded-xl w-fit  border border-solid border-gray-light">
            <div className="flex ml-3 sm:ml-3 sm:inline">
                <div className="relative z-0 mr-5 mb-4 sm:mx-auto">
                    <FontAwesomeIcon icon={faLightbulb as IconProp} size={'4x'} className={'text-blueish'}/>
                </div>
                <p className="text-blueish text-xl my-auto font-semibold">{ title }</p>
            </div>
            <div className="flex ml-3 sm:ml-0">
                <div className="sm:w-full">
                    <ul className="mt-8 text-left columns-1 xs:columns-2 sm:columns-1 leading-8">
                        {rows.map((value, index) => {
                            return <li className="text-gray" key={index}><FontAwesomeIcon icon={faCheck as IconProp} className={'text-greenish text-xl mr-3'}/> {value}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Column;