import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Lorem from './components/Lorem';

function App() {

    return (
        <div className="site-wrapper">
            <Header>Hello From App Component</Header>
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Footer />
        </div>
    );
}

export default App;
