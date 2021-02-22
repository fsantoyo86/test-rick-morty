import axios from "axios";

//Creación de constantes
const dataInicial ={
    array :[],
    single:{},
    page: 1
}

//Creación de types
const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_SINGLE_CHARACTERS = 'GET_SINGLE_CHARACTERS';
const NEXT_SINGLE_CHARACTERS = "NEXT_SINGLE_CHARACTERS";
const PREV_SINGLE_CHARACTERS = "PREV_SINGLE_CHARACTERS";

const NEXT_CHARACTERS = 'NEXT_CHARACTERS';
const PREV_CHARACTERS = 'PREV_CHARACTERS';
const SEARCH_CHARACTERS = 'SEARCH_CHARACTERS';


//Creación de reducer

export default function characterReducer (state=dataInicial, action) {
    switch (action.type) {
      case GET_CHARACTERS:
        return { ...state, array: action.payload };
      case GET_SINGLE_CHARACTERS:
        return { ...state, single: action.payload };
      case NEXT_SINGLE_CHARACTERS:
        return {
          ...state,
          single: action.payload.single,
          page: action.payload.page,
        };
      case PREV_SINGLE_CHARACTERS:
        return {
          ...state,
          single: action.payload.single,
          page: action.payload.page,
        };
      case NEXT_CHARACTERS:
        return {
          ...state,
          array: action.payload.array,
          page: action.payload.page,
        };
      case PREV_CHARACTERS:
        return {
          ...state,
          array: action.payload.array,
          page: action.payload.page,
        };
      case SEARCH_CHARACTERS:
        return { ...state, array: action.payload };
      default:
        return state;
    }
}

//Creación de acciones
export const getCharactersAccion = () => async (dispatch, getState) => {

    const {page} = getState().characters;
    try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        dispatch({
          type: GET_CHARACTERS,
          payload: res.data.results,
        });
    } catch (error) {
        console.log(error);
    }
}

export const getSingleChar = () => async (dispatch, getState) => {
  const { page } = getState().characters;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${page}`
    );
    dispatch({
      type: GET_SINGLE_CHARACTERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const nextSingleChar = () => async (dispatch, getState) => {
  const { page } = getState().characters;
  const tempPage = page +1;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${tempPage}`
    );
    dispatch({
      type: NEXT_SINGLE_CHARACTERS,
      payload: {
        single: res.data,
        page: tempPage,
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const prevSingleChar = () => async (dispatch, getState) => {
  const { page } = getState().characters;
  const tempPage = page - 1;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${tempPage}`
    );
    dispatch({
      type: PREV_SINGLE_CHARACTERS,
      payload: {
        single: res.data,
        page: tempPage,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const nextPageCharacters = ()=> async (dispatch, getState)=>{

    const {page} = getState().characters;
    const nextPage = page +1;
    try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${nextPage}`
        );
        dispatch({
            type:NEXT_CHARACTERS,
            payload: {
                array: res.data.results,
                page: nextPage
            }

        })
    } catch (error) {
        console.log(error);
    }
}

export const prevPageCharacters = () => async (dispatch, getState) => {
  const { page } = getState().characters;
  const prevPage = page - 1;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${prevPage}`
    );
    dispatch({
      type: PREV_CHARACTERS,
      payload: {
        array: res.data.results,
        page: prevPage,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchCharacters = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=morty`
    );
    dispatch({
      type: SEARCH_CHARACTERS,
      payload: {
        array: res.data.results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};