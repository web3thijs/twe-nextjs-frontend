/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from "react";
import {
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import Title from "../../shared/Title";
import Modal from "../../shared/Modal";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
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
      })
      .catch(function () {
        console.log("Error");
        setIsSubmitting(false);
      });
  }
  return (
    <>
      <div className="container relative">
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          {/* <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
          <Title
            small={"Contact"}
            big={"Vraag uw offerte aan of stel een vraag"}
            outline={"center"}
          ></Title>
          <form
            method="POST"
            onSubmit={submitForm}
            className="mx-auto mt-16 max-w-3xl sm:mt-20"
            id="contact-form"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Voornaam <span className="text-red-400">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-greenish sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Achternaam <span className="text-red-400">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-greenish sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Bedrijf
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-greenish sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-greenish sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  GSM-nummer
                </label>
                <div className="relative mt-2.5">
                  <input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-greenish sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Bericht <span className="text-red-400">*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-greenish sm:text-sm sm:leading-6"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
              {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-greenish' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greenish'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-greenish">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group> */}
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className={`block w-full rounded-md ${isSubmitting ? 'bg-grey hover:bg-grey focus-visible:outline-grey' : 'bg-greenish hover:bg-greenish focus-visible:outline-greenish'} px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                disabled={isSubmitting ? true : false}
              >
                Verzenden
              </button>
            </div>
          </form>
          <div className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow mt-8 sm:mt-10 max-w-3xl mx-auto">
            {/* <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">{'person.name'}</h3>
                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {'person.role'}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">{'title'}</p>
            </div>
            <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={'person.imageUrl'} alt="" />
          </div> */}
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:info@tw-elek.be`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Email
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:+32 471 25 39 84`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <PhoneIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    GSM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
}
