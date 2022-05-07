import Head from "next/head";

import styles from "../styles/HeroSection.module.css";
import style from "../styles/EventDetails.module.css";

import NavBar from "./navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";

function dataBhejo(data) {
	Router.push({
		pathname: "/ticket",
		query: {
			Category: data.Category,
			Event: data.Event,
			Registration: data.Registration,
			Payment: data.Payment,
			Description: data.Description,
			Venue: data.Venue,
			Time: data.Time,
		},
	});
}

export default function EventDetails() {
	const [photographyData, setPhotographyData] = useState([]);
	const [musicData, setMusicData] = useState([]);
	const [musesData, setMusesData] = useState([]);
	const [theatreData, setTheatreData] = useState([]);
	const [danceData, setDanceData] = useState([]);
	const [literaryData, setLiteraryData] = useState([]);
	const [gamingData, setGamingData] = useState([]);
	const [fashionData, setFashionData] = useState([]);
	const [kannadaData, setKannadaData] = useState([]);
	const [informalData, setInformalData] = useState([]);
	const [artData, setArtData] = useState([]);
	const [cseData, setCSEData] = useState([]);
	const [iseData, setISEData] = useState([]);
	const [eeeData, setEEEData] = useState([]);
	const [eceData, setECEData] = useState([]);
	const [mechData, setMECHData] = useState([]);
	const [civilData, setCIVILData] = useState([]);
	const [mbaData, setMBAData] = useState([]);
	const [mcaData, setMCAData] = useState([]);

	const getData = () => {
		fetch("./event/eventDetails.json", {
			headers: {
				"Content-Type": "application/json",

				Accept: "application/json",
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				console.log(myJson.Photography);
				setPhotographyData(myJson.Photography);
				setMusicData(myJson.Music);
				setMusesData(myJson.Muses);
				setTheatreData(myJson.Theatre);
				setLiteraryData(myJson.Literary);
				setDanceData(myJson.Dance);
				setGamingData(myJson.Gaming);
				setFashionData(myJson.Fashion);
				setInformalData(myJson.Informal);
				setArtData(myJson.Art);
				setKannadaData(myJson.Kannada);
				setCSEData(myJson.CSE);
				setISEData(myJson.ISE);
				setECEData(myJson.ECE);
				setEEEData(myJson.EEE);
				setCIVILData(myJson.CIVIL);
				setMECHData(myJson.MECH);
				setMBAData(myJson.MBA);
				setMCAData(myJson.MCA);
			});
	};
	useEffect(() => {
		getData();
	}, []);

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
						<section id="Photography">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Photography
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{photographyData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Music">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Music
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{musicData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Muses">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Muses
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{musesData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Theatre">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Theatre
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{theatreData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Dance">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Dance
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{danceData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Literary">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Literary
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{literaryData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Gaming">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Gaming
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{gamingData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Fashion">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Fashion
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{fashionData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Informal">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Informal
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{informalData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Kannada">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Kannada
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{kannadaData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Art">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								Art
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{artData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="CSE">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								CSE
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{cseData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="ISE">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								ISE
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{iseData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="ECE">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								ECE
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{eceData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="EEE">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								EEE
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{eeeData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="MECH">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								MECH
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{mechData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="CIVIL">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								CIVL
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{civilData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="MBA">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								MBA
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{mbaData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="MCA">
							<h2 className="text-4xl font-bold text-white tracking-wider">
								MCA
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{mcaData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-5"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className={style.eventContainer}>
												<h3 className="text-xl font-semibold text-black">
													{eventInfo.Event}
												</h3>
												<p className="description text-black">
													{eventInfo.Description}
												</p>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
