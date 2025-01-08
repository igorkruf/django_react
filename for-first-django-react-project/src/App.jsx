import { useState, useEffect, useContext } from 'react';
// import FormAddArticle from './components/forms/form_add_article/formAddArticle';
import ListArticleItem from './components/list_article_item/list_article_item';
import { getCookie } from './functions';

import './App.css'
import { Outlet, useLocation } from "react-router";
// import { BrowserRouter, Routes, Route } from "react-router";

// Для получения значения куки с конкретным именем (аргумент: name )
// function getCookie(name) {
//   const regex = new RegExp(`(?:(?:^|;\\s*)${name}=([^;]*))`);
//   const match = document.cookie.match(regex);
//   return match ? decodeURIComponent(match[1]) : null;
// }
let csrftoken = getCookie('csrftoken');

function App() {
  
 let [listArticle, setListArticle] = useState([]); 
 let [dataEditArticle, setDataEditArticle] = useState();
 const location = useLocation();
 async function editArticle(id){
  console.log(`Редактируем статью с id: ${id}`);
  let response = await fetch(`/api/article/edit/${id}/`);
  let result = await response.json();
  setDataEditArticle(result);
}

 async function delArticle(id){
  console.log(`Удаляем статью с id: ${id}`);
  let response = await fetch(`/api/article/del/${id}/`, {
    method:"DELETE",
    headers:{
      'X-CSRFToken': csrftoken
    }
  });
  let result = await response.json();
  console.log(result);
  if (result['post']){
    fetchData();
  } else {
    console.log('Ошибка при удалении статьи');
  }
  
 }

  let fetchData = async ()=>{
    let response = await fetch('/api');
    let result = await response.json();
    console.log('Результат:');
    console.log(result); 
    setListArticle(result);

  };

  useEffect(()=>{
    console.log('Рендер App.js')
     fetchData();
  }, [location]);

 
  let itogListArticle = listArticle.map((article, i)=><ListArticleItem key={article.key} article={article} editArticle={editArticle} delArticle={delArticle}/>)

  
  return (
    <>
   
                    
                    
    
    <ul className='list-article'>  
      
    
      {itogListArticle}
    </ul>
   <Outlet/>
    
    
    </>
    
    )
};

export default App
