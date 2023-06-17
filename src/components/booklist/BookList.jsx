import "./bookList.css";
import { useContext } from "react";

import { BookContext } from "../../context/BookContext";

export const BookList=({item})=>
{
    const {dispatch}=useContext(BookContext);

    const {id,title,img,author,category}=item;

    const changeHandler=(event)=>
    {
        const selectedValue=event.target.value;
        dispatch({type:"CHANGE_CATEGORY",payload:id,option:selectedValue})

    }

    return (
        <div className="booklist-container">
            <img src={img} alt="" width={150} height={200} />
            <strong>{title}</strong>
            <small>{author}</small>
            <select value={category }onChange={changeHandler}>
                <option value="current" className={category==="current"?"active-option":""}>Currently Reading</option>
                <option value="want" className={category==="want"?"active-option":""} >Want to Read</option>
                <option value="read" className={category==="read"?"active-option":""} >Read</option>
                <option value="none" >None</option>
            </select>
        </div>
    )
}