import { Outlet } from 'react-router'
import listBooks from '../../../books.js' 

export default function Books(){
    let listBooksFinal = listBooks.map(book => <li><a href={`#books/${book.id}`}>{book.title}</a></li>)

    return <>
        <p>Список книг</p>
        <ul>
        {listBooksFinal}
        </ul>
        <Outlet/>        
    </>
}