// import styles from "../styles/Home.module.css";
import styles from "../styles/Footer.module.css";
import Head from "next/head";
export default function Footer() {
	return (
    <div id={styles.foot_wrapper}>
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
      <div className="container mx-[1rem] pt-[3rem] pb-[2rem]">
        <img src="/Cultura22.svg" alt="" id={styles.addresslogo_image} />
        <img src="/address.svg" alt="" />
      </div>
    </div>
  );
}
