import Head from "next/head";
import Intro from "../components/intro/intro.component";
import Social from "../components/social/social.component";
import TitleIcon from "../components/title-icon/title-icon";
import Footer from "../components/footer/footer.component";
import SecondSection from "../components/second-section/second-section.component";
import Navbar from "../components/navbar/navbar.component";
import ThirdSection from "../components/third-section/third-section";

export default () => (
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poiret+One&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
      rel="stylesheet"
    ></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@500;700&display=swap"
      rel="stylesheet"
    ></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
      rel="stylesheet"
    ></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
      rel="stylesheet"
    ></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy:ital@1&display=swap"
      rel="stylesheet"
    ></link>
    <TitleIcon />
    <Head>
      <title>Pablo Pose</title>
    </Head>
    <Navbar />

    <Intro />

    <SecondSection />

    <ThirdSection />

    <Social />
    <Footer />
  </div>
);
