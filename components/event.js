import Head from "next/head";
export default function Event() {
	return (
    <div id="event-container">
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
      <div className="container py-[6rem] mx-[1rem]">
        <>
          <p className="text-2xl font-medium uppercase text-white mb-[1.1rem]">
            Events
          </p>
          <p className="highlight text-5xl md:text-6xl mb-[1.5rem]">
            HUNT FOR THE <br />
            <span className="text-6xl md:text-7xl">LOST TREASURE</span>
          </p>
        </>
        <div className="grid grid-cols-2 sm:grid-2 lg:grid-cols-4 gap-3 md:grid-cols-2">
          <a className="col-span-2 sm:col-span-1" href="./events#Photography">
            <img id="category" src="./category/Photography.png" />
          </a>
          <a className="col-span-2 sm:col-span-1" href="./events#Department">
            <img id="category" src="./category/Technical.svg" />
          </a>
          <a href="./events#Music">
            <img id="category" src="./category/Music.png" />
          </a>
          <a href="./events#Muses">
            <img id="category" src="./category/Muses.png" />
          </a>
          <a href="./events#Theatre">
            <img id="category" src="./category/Theatre.png" />
          </a>
          <a href="./events#Dance">
            <img id="category" src="./category/Dance.png" />
          </a>
          <a href="./events#Literary">
            <img id="category" src="./category/Literary.png" />
          </a>
          <a href="./events#Gaming">
            <img id="category" src="./category/Gaming.png" />
          </a>
          <a href="./events#Fashion">
            <img id="category" src="./category/Fashion.png" />
          </a>
          <a href="./events#Kannada">
            <img id="category" src="./category/Kannada.png" />
          </a>
          <a href="./events#Informal">
            <img id="category" src="./category/Informal.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
