import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import listBooks from '../../../../books.js' 

export default function Book(){
    console.log('222')
    let {book_id} = useParams();
    let book = listBooks.filter(book => book.id == book_id)[0];
 
return <>
    <h3>Книга</h3>
    <p>{book.year}</p>
    </>
}