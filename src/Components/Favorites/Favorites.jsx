import { useContext } from "react";
import "./Favorites.css";
import { GlobalContext } from "../../context/GlobalState";
import FavoriCard from "./FavoriCard/FavoriCard";

const Favorites = () => {
  const { favorites } = useContext(GlobalContext);

  if (favorites.length === 0) {
    return (
      <div className="favori-book-control">
        <h1>Favoriler</h1>
        <p className="no-title">Favori kitap bulunmamaktadır.</p>
      </div>
    );
  }

  return (
    <div className="favori-book-control">
      <h1>Favoriler</h1>
      <div className="favori-book-container">
     <div className="fav-no">{favorites.length} {favorites.length > 0 ? "favori" : "favoriler"}</div>  
        <div className="favori-book-wrapper">
          {favorites.map((books) => (
            <FavoriCard key={books.id} books={books}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
