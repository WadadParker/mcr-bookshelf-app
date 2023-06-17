import "./bookList.css";

export const BookList=({item})=>
{
    const {title,img,author,category}=item;
    return (
        <div className="booklist-container">
            <img src={img} alt="" width={150} height={200} />
            <strong>{title}</strong>
            <small>{author}</small>
            
        </div>
    )
}