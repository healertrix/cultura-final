import Head from "next/head";

import styles from "../styles/HeroSection.module.css";
import style from "../styles/EventDetails.module.css";

import NavBar from "./navbar";

export default function EventDetails() {
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
			<div className={style.repeatBackground}>
				<div className="max-w-[1440px] m-auto">
					<NavBar />
				</div>
				<div className="flex flex-row justify-center content-center h-[30rem] w-full">
					<div className="container">
						<div className={styles.wrapper}>
							<div className={styles.one}>
								<p className="highlight tracking-wider text-7xl">
									EVENT
									<br />
									<span className="text-8xl tracking-wider">CATEGORIES</span>
								</p>
								<p className="text-xl font-medium text-white">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Quisque integer purus eu nisi, ut arcu.
								</p>
								<button
									className="text-black bg-white hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mt-4"
									type="button"
								>
									Select a Category
									<svg
										class="w-4 h-4 ml-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-row w-full">
					<div className="container">
						<div id="artSection">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Art
							</h2>
							<div className="flex flex-row justify-between">
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
							</div>
						</div>
						<div id="danceSection">
							<h2 className="text-4xl font-bold text-white tracking-wider mt-16">
								Dance
							</h2>
							<div className="flex flex-row justify-between">
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
							</div>
						</div>
						<div id="artSection">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Art
							</h2>
							<div className="flex flex-row justify-between">
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
							</div>
						</div>
						<div id="danceSection">
							<h2 className="text-4xl font-bold text-white tracking-wider mt-16">
								Dance
							</h2>
							<div className="flex flex-row justify-between">
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
							</div>
						</div>
						<div id="artSection">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Art
							</h2>
							<div className="flex flex-row justify-between">
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
							</div>
						</div>
						<div id="danceSection">
							<h2 className="text-4xl font-bold text-white tracking-wider mt-16">
								Dance
							</h2>
							<div className="flex flex-row justify-between">
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
								<div className={style.eventContainer}>
									<h3 className="text-xl font-semibold text-black">
										Event Heading
									</h3>
									<p className="description text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quisque integer purus eu nisi, ut arcu.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
