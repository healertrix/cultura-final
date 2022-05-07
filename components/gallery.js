import Head from "next/head";

import styles from "../styles/HeroSection.module.css";
import style from "../styles/EventDetails.module.css";

import NavBar from "./navbar";
import Link from "next/link";

export default function Gallery() {
	return (
    <>
      <div className="py-[4rem] text-black bg-white">
        <div className="container py-[6rem] mx-[1rem]">
          <>
            <p className="text-2xl font-medium uppercase mb-[1rem]">Gallery</p>
            <p className="highlight text-6xl mb-[1.5rem]">
              Essence of <br />
              <span className="text-7xl">Cultura</span>
            </p>
          </>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2">
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/500x300"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/501x301"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-full">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block"
                      src="https://dummyimage.com/600x360"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="md:p-2 p-1 w-full">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block"
                      src="https://dummyimage.com/601x361"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/502x302"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/503x303"
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
