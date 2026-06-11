import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './Main';
import Nav from './components/layout/Nav';

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
