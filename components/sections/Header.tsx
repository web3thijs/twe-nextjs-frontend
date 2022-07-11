import Button from "../shared/Button";
import Image from 'next/image'
import next from "next";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter()

  const navigate = (url: string) => {
    router.push('./#' + url)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="my-auto mx-auto text-center lg:text-left">
          <p className="text-xl font-light text-gray font-extrabold">TW Elektriciteitswerken</p>
          <p className="text-4xl sm:text-6xl font-bold text-upper text-blueish mb-6 mt-3">Voor al uw elektriciteitswerken</p>
          <div className="">
            <Button text={"Contact"} outline={false} className={"mr-3"} callback={() => navigate("contact")}></Button>
            <Button text={"Diensten"} outline={true} callback={() => navigate("services")}></Button>
          </div>
        </div>

        <div className="flex mx-auto mt-16 lg:mt-0">
          <div className="header-img">
              <Image alt="Mountains" src={'/header/one.jpg'} layout="fill" objectFit="cover" priority/>
            </div>

            <div className="header-img mt-0 lg:mt-5 mx-3">
              <Image alt="Mountains" src={'/header/two.jpg'} layout="fill" objectFit="cover" priority/>
            </div>

            <div className="header-img mt-0 lg:mt-10">
              <Image alt="Mountains" src={'/header/three.jpg'} layout="fill" objectFit="cover" priority/>
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
