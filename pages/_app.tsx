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
      <Layout>
        <main data-scroll-container ref={containerRef}>
          <Component {...pageProps} />
        </main>
      </Layout>
  );
}

export default MyApp;
