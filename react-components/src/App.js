import './App.css';
import Heading from './components/Heading';
import BookList from './components/BookList';
import Counter from './components/Counter';
import CarsList from './components/CarsList';
import Footer from './components/Footer';


const booksData = [
    { _id: 1, title: "Harry Potter", description: "Wizards and stuff", author: "Author" },
    { _id: 2, title: "Programming with JS", description: "Guide to programming" },
    { _id: 3, title: "The Bible", description: "Most important Book" },
    { _id: 4, title: "Chronicles of Narnia", description: "Nice book" },
    { _id: 5, title: null, description: "Missing Book" }
];


function App() {
    return (
        <div className="site-wrapper">
            <Heading>
                <h1>Our Custom Library</h1>
                <h2>Favourite Book</h2>
            </Heading>
            <Counter />
            <Counter />
            <BookList books={booksData} />
            {/* <CarsList cars={carsData} /> */}
            <Footer />
        </div>
    );
};

export default App;
