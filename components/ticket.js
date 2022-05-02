import Head from "next/head";
import Image from "next/image";

import styles from "../styles/HeroSection.module.css";
import style from "../styles/Ticket.module.css";
import eventPoster from "../public/posters/art-bc.png";

import NavBar from "./navbar";

export default function Ticket() {
	//Event Details to be fetched from Backend
	let eventName = "Rock n Roll";
	let eventVenue = "AV Hall";
	let eventDate = "17-06-2022";
	let eventDescription =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque integer purus eu nisi, ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque integer purus eu nisi, ut arcu.";
	let eventCost = 300;
	let noOfTickets = 0;

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
								<p className="highlight tracking-wider uppercase text-7xl">
									{eventName}
								</p>
								<p className="text-xl font-medium text-white mt-4">
									{eventDescription}
								</p>
								<div
									className="mt-4 px-4
                                 py-8 bg-white text-black rounded-xl"
								>
									<p className="uppercase tracking-wider text-md">Date</p>
									<p className="font-bold uppercase tracking-wider text-lg mb-2">
										{eventDate}
									</p>
									<p className="uppercase tracking-wider text-md">Venue</p>
									<p className="font-bold uppercase tracking-wider text-lg mb-2">
										{eventVenue}
									</p>
									<p className="uppercase tracking-wider text-md">
										Ticket Price
									</p>
									<p className="font-bold uppercase tracking-wider text-lg mb-2">
										₹{eventCost}
									</p>
									<div>
										<p className="font-bold uppercase tracking-wider text-lg mb-2">
											{noOfTickets}
										</p>
									</div>
								</div>
								<button className="text-black bg-white hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mt-4">
									Checkout!
								</button>
							</div>
							<div className={styles.two}>
								<div className="flex flex-row w-full h-full justify-center content-center">
									<Image height="600px" width="480px" src={eventPoster}></Image>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
