import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"

type ButtonProps = {
    img: string;
    title: string;
    rows: string[];
}

function Column({img, title, rows}: ButtonProps) {
    return <>
        <div className="sm:mx-auto mt-16 sm:mt-0">
            <div className="flex ml-3 sm:ml-3 sm:inline">
                <div className="relative z-0 w-24 h-24 mr-5 md:w-32 md:h-32 sm:mx-auto">
                    <Image alt={'title'} src={img} layout={'fill'} priority/>
                </div>
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