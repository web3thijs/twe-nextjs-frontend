import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faClipboardQuestion,
  faEnvelope,
  faGlobe,
  faGlobeEurope,
  faInfoCircle,
  faLocation,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../shared/Title";
import Form from "./Form";
import Info from "./Info";

function Contact() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-col2s-">
        <Title
          small={"Contact"}
          big={"Vraag uw offerte aan of stel een vraag"}
          outline={"center"}
        ></Title>
      </div>
      <div className="grid grid-cols-1">
        <div className="mt-12 order-0 md:order-1">
          <div className="max-w-4xl mx-auto">
            <Form></Form>
          </div>
        </div>
        <div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 justify-center max-w-3xl mx-auto">
            <div className="flex">
              <a
                href="mailto: info@tw-elek.be"
                className="grid grid-rows-2 mx-auto"
              >
                <FontAwesomeIcon
                  icon={faEnvelope as IconProp}
                  className={"text-blueish text-greenish my-auto mx-auto"}
                  size={'2x'}
                />
                <span className="ml-3 my-auto text-gray mt-2">
                  info@tw-elek.be
                </span>
              </a>
            </div>
            <div className="flex mt-10 md:mt-0">
              <a
                href="tel: +32471 25 39 84"
                className="grid grid-rows-2 mx-auto"
              >
                <FontAwesomeIcon
                  icon={faPhone as IconProp}
                  className={"text-blueish text-greenish my-auto mx-auto"}
                  size={'2x'}
                />
                <span className="ml-3 my-auto text-gray mt-2">
                  +32 471 25 39 84
                </span>
              </a>
            </div>
            <div className="flex mt-10 md:mt-0">
              <a
                href="https://www.google.com/maps/place/TW+Elektriciteitswerken/@51.2420141,5.1175145,17z/data=!4m5!3m4!1s0x47c6cbe8cf8533e3:0xf48f5de54e148f81!8m2!3d51.2420108!4d5.1196978"
                className="grid grid-rows-2 mx-auto"
              >
                <FontAwesomeIcon
                  icon={faLocationArrow as IconProp}
                  className={"text-blueish text-greenish my-auto mx-auto"}
                  size={'2x'}
                />
                <span className="ml-3 my-auto text-gray mt-2">
                  Boonhofstraat 54, Dessel
                </span>
              </a>
            </div>
            {/* <a
              href="tel: +32471 25 39 84"
              className="flex bg-white border border-solid border-grey-light rounded-xl w-full sm:w-11/12 py-5 px-7 shadow-3xl"
            >
              <FontAwesomeIcon
                icon={faPhone as IconProp}
                className={"text-blueish text-greenish my-auto mx-3"}
              />
              <span className="ml-3 my-auto text-gray ">+32 471 25 39 84</span>
            </a>
            <a
              href="mailto: twelektriciteitswerken@outlook.com"
              className="flex bg-white border border-solid border-grey-light rounded-xl w-full sm:sm:w-11/12 py-5 px-7 shadow-3xl"
            >
              <FontAwesomeIcon
                icon={faEnvelope as IconProp}
                className={"text-blueish text-greenish my-auto mx-3"}
              />
              <span className="ml-4 my-auto text-gray">info@tw-elek.be</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
