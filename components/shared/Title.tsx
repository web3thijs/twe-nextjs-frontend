import React from "react";

type TitleProps = {
  small: string;
  big: string;
  outline?: "left" | "center" | "right";
};

function Title({ small, big, outline = 'left' }: TitleProps) {
  return (
    <div className={`max-w-xl 
        ${outline == "center" && "mx-auto text-center"}
        ${outline == "right" && "ml-auto text-right"}
    `}>
      <p className={`text-grey font-semibold text-sm sm:text-xl mb-1`}>
        {small}
      </p>
      <p className={`text-3xl sm:text-5xl font-bold text-blueish`}>{big}</p>
    </div>
  );
}

export default Title;
