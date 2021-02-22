import React from "react";
import Landing from './Landing';

/**
 * Home component that render langing pages..
 */

function Home() {

  return (
    <>
      <Landing
        primary={"1"}
        text={"Rick and Morty"}
        txtButton={"Explore"}
        img={"/img/rick.png"}
        onClick={""}
      ></Landing>
      <Landing
        primary={"2"}
        text={"Complete Episodes"}
        txtButton={"Go to episodes"}
        img={"/img/all.png"}
        onClick={""}
      ></Landing>
      <Landing
        primary={"1"}
        text={"Main Characters"}
        txtButton={"Know characters"}
        img={"/img/wall-rick-2.png"}
        onClick={""}
      ></Landing>
    </>
  );
}

export default Home;
