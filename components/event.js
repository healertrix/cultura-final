import Head from "next/head";
export default function Event() {
	return (
    <div id="event-container">
      <Head>
        <title>Home App</title>
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
      <div class="container py-[6rem] mx-[1rem]">
        <>
          <p class="text-2xl font-medium uppercase text-white mb-[1.1rem]">
            Events{" "}
          </p>
          <p class="highlight text-6xl mb-[1.5rem]">
            HUNT FOR THE <br />
            <span class="text-7xl">LOST TREASURE</span>
          </p>
        </>
        <div class="grid sm:grid-2 lg:grid-cols-4 gap-3 md:grid-cols-2">
          <a href="./events">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
          <a href="#">
            <img id="wooden" src="/artsWoodenCard.svg" />
          </a>
        </div>
        <br></br>
        <br />
      </div>
    </div>
  );
}
