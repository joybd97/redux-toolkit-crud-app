import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { deleteBook } from './BooksSlice';
import { Link } from "react-router-dom";

const BookView = () => {
    const books= useSelector((state) =>state.booksReducer.books);
    const dispatch = useDispatch();
    //console.log(books);
    const handleDeleteBook = (id) =>{
        dispatch(deleteBook(id));
    }
    return (
        <div>
            <h2>List Of books</h2>
            <table>
                <thead>
                    <tr>
                        
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map((book) =>{
                        const {id, title, author}= book;
                        return <tr key={id}>
                            
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>
                            <Link to="/edit-book" state={{ id, title, author }}>
                             <button>Edit</button>
                             </Link>
                            <button onClick={()=>{handleDeleteBook(id)}}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BookView;