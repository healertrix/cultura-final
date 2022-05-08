import Head from "next/head";
import styles from "../styles/Home.module.css";
import style from "../styles/EventDetails.module.css";

import Event from "../components/event";
import About from "../components/about";
import Footer from "../components/footer";
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
			<Footer />
		</div>
	);
}
