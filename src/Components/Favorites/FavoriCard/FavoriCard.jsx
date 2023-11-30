import { useContext } from "react";
import "./FavoriCard.css";
import { GlobalContext } from "../../../context/GlobalState";

const FavoriCard = ({ books }) => {
  const { removeToFavorites,fovoriToFromCommend,comnent} = useContext(GlobalContext);
  const imageUrl =
    books &&
    books.volumeInfo &&
    books.volumeInfo.imageLinks &&
    books.volumeInfo.imageLinks.smallThumbnail;

  const title =
    books && books.volumeInfo && books.volumeInfo.title
      ? books.volumeInfo.title
      : "-";

  const stopcomnent = comnent.find((o)=> o.id === books.id)

  return (
    <div className="book-control">
      <div className="book-container">
        <div className="favno"></div>
        <div className="book-wrapper">
          <div className="book-img">
            {imageUrl ? (
              <img src={imageUrl} alt="" />
            ) : (
              <div className="notfound"></div>
            )}
          </div>
          <div className="book-titles">
            <p>
              {" "}
              <b>{title}</b>{" "}
            </p>
            <div className="book-btn">
              <button
                className="btn-del"
                onClick={() => removeToFavorites(books.id)}
              >
                Sil
              </button>
              <button className="btn-com" disabled={stopcomnent} onClick={()=>fovoriToFromCommend(books)} > Yorum Yap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriCard;
