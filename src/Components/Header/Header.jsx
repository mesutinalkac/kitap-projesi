import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-list">
          <div className="links">
            <Link to="/">
              <h1>Meina Kitap</h1>
              </Link>
        
            <Link to="/okuma-listes">
              Okuma Listesi
              <i className="fa-solid fa-book-open"></i>
            </Link>
            <Link to="/favoriler">
              Favoriler
              <i className="fa-solid fa-heart"></i>
            </Link>
            <Link to="/kitap-yorumlari">
              Kitap Yorumları
              <i className="fa-solid fa-comment"></i>
            </Link>
            <Link to="/kitap-ekle">
              Kitap Ekle
              <i className="fa-solid fa-square-plus"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
