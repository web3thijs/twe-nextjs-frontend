import React from "react";
import Image from "next/image";

type ProjectProps = {
  img: string;
};

function Project({ img }: ProjectProps) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-3xl">
        <div className="relative z-0 h-64 w-80">
          <Image
            alt={"title"}
            src={img}
            layout={"fill"}
            priority
            className="rounded-t-xl"
            objectFit="cover"
          />
        </div>
        <div className={"px-6 py-5"}>
          <p className="font-semibold text-blueish">Tuinhuis</p>
          <p className="text-gray">Wij hebben dit tuinhuis...</p>
        </div>
      </div>
    </>
  );
}

export default Project;
