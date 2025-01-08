import { useState, useEffect } from 'react'
import { useNavigate } from "react-router";
import './list_article_item.css'

function ListArticleItem({article, editArticle, delArticle}) {
  let navigate = useNavigate();
  
  return <>
  <li className='list-article__item'>
    <span>{article.title}</span>
    <span>
        <button onClick={()=>delArticle(article.id)}>Удалить</button>
        <button onClick={()=>navigate(`edit_article/${article.id}`)}>Изменить</button>
    </span>
  </li>
  
  
  </>
 

 
};

export default ListArticleItem
