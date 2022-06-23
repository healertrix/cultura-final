import Head from "next/head";

import style from "../styles/Artist.module.css";

export default function Main() {
	return (
		<div className={style.artist_container}>
			<Head>
				<title>Cultura 2022</title>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
					crossOrigin
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12 min-h-[100vh] px-6 md:px-0">
				<div className="hidden md:flex flex-col justify-end ">
					<img src="/Romeo-left.png" />
				</div>

				<div className="flex flex-col justify-center items-center">
					<a
						className="flex justify-center items-center flex-shrink-0"
						href="./"
					>
						<img
							src="/Cultura22.png"
							width="35%"
							className="navimg culturalogo"
						/>
					</a>
					<div className="flex justify-center items-center flex-shrink-0 ">
						<img
							src="/artistlogo.svg"
							width="75%"
							className="hidden md:block my-5"
						/>
						<img
							src="/artistlogo.png"
							width="100%"
							className="md:hidden my-12"
						/>
					</div>
					<div id="dj_info" className={style.djinfo}>
						<div className={style.djheader}>
							Join the Cultura 2022 DJ Night June 25th - 20:00 IST
						</div>
						<div id="dj_content" className={style.djcontent}>
							Mark your calendars, the best weekends of the year are back in
							2022.
							<p className="text-sm font-bold mt-4">
								Tickets are free for CMRIT and PUC Students
							</p>
						</div>
						<a className={style.buttonA} href="">
							Registration Closed
							<img src="/arrow-right.svg" width="15%" id={style.imageArrow} />
						</a>
					</div>
				</div>

				<div className="flex flex-col justify-end">
					<img className="hidden md:block" src="/Romeo-Right.png" />
				</div>
			</div>
		</div>
	);
}
