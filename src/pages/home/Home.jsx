import {Link} from "react-router-dom";

export const Home=()=>
{
    return (
        <div>
            <h1>Book Shelf</h1>
            <h2>Currently Reading</h2>
            <hr/>
            <h2>Want to Read</h2>
            <hr/>
            <h2>Read</h2>
            <hr/>
            <img src="https://m.media-amazon.com/images/I/51plJpVmtVL.jpg" />
            <Link to="/search"> Search for books</Link>
        </div>
    )
}