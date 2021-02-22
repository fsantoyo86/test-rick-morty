import React from "react";
import Character from "./Character";
import { Provider } from "react-redux";
import generateStore from "../redux/store";

/**
 * Render character component.
 */

function ListCharacters() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Character></Character>
    </Provider>
  );
}
export default ListCharacters;
