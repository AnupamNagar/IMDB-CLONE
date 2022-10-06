// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
// import Pagination from './components/Pagination';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Favourite from './components/Favourite';


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path='/movies' element = {             
          <>
            <Banner></Banner>
            <Movies></Movies>
            {/* <Pagination></Pagination> */}
          </>} >
        </Route>
        
        <Route path='/favourites' element = {<Favourite></Favourite>}>
        </Route>
      </Routes>

      {/* ab url me localhost:3000/movies karne pr pura page dikhai dega  */}

      {/* <Banner></Banner>
      <Movies></Movies>
      <Pagination></Pagination> */}
    </BrowserRouter>
    
  );
}
// import { Form } from 'react-router-dom';

export default App;
