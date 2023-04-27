import React from 'react';
import Header from './components/Header';
// importing all the routes within the application woo!
import { Route, Routes } from 'react-router-dom';
import Skywalker from './components/Skywalker';
import AddManga from './components/AddManga';
import Mangas from './components/Manga/Mangas';
import About from './components/Manga/About';

function App() {
  return (<React.Fragment>
    {/* renders the header in every route so it will always be there! */}
   <header>
    <Header />
   </header>
   {/* main will hold the route root containers */}
   <main>
    <Routes>
      <Route path="/" element={<Skywalker />} exact />
      <Route path="/add" element={<AddManga />} exact />
      <Route path="/mangas" element={<Mangas />} exact /> 
      <Route path="/about" element={<About />} exact />
    </Routes>
   </main>
    </React.Fragment>
  );
}

export default App;
