import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { platform } from "os";
import { useState } from "react";
import Button from "../../shared/Button";
import Input from "../../shared/form/Input";
import Modal from "../../shared/Modal";
import Title from "../../shared/Title";

type FormProps = {};

const Form = ({}: FormProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  async function submitForm(e: any) {
    const formData: any = {};

    e.preventDefault();
    setIsSubmitting(true);

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!(field as any).name) return;
      formData[(field as any).name] = (field as any).value;
    });

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(function () {
        console.log("ok");
        setModalIsOpen(true);
        (document.getElementById("contact-form") as HTMLFormElement).reset();
        setIsSubmitting(false);
      })
      .catch(function () {
        console.log("Error");
        setIsSubmitting(false);
      });
  }

  return (
    <>
      <div className="bg-white  border border-solid border-gray-light rounded-2xl shadow-3xl">
        <form
          method="POST"
          onSubmit={submitForm}
          className="p-3 sm:p-6 text-gray caret-gray"
          id="contact-form"
        >
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2">
            <div className="mx-2">
              {/* <label htmlFor="test">Your email</label> */}
              <Input
                id={"firstName"}
                type={"text"}
                placeholder={"Voornaam"}
                required
              ></Input>
            </div>
            <div className="mx-2 mt-5 sm:mt-0">
              <Input
                id={"lastName"}
                type={"text"}
                placeholder={"Achternaam"}
                required
              ></Input>
            </div>
          </div>

          <div className="mx-2 mt-5">
            <Input
              id={"mail"}
              type={"email"}
              placeholder={"E-mail"}
              required
            ></Input>
          </div>

          <div className="mx-2 mt-4">
            <textarea
              id="message"
              name="message"
              rows={10}
              className="w-full px-7 py-5 rounded-xl border border-solid border-gray-light shadow-3xl focus-visible:outline-greenish-light"
              placeholder="Bericht"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`text-base text-center text-white font-semibold border-solid border-2 rounded-xl px-5 py-2 my-5 ${
                isSubmitting
                  ? "bg-gray border-gray"
                  : "bg-greenish border-greenish"
              }`}
              disabled={isSubmitting ? true : false}
            >
              Verzenden
            </button>
          </div>
        </form>
      </div>

      <Modal isModalOpen={modalIsOpen} hideModal={() => setModalIsOpen(false)}>
        <FontAwesomeIcon
          icon={faCircleCheck as IconProp}
          className="text-greenish text-5xl"
        />
        <p className="pt-3">Uw bericht werd succesvol verzonden.</p>
      </Modal>
    </>
  );
};

export default Form;
