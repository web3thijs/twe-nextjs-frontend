import { CheckCircleIcon, CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#",
    price: { monthly: "$15", annually: "$12" },
    description: "Everything necessary to get started.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "Essential",
    id: "tier-essential",
    href: "#",
    price: { monthly: "$30", annually: "$24" },
    description:
      "Everything in Basic, plus essential tools for growing your business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
  },
  {
    name: "Growth",
    id: "tier-growth",
    href: "#",
    price: { monthly: "$60", annually: "$48" },
    description:
      "Everything in Essential, plus collaboration tools and deeper insights.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <svg className="mx-auto w-[72.1875rem]" viewBox="0 0 1155 678">
          <path
            fill="url(#083c110e-60c8-42bb-a9db-29bba74cc569)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="083c110e-60c8-42bb-a9db-29bba74cc569"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Pricing
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          The right price for you, whoever you are
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo
        reprehenderit in aliquid fugiat dolorum voluptatibus.
      </p>
      <div className="container isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
        {tiers.map((tier) => (
          <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
            <h3
              id={tier.id}
              className="text-base font-semibold leading-7 text-gray-900"
            >
              {tier.name}
            </h3>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                {tier.price.monthly}
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-600">
                /month
              </span>
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              {tier.price.annually} per month if paid annually
            </p>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Buy plan
            </a>
            <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
              {tier.description}
            </p>
            <ul
              role="list"
              className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckCircleIcon
                    className="h-6 w-5 flex-none text-indigo-600"
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
