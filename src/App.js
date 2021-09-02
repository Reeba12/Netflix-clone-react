import "./App.css";
import Row from "./Row";
import request from "./request";
import Header from "./Header";
// import Navbar from "./Navbar";
// import Header from './Header';
function App() {
  return (
    <div className="App">
      
      <Header />
      <Row
        isLarge
        title="NETFLIX ORIGINAL"
        fetchUrls={request.fetchNetflixoriginals}
      />
      <Row title="Trending" fetchUrls={request.fetchTrending} />
      <Row title="Top-Rated" fetchUrls={request.fetchTopRated} />
      <Row title="Action-Movies" fetchUrls={request.fetchActionMovies} />
      <Row title="Comedy-Movies" fetchUrls={request.fectComedyMovies} />
      <Row title="Documentaries" fetchUrls={request.fetchDocumentaries} />
      <Row title="Horror" fetchUrls={request.fetchHorrorMovie} />
      <Row title="Romantic" fetchUrls={request.fetchRomanticMovies} />
    </div>
  );
}

export default App;
