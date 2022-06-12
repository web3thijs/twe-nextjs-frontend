import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../components/sections/contact/Contact";
import Header from "../components/sections/Header";
import References from "../components/sections/references/References";
import Reviews from "../components/sections/Reviews";
import Services from "../components/sections/services/Services";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TW Elektriciteitswerken</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="mt-16" id="header">
        <Header></Header>
      </section>

      <section className="mt-16" id="services">
        <Services></Services>
      </section>

      <section className="mt-16" id="contact">
        <Contact></Contact>
      </section>

      <section className="mt-16" id="references">
        <References></References>
      </section>

      <section className="mt-16" id="reviews">
        <Reviews></Reviews>
      </section>

      <section className="mt-16" id="footer">
      </section>
    </>
  );
};

export default Home;
