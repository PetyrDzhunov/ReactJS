import './App.css';
import Heading from './components/Heading';
import BookList from './components/BookList';
import Counter from './components/Counter';
import CarsList from './components/CarsList';
import Footer from './components/Footer';


function App() {
    return (
        <div className="site-wrapper">
            <Heading>
                <h1>Our Custom Library</h1>
                <h2>Favourite Book</h2>
            </Heading>
            <Counter />
            <Counter />
            <BookList />
            {/* <CarsList cars={carsData} /> */}
            <Footer />
        </div>
    );
};

export default App;
