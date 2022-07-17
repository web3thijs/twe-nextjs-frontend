import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faClipboardQuestion,
  faEnvelope,
  faGlobe,
  faGlobeEurope,
  faInfoCircle,
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
                className={"text-blueish"}
              />
            </div>
            <div className="flex bg-white border border-solid border-gray-light rounded-xl w-fit py-5 px-7 shadow-3xl">
              <FontAwesomeIcon
                icon={faEnvelope as IconProp}
                className={"text-blueish"}
              />
            </div>
            <div className="flex bg-white border border-solid border-gray-light rounded-xl w-fit  py-5 px-7 shadow-3xl">
              <FontAwesomeIcon
                icon={faGlobeEurope as IconProp}
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
