import React, { useState, useEffect } from "react";
import "./Add.css";
import BooksCard from "./BooksCard/BooksCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const bookAuthor = "oğuz atay"

  
  useEffect(() => {
    // Sayfa yüklendiğinde otomatik olarak 10 kitap getir
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookAuthor}&printType=books&maxResults=10&key=AIzaSyBlvYgSCqv-SyYX7e_A5k1gZZ6A1EAqvoM`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setResults(data.items);
        } else {
          setResults([]);
        }
      });
  }, []); // Boş bağımlılık dizisi, bu effect'in sadece bir kez çalışmasını sağlar (componentDidMount gibi)

  const onchange = (e) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&key=AIzaSyBlvYgSCqv-SyYX7e_A5k1gZZ6A1EAqvoM`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setResults(data.items);
        } else {
          setResults([]);
         
        }
      });
    setQuery("");
    e.preventDefault();
  };
  return (
    <div className="add">
      <div className="add-container">
        <div className="add-wrapper">
          <form>
            <input
              type="text"
              placeholder="kitap ara..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button className="btn" onClick={onchange}>
              Bul 
            </button>
          </form>
        </div>
        <div className="books">
          {results.map((books) => (
            <BooksCard books={books} key={books.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Add;
