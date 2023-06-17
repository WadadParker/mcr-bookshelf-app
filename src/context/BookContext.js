import { createContext } from "react";

export const BookContext=createContext();

export const BookProvider=({children})=>
{
    return (
        <BookContext.Provider >
            {children}
        </BookContext.Provider>
    )
}