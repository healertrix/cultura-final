// import styles from "../styles/Home.module.css";
import styles from "../styles/Footer.module.css";
import Head from "next/head";
import Image from "next/image";

import instagram from "../public/icons/icons8-instagram.svg";
import maps from "../public/icons/icons8-google-maps-old.svg";
import facebook from "../public/icons/icons8-facebook.svg";
import twitter from "../public/icons/icons8-twitter.svg";

export default function Footer() {
	return (
		<div id={styles.foot_wrapper}>
			<Head>
				<title>Cultura 2022</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous "
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Sancreek&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
					<div>
						<img src="/Cultura22.svg" alt="Cultura 2022" />

						<div className="my-4">
							<a
								className="mx-2"
								href="https://www.google.com/maps?ll=12.967483,77.713987&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=8408994954485607565"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image width={36} height={36} src={maps}></Image>
							</a>
							<a
								className="mx-2"
								href="https://www.facebook.com/culturacmrit"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image width={36} height={36} src={facebook}></Image>
							</a>
							<a
								className="mx-2"
								href="https://www.instagram.com/cmritcultura"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image width={36} height={36} src={instagram}></Image>
							</a>
							<a
								className="mx-2"
								href="https://www.twitter.com/culturacmrit"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image width={36} height={36} src={twitter}></Image>
							</a>
						</div>
						<p className="highlight text-5xl mb-[1rem]">
							Hunt For The <br />
							<span className="text-6xl mt-1">TREASURE</span>
						</p>
					</div>
					<div className="">
						<img src="/address.svg" alt="Address" />
					</div>
				</div>
			</div>
		</div>
	);
}
