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
      <div class={styles.heroSection}>
        <div class="max-w-[1440px] m-auto">
          <NavBar />
        </div>
        <div class="flex flex-row justify-center content-center h-full w-full">
          <div class="container">
            <div class={styles.wrapper}>
              <div class={styles.one}>
                <p class="highlight text-6xl mb-[1rem]">
                  THE ISLE
                  <br />
                  <span class="text-8xl">
                    OF LOST
                    <br />
                    TREASURE
                  </span>
                </p>
                <p class="text-5xl font-bold text-white mb-[1rem]">
                  17th - 18th June
                </p>
              </div>
              <div class={styles.two}>
                <div class={styles.video}>
                  <video autoPlay loop src="./reveal.mp4"></video>
                </div>
              </div>
            </div>
            <div class={styles.timer}>
              <div class="">
                <p class="text-6xl font-semibold" id="days">
                  {days}
                </p>
                <p class="text-2xl font-bold">DAYS</p>
              </div>
              <div>
                <p class="text-6xl font-semibold" id="hours">
                  {hours}
                </p>
                <p class="text-2xl font-bold">HOURS</p>
              </div>
              <div>
                <p class="text-6xl font-semibold" id="minutes">
                  {minutes}
                </p>
                <p class="text-2xl font-bold">MINUTES</p>
              </div>
              <div>
                <p class="text-6xl font-semibold" id="seconds">
                  {seconds}
                </p>
                <p class="text-2xl font-bold">SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
