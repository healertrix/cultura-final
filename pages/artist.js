import Head from "next/head";

import style from "../styles/Artist.module.css";

export default function Main() {
  return (
    <div className={style.artist_container}>
      <Head>
        <title>Cultura 2022</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="grid grid-cols-3 gap-4	">
        <div id="first-column">
          <img src="/Romeo-left.png" width="100%" className={style.djimgleft} />
        </div>
        <div id="second_column">
          <div className="flex justify-center items-center flex-shrink-0 ">
            <img
              src="/Cultura222.png"
              width="35%"
              className="navimg culturalogo"
            />
          </div>
          <div className="flex justify-center items-center flex-shrink-0 ">
            <img src="/artistlogo.svg" width="75%" className="my-5 " />
          </div>
          <div id="dj_info" className={style.djinfo}>
            <div className={style.djheader}>
              Join the Cultura 2022 DJ Night June 25th - 20:00 IST
            </div>
            <div id="dj_content" className={style.djcontent}>
              Mark your calendars, the best weekends of the year are back in
              2022.
            </div>
            <div className={style.buttonA}>
              Get Tickets Now
              <img src="/arrow-right.svg" width="15%" id={style.imageArrow} />
            </div>
          </div>
        </div>

        <div id="third-column">
          <img
            src="/Romeo-Right.png"
            width="85%"
            className={style.djimgright}
          />
        </div>
      </div>
    </div>
  );
}
