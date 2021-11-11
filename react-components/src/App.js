import './App.css';
import Heading from './components/Heading';
import BookList from './components/BookList';
import Counter from './components/Counter';


const booksData = [
    { title: "Harry Potter", description: "Wizards and stuff", author: "Author" },
    { title: "Programming with JS", description: "Guide to programming" },
    { title: "The Bible", description: "Most important Book" },
    { title: "Chronicles of Narnia", description: "Nice book" },
    { title: null, description: "Missing Book" }
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
        </div>
    );
}

export default App;
