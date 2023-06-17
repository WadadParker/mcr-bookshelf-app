import { createContext, useReducer } from "react";
import { booksDB } from "../backend/booksDB";

export const BookContext=createContext();

export const BookProvider=({children})=>
{
    const bookReducer=(bookState,{type,payload,option})=>
    {
        switch(type)
        {
            case "CHANGE_CATEGORY":
                const updatedBookList=bookState.books.map(item=>{
                    if(item.id===payload)
                    return {...item,category:option};
                    return item;
                });
    
                return {...bookState,books:updatedBookList};

            case "SEARCH":
                return {...bookState,search:payload} 
                

            default:
                return bookState;    
        }
    }
    
const initialState={
    books:booksDB,
    search:""
};
    
const [state,dispatch]=useReducer(bookReducer,initialState);
const {books,search}=state;

const filterByCurrent=()=>
{
    const filteredList=[...books].filter(({category})=>category==="current")
    return filteredList;
}

const filterByWant=()=>
{
    const filteredList=[...books].filter(({category})=>category==="want")
    return filteredList;
}

const filterByRead=()=>
{
    const filteredList=[...books].filter(({category})=>category==="read")
    return filteredList;
}

const searchBooks=()=>
{
    const searchedBooks=[...books].filter(({title})=>(title.toLowerCase()).includes(search.toLowerCase()));
    return searchedBooks;
}


    return (
        <BookContext.Provider value={{filterByCurrent,filterByWant,filterByRead,dispatch,books,search,searchBooks}}>
            {children}
        </BookContext.Provider>
    )
}