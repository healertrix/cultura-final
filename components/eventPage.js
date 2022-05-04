import Head from "next/head";

import styles from "../styles/HeroSection.module.css";
import style from "../styles/EventDetails.module.css";

import NavBar from "./navbar";
import Link from "next/link";

export async function getServerSideProps() {
	const result = await fetch("http://localhost:3000/api");
	const data = await result.json();
	return { props: { result } };
}
export default function EventDetails({ result }) {
	console.log(result);
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

								<p className="mt-[2.5rem] font-semibold text-md">Categories</p>

								<div className="flex flex-row flex-wrap">
									<Link href="#PhotographySection">
										<button
											className="text-black bg-white hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mt-4 mr-8"
											type="button"
										>
											Photography
										</button>
									</Link>
									<Link href="#MusicSection">
										<button
											className="text-black bg-white hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mt-4"
											type="button"
										>
											Music
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-row w-full">
					<div className="container">
						<div id="ArtSection">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Art
							</h2>
							<div class="flex flex-wrap -m-4 mt-[1rem] mb-[3rem]">
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
						<div id="ArtSection">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Art
							</h2>
							<div class="flex flex-wrap -m-4 mt-[1rem] mb-[3rem]">
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
						<div id="ArtSection">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Art
							</h2>
							<div class="flex flex-wrap -m-4 mt-[1rem] mb-[3rem]">
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
						<div id="ArtSection">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Art
							</h2>
							<div class="flex flex-wrap -m-4 mt-[1rem] mb-[3rem]">
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
						<div id="ArtSection">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Art
							</h2>
							<div class="flex flex-wrap -m-4 mt-[1rem] mb-[3rem]">
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
						<div id="ArtSection">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Art
							</h2>
							<div class="flex flex-wrap -m-4 mt-[1rem] mb-[3rem]">
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
								<div class="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5">
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
			</div>
		</>
	);
}
