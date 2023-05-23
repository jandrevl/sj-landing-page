
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Location from './components/Location';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Services />
      <Location />
      <ContactForm />
      
    </div>
  );
}

export default App;
