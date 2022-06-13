import Button from "../shared/Button";
import Title from "../shared/Title";
import Image from 'next/image'

function Reviews() {
  return (
    <>
        <div className="grid md:grid-cols-2">
            <div>
              <Title text="Reviews" row1={"Wat vonden de klanten"} row2={"van onze service?"}></Title>

              <div className="mt-6 flex content-center">
                <Image alt="Facebook logo" src={'/reviews/facebook.svg'} layout="fixed" height={48} width={48} objectFit="cover"/>
                <div className="flex my-auto ml-5">
                  {[...Array(5)].map((x, i) =>
                    <div key={i} className={'ml-2'}>
                      <Image alt="Star filled" src={'/reviews/star-fill.svg'} layout="fixed" height={28} width={28} objectFit="cover"/>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex content-center">
                <Image alt="Google logo" src={'/reviews/google.svg'} layout="fixed" height={48} width={48} objectFit="cover"/>
                <div className="flex my-auto ml-5">
                  {[...Array(5)].map((x, i) =>
                    <div key={i} className={'ml-2'}>
                      <Image alt="Star filled" src={'/reviews/star-fill.svg'} layout="fixed" height={28} width={28} objectFit="cover"/>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 md:my-auto">
              <Image alt="Quote" src={'/reviews/quote.svg'} layout="fixed" height={48} width={48} objectFit="cover"/>
              <p className="text-gray mt-3">Heeft on huis voorzien van elektriciteit, top werk geleverd, netjes,... Goed bezig Thomas!</p>
              <div className="mt-5 flex">
                <div className="rounded-full bg-temp-purple text-white w-10 h-10 font-medium flex justify-center">
                  <p className="my-auto">TM</p>
                </div >
                <p className="font-semibold my-auto ml-3">Tom Meeusen</p>
              </div>
            </div>
            <div>
            </div>
        </div>
    </>
  );
}

export default Reviews;