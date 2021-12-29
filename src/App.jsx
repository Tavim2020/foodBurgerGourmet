import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { GlobalContext } from './Context/GlobalContext';
import Home from './Pages/Home/Home';
import InitialPage from './Pages/InitialPage/InitialPage';

function App() {

  const {
    header, 
    footer
  } = React.useContext(GlobalContext);

  return (
    <div className="App">

      <BrowserRouter>

        {
          header && (
            <Header />
          )
        }


        <Routes>

          <Route path='/' exact element={<InitialPage />} />

          <Route path="/home" exact element={<Home />} />


        </Routes>
        
        {
          footer && (
            <Footer />
          )
        }
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
