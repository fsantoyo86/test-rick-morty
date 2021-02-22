import axios from "axios";

//Creación de constantes
const dataInicial ={
    array :[],
    page: 1,
}

//Creación de types
const GET_EPISODES = 'GET_EPISODES';
const NEXT_EPISODES = 'NEXT_EPISODES';
const PREV_EPISODES = 'PREV_EPISODES';
const SEARCH_EPISODES = 'SEARCH_EPISODES';

//Creación de reducer

export default function episodeReducer (state=dataInicial, action) {
    switch (action.type) {
      case GET_EPISODES:
        return { ...state, array: action.payload };
      case NEXT_EPISODES:
        return {
          ...state,
          array: action.payload.array,
          page: action.payload.page,
        };
      case PREV_EPISODES:
        return {
          ...state,
          array: action.payload.array,
          page: action.payload.page,
        };
      case GET_EPISODES:
        return { ...state, array: action.payload };
      default:
        return state;
    }
}

//Creación de acciones
export const getEpisodesAccion = () => async (dispatch, getState) => {
    
    const { page } = getState().characters;

    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
        dispatch({
          type: GET_EPISODES,
          payload: res.data.results,
        });
    } catch (error) {
        console.log(error);
    }
};

export const nextPageEpisodes = () => async (dispatch, getState) => {
  const { page } = getState().episodes;
  const nextPage = page + 1;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${nextPage}`
    );
    dispatch({
      type: NEXT_EPISODES,
      payload: {
        array: res.data.results,
        page: nextPage,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const prevPageEpisodes = () => async (dispatch, getState) => {
  const { page } = getState().episodes;
  const prevPage = page - 1;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${prevPage}`
    );
    dispatch({
      type: PREV_EPISODES,
      payload: {
        array: res.data.results,
        page: prevPage,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchEpisodes = (query) => async (dispatch, getState) => {
    const { page } = getState().episodes;

  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/episode/?page=${page}&name=${query}`
    );
    dispatch({
      type: SEARCH_EPISODES,
      payload: {
        array: res.data.results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};