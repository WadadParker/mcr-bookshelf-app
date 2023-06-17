import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./home.css";

import { BookContext } from "../../context/BookContext";
import { BookList } from "../../components/booklist/BookList";

export const Home=()=>
{
    const {filterByCurrent,filterByWant,filterByRead}=useContext(BookContext)

    const navigate=useNavigate();
    return (
        <div>
            <h1>Book Shelf</h1>
            <button className="search-button" onClick={()=>navigate("/search")}>Search Books</button>
            <h2>Currently Reading</h2>
            <ul className="book-list-item-container">
            {filterByCurrent().map((item)=>(
                <li key={item?.title}>
                    <BookList item={item} />
                </li>
            ))}
            </ul>
            <hr/>
            <h2>Want to Read</h2>
            <ul className="book-list-item-container">
            {filterByWant().map((item)=>(
                <li key={item?.title}>
                    <BookList item={item} />
                </li>
            ))}
            </ul>
            <hr/>
            <h2>Read</h2>
            <ul className="book-list-item-container">
            {filterByRead().map((item)=>(
                <li key={item?.title}>
                    <BookList item={item} />
                </li>
            ))}
            </ul>
            <hr/>
        </div>
    )
}