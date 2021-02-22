import React from 'react';
import Episode from './Episode';
import {Provider} from 'react-redux';
import generateStore from "../redux/store";

/**
 * Render the episode component.
 */

function ListEpisodes() {
    const store = generateStore();

    return (
      <Provider store={store}>
          <Episode></Episode>
      </Provider>
    );
}

export default ListEpisodes;