import { useContext } from "react";
import "./ReadingCard.css"
import { GlobalContext } from "../../../context/GlobalState";

const ReadingCard = ({books}) => {
  const {removeToReadinglist,readinglistToFavorities}= useContext(GlobalContext)
    const imageUrl =
    books &&
    books.volumeInfo &&
    books.volumeInfo.imageLinks &&
    books.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div className="book-control">
    <div className="book-container">
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
            <b>
              {books.volumeInfo.title ? books.volumeInfo.title : "-"}
            </b>{" "}
          </p>
          <div className="book-btn">
            <button className="btn-del" onClick={()=>removeToReadinglist(books.id)} >Sil</button>
            <button className="btn-com"  onClick={()=>readinglistToFavorities(books)} > Favorilere Ekle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ReadingCard
