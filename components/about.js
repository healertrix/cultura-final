// import styles from "../styles/Home.module.css";
import styles from '../styles/About.module.css'
import Head from "next/head";
export default function About() {
  return (
    <div id={styles.about_wrapper}>
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
      <div className="grid sm:grid-1 mx-12 lg:grid-cols-2 gap-3 md:grid-cols-1">
        <div className="m-1">
          <img src="/aboutUsFinal.svg" alt="" id={styles.about_image} />
        </div>
        <div id={styles.about_video}>video Here !</div>
      </div>
    </div>
  );
}
