import Button from "../../shared/Button";
import Title from "../../shared/Title";
import Form from "./Form";
import Info from "./Info";

function Contact() {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
          <p className="text-gray-light font-semibold">Contact</p>
          <p className="text-3xl md:text-4xl font-black text-blueish">Vraag uw offerte aan of <span className="hidden xl:inline"><br/></span> stel een vraag</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-1">
            <div className="mt-6">
              <Info img={"/contact/phone.svg"} text={"+32 471 25 39 84"}></Info>
              <Info img={"/contact/mail.svg"} text={"thijs.wouters@outlook.com"}></Info>
              <Info img={"/contact/website.svg"} text={"boonhofstraat 54, 2480 Dessel"}></Info>
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