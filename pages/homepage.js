import Head from "next/head";

import styles from "../styles/HeroSection.module.css";

import NavBar from "../components/navbar";

export default function HeroSection() {
	return (
		<>
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
								<p className="highlight text-6xl">
									THE ISLE
									<br />
									<span className="text-8xl">
										OF LOST
										<br />
										TREASURE
									</span>
								</p>
								<p className="text-5xl font-bold text-white">
									17th - 18th June
								</p>
							</div>
							<div className={styles.two}>
								<div className={styles.video}></div>
							</div>
						</div>
						<div className={styles.timer}>
							<div className="">
								<p className="text-6xl font-semibold">48</p>
								<p className="text-2xl font-bold">DAYS</p>
							</div>
							<div>
								<p className="text-6xl font-semibold">48</p>
								<p className="text-2xl font-bold">DAYS</p>
							</div>
							<div>
								<p className="text-6xl font-semibold">48</p>
								<p className="text-2xl font-bold">DAYS</p>
							</div>
							<div>
								<p className="text-6xl font-semibold">48</p>
								<p className="text-2xl font-bold">DAYS</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
