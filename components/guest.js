import styles from "../styles/Guest.module.css";
import Head from "next/head";

export const Guest = () => {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous "
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sancreek&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div id={styles.guest_container}>
        <p
          id={styles.guest_text}
          class="text-2xl md:text-[36px]	events-letter-spacing p-2.5 py-5 mx-10 "
        >
          Guests
        </p>
        <div class="grid sm:grid-2 mx-12 lg:grid-cols-4 gap-3 md:grid-cols-2 p-2">
          <a href="#">
            <img id="wooden" src="/guestCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/guestCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/guestCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/guestCard.svg" />
          </a>
        </div>
      </div>
    </>
  );
};
