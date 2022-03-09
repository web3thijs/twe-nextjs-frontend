import Button from "../shared/Button";
import Image from 'next/image'

function Header() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="my-auto mx-auto text-center lg:text-left">
          <p className="text-4xl sm:text-5xl font-black text-blueish">TW</p>
          <p className="text-4xl sm:text-5xl font-black text-blueish mt-1 md:mt-3">
            Elektriciteitswerken
          </p>
          <p className="text-2xl mt-3">Voor al uw elektriciteitswerken</p>
          <div className="mt-3">
            <Button text={"Contact"} outline={false} className={"mr-3"}></Button>
            <Button text={"Diensten"} outline={true}></Button>
          </div>
        </div>

        <div className="flex mx-auto mt-16 lg:mt-0">
          <div className="header-img">
              <Image alt="Mountains" src={'/header/one.jpg'} layout="fill" objectFit="cover"/>
            </div>

            <div className="header-img mt-0 lg:mt-5 mx-3">
              <Image alt="Mountains" src={'/header/two.jpg'} layout="fill" objectFit="cover"/>
            </div>

            <div className="header-img mt-0 lg:mt-10">
              <Image alt="Mountains" src={'/header/three.jpg'} layout="fill" objectFit="cover"/>
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
