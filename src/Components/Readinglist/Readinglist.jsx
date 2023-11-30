import { useContext } from "react";
import "./Readinglist.css";
import { GlobalContext } from "../../context/GlobalState";
import ReadingCard from "./ReadingCard/ReadingCard";
 
const Readinglist = () => {
  const { readinglist } = useContext(GlobalContext);

  if (readinglist.length === 0) {
    return (
      <div className="readinglist">
        <h1>Okuma Listesi</h1>
        <p className="no-title">Okuma Listesindekitap bulunmamaktadır.</p>
      </div>
    );
  }
  return (
    <div className="readinglist">
      <h1>Okuma Listesi</h1>
      <div className="readin-container">
      <div className="fav-no">{readinglist.length} {readinglist.length > 0 ? "Kitap" : "favoriler"}</div>
        <div className="reading-wrapper">
          {readinglist.map((books) => (
            <ReadingCard books={books} key={books.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Readinglist;
