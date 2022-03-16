import React from "react";
import Image from "next/image"

type ProjectProps = {
    img: string;
}

function Project({img}: ProjectProps) {
    return <>
        <div className="relative z-0 h-96 w-60 mr-5">
            <Image alt={'title'} src={img} layout={'fill'} priority className="rounded-lg" objectFit="cover"/>
        </div>
    </>
}

export default Project;