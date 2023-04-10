import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../components/sections/3_contact/Contact";
import Header from "../components/sections/1_header/Header";
import References from "../components/sections/4_references/References";
import Reviews from "../components/sections/5_reviews/Reviews";
import Services from "../components/sections/2_services/Services";
import {
  GoogleReview,
  GoogleReviewsResponse,
} from "../types/reviews/GooleReviewsTypes";
import {
  FacebookReview,
  FacebookReviewsResponse,
} from "../types/reviews/FacebookReviewsTypes";

type Props = {
  googleReviews: GoogleReview[];
  facebookReviews: FacebookReview[];
};

const Home: NextPage<{ data: Props }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>TW Elektriciteitswerken</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="pt-12 pb-16 lg:pt-32 lg:pb-48" id="header">
        <Header></Header>
      </section>

      <section id="services">
        <Services></Services>
      </section>

      <section className="py-24" id="contact">
        <Contact></Contact>
      </section>

      <section className="bg-offwhite py-24" id="references">
        <References></References>
      </section>

      <section className="py-24" id="reviews">
        <Reviews
          googleReviews={data.googleReviews}
          facebookReviews={data.facebookReviews}
        ></Reviews>
      </section>
    </>
  );
};

export default Home;

// Static props to get reviews on daily basis (renders static page every day)
export async function getStaticProps() {
  const revalidate = 60 * 60 * 24;
  let googleReviews: GoogleReview[] = [];
  let facebookReviews: FacebookReview[] = [];

  // Fetch google reviews
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ4zOFz-jLxkcRgY8UTuVdj_Q&fields=reviews&key=${process.env.GOOGLE_API}&language=nl`
    );

    const data: GoogleReviewsResponse = await response.json();

    if (!data.status || data.status !== "OK") {
      googleReviews = [];
    }

    googleReviews = data.result.reviews;
  } catch (error) {
    console.error(error);
  }

  // Fetch facebook reviews
  try {
    const response = await fetch(
      `https://graph.facebook.com/v16.0/101539501828864/ratings?fields=created_time,has_rating,has_review,rating,recommendation_type,review_text,reviewer&access_token=${process.env.FACEBOOK_API}`
    );

    const data: FacebookReviewsResponse = await response.json();

    if (!data.data) {
      facebookReviews = [];
    }

    facebookReviews = data.data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      data: {
        googleReviews,
        facebookReviews,
      },
    },
    revalidate,
  };
}
