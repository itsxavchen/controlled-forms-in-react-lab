import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBooks] = useState({title: '', author: ''});

  const handleInputChange = (event) => {
    setNewBooks({ ...newBook, [event.target.name]: event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBooks({ title: '', author: '' }); 
  }

  return (
  <div className="bookshelfDiv">
    <div className="formDiv">
      <h3>Add a Book</h3>
      {/* Form will go here */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          id='title'
          name='title'
          value={newBook.title}
          onChange={handleInputChange}
        />

        <label htmlFor="author">Author:</label>
        <input 
          id='author'
          name='author'
          value={newBook.author}
          onChange={handleInputChange}
        />
        <button type='submit'>Add a book</button>
      </form>
    </div>
    <div className="bookCardsDiv">
        <ul>
          {books.map ((book, idx) => (
            <li key={idx}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </li>
          ))}
        </ul>
    </div>
  </div>
  )
}


export default Bookshelf;