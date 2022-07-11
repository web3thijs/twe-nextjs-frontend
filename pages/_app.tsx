import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <Layout>
        <main data-scroll-container ref={containerRef}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
