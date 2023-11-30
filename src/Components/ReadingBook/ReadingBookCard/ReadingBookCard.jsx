import { useContext } from "react";
import "./ReadingBookCard.css";
import { GlobalContext } from "../../../context/GlobalState";

const ReadingBookCard = ({ books }) => {
  const { removeCommend } = useContext(GlobalContext);

  const imageUrl =
    books &&
    books.volumeInfo &&
    books.volumeInfo.imageLinks &&
    books.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className="rbc">
      <div className="rbc-container">
        <div className="rbc-wrapper">
          <div className="book-img">
            {imageUrl ? (
              <img src={imageUrl} alt="" />
            ) : (
              <div className="notfound"></div>
            )}
          </div>
          <button className="rbc-btn" onClick={() => removeCommend(books.id)}>
            Sil
          </button>
        </div>
        <div className="tarea">
          <textarea
            name=""
            id=""
            cols="60"
            rows="5"
            placeholder="Yorumunuzu giriniz..."
          ></textarea>
        </div>
        <div className="rbc-btns">
          <button className="rbc-ok-btn">Kaydet</button>
        </div>
      </div>
    </div>
  );
};

export default ReadingBookCard;
