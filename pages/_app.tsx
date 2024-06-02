import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "../styles/globals.css";
import { AppProps } from "next/app";

// This is the chain your dApp will work on.
const activeChain = "ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Head>
        <title>SoS | Migration Portal </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="mchUSDT Migration"
          content="Migrate your deposit into the HashDao pools and deposit them into the Stacks of Sats pool and earn outrageous rewards before launch."
        />
        <meta
          name="keywords"
          content="Make sure you have enough gas to migrate to the ethereum network"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
