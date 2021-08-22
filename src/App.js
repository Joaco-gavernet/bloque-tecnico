// Styles
import './App.scss';


// Components
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className='App'>
      {/* Componente NavBar */}
      <NavBar />
      {/* Componente Home */}
      <Home />
      {/* Componente Footer */}
      <Footer />
    </div>
  );
}

export default App;
