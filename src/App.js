import './style/App.scss'
import './style/Header.scss'
import './style/Home.scss'
import './style/Footer.scss'
import './style/Services.scss'
import './style/Response.scss'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from './components/Footer'
import Services from './components/Services'
import Contact from './components/Contact'
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Services' element={<Services />}/>

        <Route path='Contact' element={<Contact/>}/>
      </Routes>

      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
