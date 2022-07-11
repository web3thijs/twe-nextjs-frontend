import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faClipboardQuestion, faEnvelope, faGlobe, faGlobeEurope, faInfoCircle, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./Form";
import Info from "./Info";

function Contact() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="text-gray">Contact</p>
          <p className="text-3xl md:text-4xl font-bold text-blueish">
            Vraag uw offerte aan of{" "}
            <span className="hidden xl:inline">
              <br />
            </span>{" "}
            stel een vraag
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-1">
          <div className="mt-6">
            <div className="flex bg-white border border-solid border-gray-light rounded-xl w-fit py-3 px-6">
              <FontAwesomeIcon
                icon={faPhone as IconProp}
                size={"xl"}
                className={"text-blueish"}
              />
              <p className="text-gray ml-4 my-auto">+32 471 25 39 84</p>
            </div>
            <div className="flex bg-white border border-solid border-gray-light rounded-xl w-fit py-3 px-6 mt-3">
              <FontAwesomeIcon
                icon={faEnvelope as IconProp}
                size={"xl"}
                className={"text-blueish"}
              />
              <p className="text-gray ml-4 my-auto">thijs.wouters@outlook.com</p>
            </div>
            <div className="flex bg-white border border-solid border-gray-light rounded-xl w-fit py-3 px-6 mt-3">
              <FontAwesomeIcon
                icon={faGlobeEurope as IconProp}
                size={"xl"}
                className={"text-blueish"}
              />
              <p className="text-gray ml-4 my-auto">boonhofstraat 54, 2480 Dessel</p>
            </div>
          </div>
        </div>
        <div className="order-0 md:order-1 mt-0 md:-mt-24">
          <Form></Form>
        </div>
      </div>
    </>
  );
}

export default Contact;
