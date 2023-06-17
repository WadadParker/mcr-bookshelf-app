import "./searchPage.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom"
import {booksDB} from "../../backend/booksDB";
import { BookList } from "../../components/booklist/BookList";

export const SearchPage=()=>
{
    const navigate=useNavigate();
    return (
        <div>
            <nav>
            <button className="main-button" onClick={()=>navigate("/")}>Back to Home</button>
            </nav>
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