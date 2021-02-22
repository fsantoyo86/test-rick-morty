import React,{useEffect} from 'react';
import {
  getSingleChar,
  nextSingleChar,
  prevSingleChar,
} from "../redux/charactersDucks";
import { useDispatch, useSelector } from "react-redux";


function SingleCharacter() {
 
  const dispatch = useDispatch();
  const chars = useSelector((store) => store.characters.single);
  const page = useSelector((store) => store.characters.page);

  useEffect(() => {
    FetchChars();
    console.log(chars);
  }, []);

  const FetchChars = () => {
    dispatch(getSingleChar());
  };

  const FetchNextPage = () => {
    dispatch(nextSingleChar());
  };

  const FetchPrevPage = () => {
    dispatch(prevSingleChar());
  };

    return (
      <div className="flex grid lg:grid-cols-2 md:grid-cols-2 sm:grid-rows-1 grid-rows-1 lg:h-screen md:h-screen sm:h-auto h-auto">
        <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse justify-center items-center">
          <div className="flex flex-col justify-center font-bold font-Indie items-start bg-emerald-500">
            <div className="flex flex-row items-center">
              <h1 className="bg-amber-300 rounded-full text-2xl text-emerald-500 px-4 py-2 m-2">
                Nombre:{" "}
              </h1>
              <h2 className="text-amber-300 text-2xl">{chars.name}</h2>
            </div>
            <div className="flex flex-row items-center">
              <h1 className="bg-amber-300 rounded-full text-2xl text-emerald-500 px-4 py-2 m-2">
                Status:
              </h1>
              <h2 className="text-amber-300 text-2xl">{chars.status}</h2>
            </div>
            <div className="flex flex-row items-center">
              <h1 className="bg-amber-300 rounded-full text-2xl text-emerald-500 px-4 py-2 m-2">
                Species:
              </h1>
              <h2 className="text-amber-300 text-2xl">{chars.species}</h2>
            </div>
            <div className="flex flex-row items-center">
              <h1 className="bg-amber-300 rounded-full text-2xl text-emerald-500 px-4 py-2 m-2">
                Gender:
              </h1>
              <h2 className="text-amber-300 text-2xl">{chars.gender}</h2>
            </div>
          </div>
          <div className="">
            <img src={chars.image} alt="Profile" className="rounded-full mt-5"/>
          </div>
        </div>
        <div className="flex justify-center py-3 text-amber-300">
          <div
            className="flex grid grid-cols-2 hover:text-amber-400 cursor-pointer items-center text-2xl font-Indie px-3 py-1"
            onClick={() => {
              FetchPrevPage();
              window.scrollTo(0, 0);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
            Prev
          </div>
          <div className="flex items-center">
            <div className="flex border-solid items-center justify-center rounded-full w-16 h-16 border-2 border-amber-300">
              <h1 className="text-4xl">{page}</h1>
            </div>
          </div>
          <div
            className="flex grid grid-cols-2 hover:text-amber-400 text-2xl font-Indie cursor-pointer items-center px-3 py-1"
            onClick={() => {
              FetchNextPage();
              window.scrollTo(0, 0);
            }}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
}

export default SingleCharacter;
