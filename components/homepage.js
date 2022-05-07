import Head from "next/head";

import styles from "../styles/HeroSection.module.css";

import NavBar from "../components/navbar";
import { useCountdown } from "../hooks/useCountdown";
export default function HeroSection() {
 
  const [days, hours, minutes, seconds] = useCountdown(
    new Date(2022, 5, 17, 0, 0, 0, 0)
  );
  return (
    <div>
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
      <div className={styles.heroSection}>
        <div className="max-w-[1440px] m-auto">
          <NavBar />
        </div>
        <div className="flex flex-row justify-center content-center h-full w-full">
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.one}>
                <p className="highlight text-6xl mb-[1rem]">
                  THE ISLE
                  <br />
                  <span className="text-8xl">
                    OF LOST
                    <br />
                    TREASURE
                  </span>
                </p>
                <p className="text-5xl font-bold text-white mb-[1rem]">
                  17th - 18th June
                </p>
              </div>
              <div className={styles.two}>
                <div className={styles.video}>
                  <video autoPlay loop src="./reveal.mp4"></video>
                </div>
              </div>
            </div>
            <div className={styles.timer}>
              <div className="">
                <p className="text-6xl font-semibold" id="days">
                  {days} 
                </p>
                <p className="text-2xl font-bold">DAYS</p>
              </div>
              <div>
                <p className="text-6xl font-semibold" id="hours">
                  {hours}
                </p>
                <p className="text-2xl font-bold">HOURS</p>
              </div>
              <div>
                <p className="text-6xl font-semibold" id="minutes">
                  {minutes} 
                </p>
                <p className="text-2xl font-bold">MINUTES</p>
              </div>
              <div>
                <p className="text-6xl font-semibold" id="seconds">
                  {seconds} 
                </p>
                <p className="text-2xl font-bold">SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
