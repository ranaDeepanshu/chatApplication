import React from "react";
import Head from "next/head";
import Header from "../components/app/header";
import Login from "../components/reusable/login";

function HomePage() {
  return (
    <>
      <Head>
        <title>Chat Application</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        ></link>
      </Head>

      <Header></Header>
      <Login></Login>
    </>
  );
}

export default HomePage;
