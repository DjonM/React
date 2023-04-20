import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Cards from "./components/cardsComponent/Cards";
import Footer from "./components/Footer";
import { useState } from "react";
import Slider from "./components/Slider";

function App() {
  const [books, setBooks] = useState([]);

  fetch("https://643ee3f7b9e6d064beea297a.mockapi.io/books")
    .then((myJson) => {
      return myJson.json();
    })
    .then((myJson) => {
      setBooks(myJson);
    });

  return (
    <div>
      <Header />

      <Slider />
      
      <Cards items={books} />


      <Footer />
    </div>
  );
}

export default App;
