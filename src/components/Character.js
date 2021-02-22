import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersAccion,nextPageCharacters,prevPageCharacters,searchCharacters } from "../redux/charactersDucks";

/**
 * Character page where the fetch of Rick And Morty api is load..
 */

function Character() {
    const [query, setQuery] = useState();

  const dispatch = useDispatch();
  const chars = useSelector((store) => store.characters.array);
  const page = useSelector((store)=>store.characters.page);

  useEffect(() => {
    FetchChars();
  }, []);

  const FetchChars= ()=>{
    dispatch(getCharactersAccion());
  };

  const FetchNextPage = ()=>{
    dispatch(nextPageCharacters())
  };

  const FetchPrevPage = () => {
   dispatch(prevPageCharacters());
  };

  const FetchSearch = async()=>{
    dispatch(searchCharacters());
  }

  return (
    <div className="bg-emerald-500">
      <div className="flex w-full justify-center">
        <div className="flex lg:w-1/2 md:w-1/2 sm:w-2/3 w-2/3 rounded-full border-grey-light border p-0 bg-white my-5 mx-5">
          <input
            className="w-full ml-5 rounded mr-4 focus:outline-none"
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={() => {}}
            className="w-16 bg-blueGray-500 py-1 rounded-full m-0 hover:bg-gray-600 focus:outline-none"
          >
            <span className="flex justify-center items-center p-2 m-0">
              <svg
                className="w-4 text-white text-xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-items-center font-Indie">
        {chars.map((char) => (
          <div
            key={char.id}
            className="lg:w-52 md:w-52 sm:w-80 w-80 bg-blueGray-800 text-gray-200 rounded-lg overflow-hidden shadow-lg mx-5 my-6"
          >
            <img src={char.image} alt="Proyecto" className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{char.name}</div>
              <h1 className="text-gray-darker text-base">
                <strong>Status: </strong>
                {char.status}
              </h1>
              <h1 className="text-gray-darker text-base">
                <strong>Species: </strong>
                {char.species}
              </h1>
              <h1 className="text-gray-darker text-base">
                <strong>Gender: </strong>
                {char.gender}
              </h1>
            </div>
            <div className="px-3 pb-5 font-bold">
              <button className="hover:text-gray-500 focus:outline-none">Read more ...</button>
            </div>
          </div>
        ))}
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
export default Character;
