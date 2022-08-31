import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';


function App() {
    return (
        <div className="App">
            <Header/>
            <Banner/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
