import Image from "next/image";

type Props = {
    text: string
};

const ReviewCard = ({text}: Props) => {
  return (
    <div className="mt-6 lg:my-auto bg-white p-6 rounded-xl border border-solid border-grey-light shadow-3xl w-full">
      <Image
        alt="Quote"
        src={"/reviews/quote.svg"}
        layout="fixed"
        height={32}
        width={32}
        objectFit="cover"
      />
      <p className="text-gray text-sm mt-1">
        {text}
      </p>
      <div className="mt-5 flex">
        <div className="rounded-full bg-temp-purple text-white w-10 h-10 font-medium flex justify-center">
          <p className="my-auto text-sm">BD</p>
        </div>
        <p className="font-semibold my-auto ml-3">Bert Diels</p>
      </div>
    </div>
  );
};

export default ReviewCard;
