import Button from "../../shared/Button";
import Title from "../../shared/Title";
import Image from "next/image";

function Reviews() {
  return (
    <>
    <div className="container">
      <div className="grid sm:grid-cols-2 space-x-6">
        <div className="">
           <p className="text-gray font-semibold text-xl mb-3">Reviews</p>
            <p className="text-3xl md:text-5xl font-bold text-blueish">
              Wat vonden de klanten van onze service?
            </p>
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
        <div className="mt-6 md:my-auto bg-white p-12 rounded-xl border border-solid border-gray-light shadow-3xl">
          <Image
            alt="Quote"
            src={"/reviews/quote.svg"}
            layout="fixed"
            height={48}
            width={48}
            objectFit="cover"
          />
          <p className="text-gray mt-3">
            Heeft on huis voorzien van elektriciteit, top werk geleverd,
            netjes,... Goed bezig Thomas!
          </p>
          <div className="mt-5 flex">
            <div className="rounded-full bg-temp-purple text-white w-10 h-10 font-medium flex justify-center">
              <p className="my-auto">TM</p>
            </div>
            <p className="font-semibold my-auto ml-3">Tom Meeusen</p>
          </div>
        </div>
        <div></div>
      </div>
      </div>
    </>
  );
}

export default Reviews;
