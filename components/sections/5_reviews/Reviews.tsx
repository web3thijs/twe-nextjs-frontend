import Button from "../../shared/Button";
import Title from "../../shared/Title";
import Image from "next/image";

function Reviews() {
  return (
    <>
    <div className="container">
      <div className="grid lg:grid-cols-2 lg:space-x-6">
        <div className="">
        <Title
          small={"Reviews"}
          big={"Wat vonden de klanten van onze service?"}
        ></Title>
          <div className="mt-6">
            <div className="flex content-center">
              <div className="relative w-8 h-8">
                <Image
                  alt="Facebook logo"
                  src={"/reviews/facebook.svg"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex my-auto ml-5">
                {[...Array(5)].map((x, i) => (
                  <div key={i} className={"relative ml-2 w-6 h-6"}>
                    <Image
                      alt="Star filled"
                      src={"/reviews/star-fill.svg"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex content-center">
              <div className="relative w-8 h-8">
                <Image
                  alt="Google logo"
                  src={"/reviews/google.svg"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex my-auto ml-5">
                {[...Array(5)].map((x, i) => (
                  <div key={i} className={"relative ml-2 w-6 h-6"}>
                    <Image
                      alt="Star filled"
                      src={"/reviews/star-fill.svg"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 lg:my-auto bg-white p-12 rounded-xl border border-solid border-gray-light shadow-3xl w-full">
          <Image
            alt="Quote"
            src={"/reviews/quote.svg"}
            layout="fixed"
            height={48}
            width={48}
            objectFit="cover"
          />
          <p className="text-gray mt-3">
            Snelle en zeer professionele service. Van offerte tot oplevering in minder dan 10 dagen. Mercikes Thomas !!!
          </p>
          <div className="mt-5 flex">
            <div className="rounded-full bg-temp-purple text-white w-10 h-10 font-medium flex justify-center">
              <p className="my-auto text-sm">BD</p>
            </div>
            <p className="font-semibold my-auto ml-3">Bert Diels</p>
          </div>
        </div>
        <div></div>
      </div>
      </div>
    </>
  );
}

export default Reviews;
