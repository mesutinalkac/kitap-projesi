import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Header from "./Components/Header/Header";
import Add from "./Components/Add/Add";
import Favorites from "./Components/Favorites/Favorites";
import ReadingBook from "./Components/ReadingBook/ReadingBook";
import Readinglist from "./Components/Readinglist/Readinglist";
import { GlobalProvider } from "./context/GlobalState";
import Main from "./Components/Main/Main";
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={ <Main/> } />
            <Route path="/kitap-ekle" element={<Add />} />
            <Route path="/favoriler" element={<Favorites />} />
            <Route path="/kitap-yorumlari" element={<ReadingBook />} />
            <Route path="/okuma-listes" element={<Readinglist />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
