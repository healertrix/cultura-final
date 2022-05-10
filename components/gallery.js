export default function Gallery() {
	return (
    <>
      <div id="Gallery" className="py-[4rem] text-white">
        <div className="container py-[6rem] mx-[1rem]">
          <>
            {/* <p className="text-2xl font-medium uppercase mb-[1rem]">Gallery</p> */}
            <p className="highlight text-6xl mb-[1.5rem]">
              Essence of <br />
              <span className="text-7xl">Cultura</span>
            </p>
            <p className=" text-black	py-2 px-2 mt-8 cursor-pointer bg-amber-100/75	 rounded-2xl text-xl font-medium  ">
               CMR Institute of Technology&apos;s
              Inter Collegiate Festival, Cultura, is to be celebrated on the
              17th and 18th of June 2022 in its 14th year showcasing skill,
              talent and charisma. Cultura 2022 will include Pro Nights, Dance
              events, Fashion show, Music events, Theatre events, Gaming events,
              Technical events and 50+ exciting events.
            </p>
          </>
          <section className="text-gray-600 body-font">
            <div className="container px-4 py-8 mx-auto flex flex-wrap">
              <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2">
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="./cultura-2020/IMG_0225.JPG"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="./cultura-2020/DSC_0667.JPG"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-full">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block"
                      src="./cultura-2020/IMG_1429.jpg"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="md:p-2 p-1 w-full">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block"
                      src="./cultura-2020/IMG_2203.JPG"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="./cultura-2020/IMG_5114.JPG"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="./cultura-2020/IMG_6739.JPG"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
