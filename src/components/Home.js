import React from "react";
import Landing from './Landing';
import { NavLink } from "react-router-dom";


/**
 * Home component that render langing pages..
 */

function Home() {

  return (
    <>
      <div
        className="bg-emerald-500 lg:flex-row md:flex-row h-screen flex sm:flex-col flex-col justify-center items-center"
      >
        <div className="bg-amber-300 rounded-full lg:w-96 md:w-72 sm:w-56 w-56 m-10 mb-20 shadow-2xl">
          <img
            src="/img/rick.png"
            alt="Rick and Morty"
            className="rounded-full p-2"
          />
        </div>
        <h1 className="text-amber-300 flex grid grid-rows-2 justify-items-center lg:text-8xl md:text-6xl sm:text-5xl text-5xl font-Indie font-black mb-14">
          "Rick and Morty"
          <NavLink to="/">
            <button
              className="bg-amber-300 text-emerald-500 hover:bg-amber-400 text-3xl shadow-xl rounded-full w-56 h-16 lg:mt-20 md:mt-20 sm:mt-5 mt-0 focus:outline-none"
              onClick={() => window.scrollTo(0, window.innerHeight)}
            >
              Explore
            </button>
          </NavLink>
        </h1>
      </div>
      <Landing
        primary={"2"}
        text={"Complete Episodes"}
        txtButton={"Go to episodes"}
        img={"/img/all.png"}
        link={"/characters"}
      ></Landing>
      <Landing
        primary={"1"}
        text={"Main Characters"}
        txtButton={"Know characters"}
        img={"/img/wall-rick-2.png"}
        link={"/episodes"}
      ></Landing>
    </>
  );
}

export default Home;
