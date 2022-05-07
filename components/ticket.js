import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/HeroSection.module.css";
import style from "../styles/Ticket.module.css";
import eventPoster from "../public/posters/art-bc.png";

import NavBar from "./navbar";

export default function Ticket() {
	const router = useRouter();
	const {
		query: { Category, Event, Registration, Payment, Description, Venue, Time },
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
								<p className="highlight tracking-wider uppercase text-7xl">
									{Event}
								</p>
								<p className="text-xl font-medium text-white mt-4">
									{Description}
								</p>
								<div className="mt-4">
									<p className="uppercase tracking-wider text-md">Date</p>
									<p className="font-bold uppercase tracking-wider text-lg mb-2">
										{Time}
									</p>
									<p className="uppercase tracking-wider text-md">Venue</p>
									<p className="font-bold uppercase tracking-wider text-lg mb-2">
										{Venue}
									</p>
									<p className="uppercase tracking-wider text-md">
										Ticket Price
									</p>
									<p className="font-bold uppercase tracking-wider text-lg mb-2">
										₹{Registration}
									</p>
								</div>
								<a href={Payment}>
									<button className="text-black bg-white hover:bg-amber-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mt-4">
										Checkout!
									</button>
								</a>
							</div>
							<div className={styles.two}>
								<div className="flex flex-row max-w-xl h-auto justify-center content-center border-solid border-4 border-white rounded-[2rem] overflow-hidden ">
									<Image src={eventPoster}></Image>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
