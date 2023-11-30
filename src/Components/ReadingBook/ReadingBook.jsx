import { useContext } from "react";
import "./ReadingBook.css";
import { GlobalContext } from "../../context/GlobalState";
import ReadingBookCard from "./ReadingBookCard/ReadingBookCard";

const ReadingBook = () => {
  const { comnent } = useContext(GlobalContext);
  return (
    <div className="reading">
      <h1> Kitap Yorumları </h1>
      <div className="readingbook-container">
        <div className="readingbook-wrapper">
          {comnent.map((books) => (
            <ReadingBookCard books={books} key={books.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingBook;
