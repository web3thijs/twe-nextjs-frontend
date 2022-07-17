import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../components/sections/3_contact/Contact";
import Header from "../components/sections/1_header/Header";
import References from "../components/sections/4_references/References";
import Reviews from "../components/sections/5_reviews/Reviews";
import Services from "../components/sections/2_services/Services";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TW Elektriciteitswerken</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="pt-32 pb-48" id="header">
        <Header></Header>
      </section>

      <section className="bg-offwhite py-32" id="services">
        <Services></Services>
      </section>

      <section className="py-32" id="contact">
        <Contact></Contact>
      </section>

      <section className="bg-offwhite py-32" id="references">
        <References></References>
      </section>

      <section className="py-32" id="reviews">
        <Reviews></Reviews>
      </section>
    </>
  );
};

export default Home;
