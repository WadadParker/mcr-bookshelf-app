import "./searchPage.css";

import { Link } from "react-router-dom"
import {booksDB} from "../../backend/booksDB";
import { BookList } from "../../components/booklist/BookList";

export const SearchPage=()=>
{
    return (
        <div>
            This is search Page
            <Link to="/">Go back to Main Page</Link>
            <ul className="book-list-item">
            {booksDB.map((item)=>(
                <li key={item?.title}>
                    <BookList item={item} />
                </li>
            ))}
            </ul>
        </div>
    )
}