import Head from "next/head";
import styles from "../styles/Home.module.css";
import Event from '../components/event'
import { Guest} from "../components/Guest"
import About from "../components/About";
import Footer from "../components/Footer";

export default function  Main() {
	return (
    <>
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

        <main className={styles.main}>
          <nav className="navbar bg-base-100" id={styles.main_navbar}>
            <div className="flex-1">
              <a href="/">
                <img src="/Cultura22.svg" width={150} height={48} />
              </a>
            </div>
            <div className="flex-none gap-2">
              <ul className="menu menu-horizontal p-0">
                <li id={styles.nav_items}>
                  <a>Events</a>
                </li>
                <li id={styles.nav_items}>
                  <a>Guests</a>
                </li>
                <li id={styles.nav_items}>
                  <a>Sponsors</a>
                </li>
                <li id={styles.nav_items}>
                  <a>About Us</a>
                </li>
                <li id={styles.nav_items}>
                  <a>Gallery</a>
                </li>
                <li id={styles.nav_items}>
                  <div id={styles.nav_item_book_tickets}>
                    <p id={styles.book_ticket_txt}>Book Tickets</p>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex flex-row flex-wrap content-center justify-between pt-24 pb-8 text-white w-full">
            <div className="ml-20">
              <h1 className="text-8xl">
                The Isle
                <br />
                of Lost
                <br />
                Treasure
              </h1>
              <p className="mt-4 text-5xl">17th - 18th June</p>
            </div>
            <div className="video-hero rounded-l-[4rem] sm:w-5/6 sm:h-auto sm:rounded-3xl sm:mx-[1rem] w-[720px]  h-[480px] bg-white/25"></div>
          </div>
          <div className="flex flex-row content-center text-white w-full ml-20">
            {/* <img id="timerBG" src="/woodenBoard.svg" /> */}
            <div
              id="timer"
              className="flex flex-row content-center w-[36rem] py-10 px-10 justify-around  bg-center bg-no-repeat"
            >
              <div className="flex flex-col content-center">
                <p className="text-6xl">48</p>
                <p className="text-xl">DAYS</p>
              </div>
              <div className="flex flex-col content-center">
                <p className="text-6xl">12</p>
                <p className="text-xl">HOURS</p>
              </div>
              <div className="flex flex-col content-center">
                <p className="text-6xl">30</p>
                <p className="text-xl">MINUTES</p>
              </div>
              <div className="flex flex-col content-center">
                <p className="text-6xl">25</p>
                <p className="text-xl">SECONDS</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Event />
      <Guest />
      <About />
      <Footer />
    </>
  );
}
