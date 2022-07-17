import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faClipboardQuestion, faEnvelope, faGlobe, faGlobeEurope, faInfoCircle, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./Form";
import Info from "./Info";

function Contact() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-col2s-">
        <div className="text-center">
          <p className="text-gray font-semibold text-xl mb-3">Contact</p>
          <p className="text-3xl md:text-5xl font-bold text-blueish">
            Vraag uw offerte aan of{" "}
            <span className="hidden xl:inline">
              <br />
            </span>{" "}
            stel een vraag
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="mt-6 order-1">
          <div className="max-w-4xl mx-auto">
            <Form></Form>
          </div>
        </div>
        <div>
        <div className="mt-6 flex space-x-6 justify-center">
            <div className="flex bg-white border border-solid border-gray-light rounded-xl w-fit py-5 px-7 shadow-3xl">
              <FontAwesomeIcon
                icon={faPhone as IconProp}
                size={"xl"}
                className={"text-blueish"}
              />
            </div>
            <div className="flex bg-white border border-solid border-gray-light rounded-xl w-fit py-5 px-7 shadow-3xl">
              <FontAwesomeIcon
                icon={faEnvelope as IconProp}
                size={"xl"}
                className={"text-blueish"}
              />
            </div>
            <div className="flex bg-white border border-solid border-gray-light rounded-xl w-fit  py-5 px-7 shadow-3xl">
              <FontAwesomeIcon
                icon={faGlobeEurope as IconProp}
                size={"xl"}
                className={"text-blueish"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
