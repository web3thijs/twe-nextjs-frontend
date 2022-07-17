import Button from "../../shared/Button";
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
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="my-auto mx-auto text-left">
          <p className="text-5xl sm:text-7xl text-blueish mb-6 mt-3 font-bold">Voor al uw <br/>elektriciteits-<br/>werken</p>
          <p className="text-gray mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quo eius tempora, suscipit aut quia, repudiandae dignissimos porro enim, laboriosam consequuntur optio. Eleniti vitae veritatis rerum.</p>
          <div className="">
            <Button text={"Contact"} outline={false} className={"mr-3"} callback={() => navigate("contact")}></Button>
            <Button text={"Diensten"} outline={true} callback={() => navigate("services")}></Button>
          </div>
        </div>

        <div className="mx-auto mt-16 lg:mt-0 hidden lg:flex">
          <Image src={"/logo.svg"} width={300} height={300}/>
        </div>
      </div>
      </div>
    </>
  );
}

export default Header;
