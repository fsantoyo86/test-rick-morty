import React from "react";
import SingleCharacter from "./SingleCharacter";
import { Provider } from "react-redux";
import generateStore from "../redux/store";

function ListSingleChar() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <SingleCharacter></SingleCharacter>
    </Provider>
  );
}

export default ListSingleChar;
