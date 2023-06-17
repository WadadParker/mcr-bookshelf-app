import { createContext, useReducer } from "react";
import { booksDB } from "../backend/booksDB";

export const BookContext=createContext();

export const BookProvider=({children})=>
{
    const bookReducer=(bookState,{type,payload})=>
    {
        switch(type)
        {
            
        }
    }
    
const initialState=booksDB;
    
const [state,dispatch]=useReducer(bookReducer,initialState);

const filterByCurrent=()=>
{
    const filteredList=[...state].filter(({category})=>category==="current")
    return filteredList;
}

const filterByWant=()=>
{
    const filteredList=[...state].filter(({category})=>category==="want")
    return filteredList;
}

const filterByRead=()=>
{
    const filteredList=[...state].filter(({category})=>category==="read")
    return filteredList;
}


    return (
        <BookContext.Provider value={{filterByCurrent,filterByWant,filterByRead}}>
            {children}
        </BookContext.Provider>
    )
}