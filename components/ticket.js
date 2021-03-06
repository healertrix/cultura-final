import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import style from "../styles/Ticket.module.css";

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
	var open = true;
	if (Registration == "Closed") open = false;
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
				<div className="min-h-screen flex items-center justify-center container">
					<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="flex flex-row max-w-xl h-auto justify-start  content-center border-solid border-4 border-white/85 rounded-[2rem] overflow-hidden self-start	 ">
							<Image width={720} height={720} src={Poster} priority></Image>
						</div>
						<div>
							<p className="highlight tracking-wider uppercase text-3xl md:text-6xl sm:text-3xl">
								{Event}
							</p>
							<p className="md:text-2xl lg:text-2xl font-semibold tracking-wide   bg-amber-100/75	 rounded-2xl  text-black	py-2 px-2 mt-8 cursor-pointer   ">
								{Description}
							</p>
              
							{open ? (
								<a href={Payment}>
									<button className="bg-amber-700 text-white hover:bg-amber-600 focus:ring-4 focus:ring-orange-300 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex mt-4 shadow-lg hover:shadow-2xl ">
										Register Now!
									</button>
								</a>
							) : (
								<button className="bg-amber-700 text-white hover:bg-amber-600 focus:ring-4 focus:ring-orange-300 font-bold rounded-lg text-md px-4 py-2.5 text-center inline-flex mt-4 shadow-lg hover:shadow-2xl ">
									Registeration Closed!
								</button>
							)}

							<div className="text-black py-2 px-2 mt-8 cursor-pointer bg-white/25 rounded-2xl">
								<div className="bg-amber-100/50	 p-4 rounded-2xl">
									<div className="border-b-2 mb-4">
										<p className="tracking-wider font-bold text-lg sm:text-xl">
											Rules and Regulations
										</p>
										<p className="mb-4 text-base break-all">
											<pre className={style.rules}>{Rule}</pre>
										</p>
									</div>
									<div className="grid grid-cols-3 divide-x">
										<div>
											<p className="text-lg sm:text-xl tracking-wider font-bold mb-1">
												Date & Time
												<br />
											</p>
											<p className="mb-2 text-base">
												{Day} & {Time}
											</p>
										</div>
										<div className="px-2">
											<p className="text-lg sm:text-xl tracking-wider font-bold mb-1">
												Venue
											</p>
											<p className="mb-4 text-base">{Venue}</p>
										</div>
										<div className="px-2">
											<p className="text-lg sm:text-xl tracking-wider font-bold mb-1">
												Ticket Price
											</p>
											<p className="mb-4 text-base">{Registration}</p>
										</div>
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
