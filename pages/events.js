import styles from "../styles/Home.module.css";
import Head from "next/head";
export default function Try() {
  return (
    <div id="event-container">
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sancreek&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <hgroup className=" m-10">
        <div
          class="text-2xl md:text-[36px]	events-letter-spacing p-2.5 py-5 "
          id="events-text"
        >
          EVENTS
        </div>
        <div class="text-4xl md:text-[64px] treasure-hunt-letter-spacing p-2.5">
          HUNT FOR THE
        </div>
        <div claSS="text-5xl md:text-[84px] treasure-hunt-letter-spacing p-2.5">
          LOST TREASURE
        </div>
      </hgroup>
      <div className="grid sm:grid-2 mx-12 lg:grid-cols-4 gap-3 md:grid-cols-2">
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
        <a href="#">
          <img id="wooden" src="/artsWoodenCard.svg" />
        </a>
      </div>
      <br></br>
      <br/>
    </div>
  );
}
