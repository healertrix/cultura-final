import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/HeroSection.module.css";
import style from "../styles/Ticket.module.css";
import eventPoster from "../public/posters/art-bc.png";

import NavBar from "./navbar";

export default function Ticket() {
	const router = useRouter();
	const {
		query: {
			Category,
			Event,
			Registration,
			Payment,
			Description,
			Venue,
			Time,
			Day,
			Rule,
			Poster,
		},
	} = router;

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
				<div className="flex flex-row justify-center content-center h-[90vh] w-full">
					<div className="container">
						<div className={styles.wrapper}>
							<div className={styles.one}>
								<div className="flex flex-row max-w-xl h-auto justify-center content-center border-solid border-4 border-white rounded-[2rem] overflow-hidden ">
									<Image src={eventPoster}></Image>
								</div>
							</div>
							<div className={styles.two}>
								<p className="highlight tracking-wider uppercase text-7xl">
									{Event}
								</p>
								<p className="text-2xl font-semibold tracking-wide capitalize text-white mt-2">
									{Description}
								</p>
								<a href={Payment}>
									<button className="text-black bg-white hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center mt-4 shadow-lg hover:shadow-2xl">
										Get your Ticket!
									</button>
								</a>
								<div className="mt-8">
									<p className="uppercase tracking-wider font-bold mb-1">
										Rules and Regulations
									</p>
									<p className="mb-4 text-lg">{Rule}</p>
									<p className="uppercase tracking-wider font-bold mb-1">
										Date & Time
									</p>
									<p className="mb-4 text-lg">
										{Day} {Time}
									</p>
									<p className="uppercase tracking-wider font-bold mb-1">
										Venue
									</p>
									<p className="mb-4 text-lg">{Venue}</p>
									<p className="uppercase tracking-wider font-bold mb-1">
										Ticket Price
									</p>
									<p className="mb-4 text-lg">₹{Registration}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
