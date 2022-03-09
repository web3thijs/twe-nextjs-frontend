import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../components/sections/Contact";
import Header from "../components/sections/Header";
import References from "../components/sections/References";
import Reviews from "../components/sections/Reviews";
import Services from "../components/sections/services/Services";

const Home: NextPage = () => {
  return (
    <>
      <section className="mt-16">
        <Header></Header>
      </section>

      <section className="mt-16">
        <Services></Services>
      </section>

      <section className="mt-16" id="contact">
        <Contact></Contact>
      </section>

      <section className="mt-16">
        <References></References>
      </section>

      <section className="mt-16">
        <Reviews></Reviews>
      </section>
    </>
  );
};

export default Home;
