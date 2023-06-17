import "./searchPage.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import {booksDB} from "../../backend/booksDB";
import { BookList } from "../../components/booklist/BookList";
import { BookContext } from "../../context/BookContext";

export const SearchPage=()=>
{
    const navigate=useNavigate();
    const {search,dispatch,searchBooks}=useContext(BookContext);
    
    return (
        <div>
            <nav>
            <button className="main-button" onClick={()=>navigate("/")}>Back to Home</button>
            <input type="search" placeholder="search a book" value={search} onChange={(e)=>dispatch({type:"SEARCH",payload:e.target.value})}></input>
            </nav>
            <ul className="book-list-item">
            {searchBooks().map((item)=>(
                <li key={item?.title}>
                    <BookList item={item} />
                </li>
            ))}
            </ul>
        </div>
    )
}