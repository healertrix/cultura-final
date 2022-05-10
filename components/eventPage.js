import Head from "next/head";

import styles from "../styles/HeroSection.module.css";
import style from "../styles/EventDetails.module.css";

import NavBar from "./navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import Image from "next/image";

import registerButton from "../public/event/components/Register.svg";

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
			Day: data.Day,
			Rule: data.Rule,
			Poster: data.Poster,
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
				<div className="flex flex-row justify-center content-center w-full h-[24rem]">
					<div className="container">
						<div className={styles.wrapper}>
							<div className={styles.one}>
								<p className="highlight tracking-wider text-4xl sm:text-7xl">
									EVENT
									<br />
									<span className="text-5xl md:text-8xl tracking-wider">
										CATEGORIES
									</span>
								</p>
							</div>
						</div>
						<div className="flex flex-row flex-wrap">
							<Link href="#Photography">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Photography
								</button>
							</Link>
							<Link href="#Music">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Music
								</button>
							</Link>
							<Link href="#Muses">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Muses
								</button>
							</Link>
							<Link href="#Theatre">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Theatre
								</button>
							</Link>
							<Link href="#Dance">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Dance
								</button>
							</Link>
							<Link href="#Literary">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Literary
								</button>
							</Link>
							<Link href="#Gaming">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Gaming
								</button>
							</Link>
							<Link href="#Fashion">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Fashion
								</button>
							</Link>
							<Link href="#Kannada">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Kannada
								</button>
							</Link>
							<Link href="#Informal">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Informal
								</button>
							</Link>
							<Link href="#Art">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Art
								</button>
							</Link>
							<Link href="#Department">
								<button
									className="text-black bg-amber-100/50 hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs px-4 py-2 sm:text-sm sm:px-4 sm:py-2.5 text-center inline-flex items-center mt-4 mr-4"
									type="button"
								>
									Departments
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="flex flex-row w-full">
					<div className="container">
						<section id="Photography">
							<h2 className="text-2xl sm:text-4xl highlight uppercase font-bold text-white tracking-wider">
								Photography
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{photographyData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-xl">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Music">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								Music
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{musicData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Muses">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								Muses
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{musesData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Theatre">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								Theatre
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{theatreData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Dance">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								Dance
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{danceData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Literary">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								Literary
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{literaryData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Gaming">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								Gaming
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{gamingData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Fashion">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								Fashion
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{fashionData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Informal">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								Informal
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{informalData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Kannada">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								Kannada
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{kannadaData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Art">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								Art
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{artData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
							</div>
						</section>
						<section id="Department">
							<h2 className="text-2xl sm:text-4xl highlight font-bold text-white tracking-wider">
								TECHNICAL
							</h2>
							<div className="flex flex-wrap -m-4 mt-[0.25rem] mb-[3rem]">
								{cseData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
								{iseData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
								{eceData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-white/75 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
								{eeeData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
								{mechData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
								{civilData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
								{mbaData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
											</div>
										</a>
									</>
								))}
								{mcaData.map((eventInfo, index) => (
									<>
										<a
											className="xl:w-1/3 md:w-1/3 sm:w-1/2 p-2 w-full"
											onClick={() => dataBhejo(eventInfo)}
										>
											<div className="p-1 sm:p-2cursor-pointer hover:bg-amber-100/50 rounded-2xl ">
												<div className={style.eventContainer}>
													<h3 className="text-2xl sm:text-4xl mb-2 font-bold text-white">
														{eventInfo.Event}
													</h3>
													<p className="text-lg font-medium sm:font-semibold text-white mb-4">
														{eventInfo.Description}
													</p>
													<Image
														className="scale-90 hover:scale-100"
														src={registerButton}
													></Image>
												</div>
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
