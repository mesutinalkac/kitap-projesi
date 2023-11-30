import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";


export const GlobalContext = createContext();

const initalState = {
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],

  readinglist: localStorage.getItem("readinglist")
    ? JSON.parse(localStorage.getItem("readinglist"))
    : [],
  comnent: localStorage.getItem("comnent")
    ? JSON.parse(localStorage.getItem("comnent"))
    : [],
};

export const GlobalProvider = (props) => {
  const [state, dispacth] = useReducer(AppReducer, initalState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
    localStorage.setItem("readinglist", JSON.stringify(state.readinglist));
    localStorage.setItem("comnent", JSON.stringify(state.comnent));
  });

  const addToFavorites = (books) => {
    dispacth({ type: "ADD_MOVİE_FAVORİTES", payload: books });
  };

  const removeToFavorites = (id) => {
    dispacth({ type: "REMOVE_TO_FAVORİ", payload: id });
  };

  const addToReadinglist = (books) => {
    dispacth({ type: "ADD_TO_READİNGLİST", payload: books });
  };

  const removeToReadinglist = (id) => {
    dispacth({ type: "REMOVE_TO_READİNGLİST", payload: id });
  };

  const readinglistToFavorities = (books) => {
    dispacth({ type: "READİNGLİST_TO_FAVORİTİES", payload: books });
  };

  const fovoriToFromCommend = (books) => {
    dispacth({ type: "FAVORİ_TO_FROM_COMMNED", payload: books });
  };

  const removeCommend = (id)=>{
    dispacth({type: "REMOVE_COMMEND", payload:id})
  }
  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        addToFavorites,
        readinglist: state.readinglist,
        addToReadinglist,
        removeToFavorites,
        removeToReadinglist,
        readinglistToFavorities,
        fovoriToFromCommend,
        comnent: state.comnent,
        removeCommend,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
