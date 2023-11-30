import { useContext } from "react";
import "./BooksCard.css";
import { GlobalContext } from "../../../context/GlobalState";

const BooksCard = ({ books }) => {
    const {addToFavorites,addToReadinglist,favorites}= useContext(GlobalContext)
  const imageUrl =
    books &&
    books.volumeInfo &&
    books.volumeInfo.imageLinks &&
    books.volumeInfo.imageLinks.smallThumbnail;

    const stopfavori = favorites.find((o)=> o.id === books.id)
    const stopReading = favorites.find((i)=> i.id === books.id)

  return (
    <div className="books-card">
      <div className="books-container">
        <div className="books-wrapper">
          <div className="books-img">
            {imageUrl ? (
              <img src={imageUrl} alt="" />
            ) : (
              <div className="notfound"></div>
            )}
          </div>
          <div className="books-info">
            <p className="books-title">
              Kitap:{" "}
              <b>{books.volumeInfo.title ? books.volumeInfo.title : "-"}</b>
            </p>
            <p className="author-title">
              Yazar:
              <b>
                {books.volumeInfo.authors ? books.volumeInfo.authors : "-"}{" "}
              </b>
            </p>
            <p className="books-pageCount">
              Sayfa:{" "}
              <b>
                {" "}
                {books.volumeInfo.pageCount ? books.volumeInfo.pageCount : "-"}
              </b>
            </p>
            <p className="books-publisher">
              yayın:{" "}
              <b>
                {books.volumeInfo.publisher ? books.volumeInfo.publisher : "-"}
              </b>
            </p>
          </div>
          <div className="btns">
            <button className="btn-fovori" disabled={stopfavori} onClick={()=>addToFavorites(books)} >Favorilere Ekle</button>
            <button className="btn-read" disabled={stopReading}  onClick={()=> addToReadinglist(books)}>Okuma Listesine Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
