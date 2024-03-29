import { CheckCircleIcon, CheckIcon } from "@heroicons/react/20/solid";
import { Category1 } from "./icons/Category1";
import { Category2 } from "./icons/Category2";
import { Category3 } from "./icons/Category3";

const tiers = [
  {
    name: "Nieuwbouw",
    id: "nieuwbouw",
    img: <Category1 />,
    features: [
      "Totaalproject",
      "Verdeelkasten",
      "Laadpalen",
      "Domotica",
      "Afwerking",
      "Armaturen",
      "Slijpwerken",
      "Databekabeling",
      "Bedrijfspanden",
      "Bedrijfshallen",
      "...",
    ],
  },
  {
    name: "Renovaties",
    id: "renovaties",
    img: <Category2/>,
    features: [
      "Totaalproject",
      "Bekabeling",
      "Aarding",
      "Schema´s",
      "Databekabeling",
      "Bedrijfspanden",
      "Bedrijfshallen",
      "...",
    ],
  },
  {
    name: "Klusjes",
    id: "klusjes",
    img: <Category3/>,
    features: [
      "Aarding",
      "Aanpassingen",
      "Verlichting",
      "Stopcontacten",
      "Foutopsporing",
      "Tuinoverkapping",
      "Tuinhuis",
      "...",
    ],
  },
];

export default function Services() {
  return (
    <div className="container relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <svg className="mx-auto w-[72.1875rem]" viewBox="0 0 1155 678">
          <path
            fill="#8BC9BF"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
            >
              <stop stopColor="#8BC9BF" />
              <stop offset={1} stopColor="#8BC9BF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-greenish">
          Diensten
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-blueish sm:text-5xl">
          Kwaliteit aan een scherpe prijs
        </p>
      </div>
      <div className="container isolate -mt-6 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-16 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
        {tiers.map((tier) => (
          <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
            {/* <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                Iconµµ
              </span>
            </p> */}
            {/* <Image src={tier.img} width={64} height={64} alt={tier.id} className={'text-gray-100'}/> */}

            <p className="mt-3 leading-6 text-gray-500  font-semibold">
              {tier.name}
            </p>
            <div className={"mt-6 fill-blueish"}>{tier.img}</div>
            <a
              href={"#contact"}
              aria-describedby={tier.id}
              className="mt-10 block rounded-md bg-greenish px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-greenish-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greenish-light"
            >
              Contact
            </a>
            <ul
              role="list"
              className="mt-10 space-y-3 text-sm leading-6 text-gray-600"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckCircleIcon
                    className="h-6 w-5 flex-none text-greenish"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
