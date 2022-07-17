import Image from "next/image";

type InfoProps = {
    img: string;
    text: string;
}

function Info({img, text}: InfoProps) {
    return (
        <>
            <div className="flex my-6">
                <div className="relative z-0 w-12 h-12">
                    <Image alt={'title'} src={img} layout={'fill'} priority/>
                </div>
                <p className="text-gray ml-4 my-auto">{ text }</p>
            </div>
        </>
      );
}

export default Info;