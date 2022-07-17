import React from "react";
import Image from "next/image";

type ProjectProps = {
  img: string;
};

function Project({ img }: ProjectProps) {
  return (
    <>
      <div className="bg-white rounded-xl  border border-solid border-gray-light shadow-3xl p-5 cursor-pointer">
        <div className="relative z-0 h-52 w-96">
          <Image
            alt={"title"}
            src={img}
            layout={"fill"}
            priority
            className="rounded-xl"
            objectFit="cover"
          />
        </div>
        <div className={"mt-6"}>
          <p className="font-semibold text-blueish">Tuinhuis</p>
          <p className="text-gray">Wij hebben dit tuinhuis...</p>
        </div>
        <div className="mt-3">
          <p className="text-greenish font-medium">Lees meer {">"}</p>
        </div>
      </div>
    </>
  );
}

export default Project;
