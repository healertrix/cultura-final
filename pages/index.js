import Head from "next/head";
import styles from "../styles/Home.module.css";
import style from "../styles/EventDetails.module.css";

import Event from "../components/event";
import { Guest } from "../components/Guest";
import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/homepage";
import Gallery from "../components/gallery";

export default function Main() {
	return (
    <div className={style.repeatBackground}>
      <div className={styles.container}>
        <Head>
          <title>Cultura 2022</title>
          <meta name="description" content="CMRIT Cultura 2022" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sancreek&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
      </div>
      <HeroSection />
      <Event />
      <Gallery />
      <About />
      <div className="grid sm:grid-2 lg:grid-cols-2 gap-3 md:grid-cols-2">
        <Footer />
        <div className="p-1 m-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0682709249145!2d77.7096099348877!3d12.9674832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae130f321b2b95%3A0x74b2c05bbc2aac8d!2sCMR%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1651911092198!5m2!1sen!2sin"
            width="100%"
            height="380"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
