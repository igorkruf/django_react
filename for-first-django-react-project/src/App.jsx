import { useState, useEffect, useRef, useContext } from 'react';
// import FormAddArticle from './components/forms/form_add_article/formAddArticle';
import ListArticleItem from './components/list_article_item/list_article_item';
import { getCookie } from './functions';
import { createPortal } from 'react-dom';
import ModalBasis from './components/modals/basis/basis';
import FormAddArticle from './components/forms/form_add_article/formAddArticle';

import MainPage from './components/page/main_page/main_page';
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
 
 
  let elemBody =document.querySelector('body');
  
  let [openModal, setOpenModal] = useState(false);
  let contentModal = useRef();
  let elem = useRef(elemBody);
  let listBlocks =[
    { "id":1, "name":"Блок1", "content":"Content блока 1"},
    { "id":2, "name":"Блок2", "content":"Content блока 2"},
    { "id":3, "name":"Блок3", "content":"Content блока 3"},
    { "id":4, "name":"Блок4", "content":"Content блока 4"},
  ];
  
  let nodeListModalBasis =document.querySelectorAll('.modal__basis');
  console.log(nodeListModalBasis);
  let parentModalBasis = nodeListModalBasis[nodeListModalBasis.length - 1] ? nodeListModalBasis[nodeListModalBasis.length - 1] : elem.current;
  console.log(parentModalBasis);

  let openModalEdit = ()=>{
    console.log('Изменяем блок');
    contentModal.current = <BlockEditPage/>
    setOpenModal(true);
    elem.current.classList.add('modal-open');
    
  };

  let closeModal = ()=>{
    setOpenModal(false);
    elem.current.classList.remove('modal-open');
  }
  
  
  
    
useEffect(()=>{
  // let nodeListModalBasis =document.querySelectorAll('.modal__basis');
  // let parentModalBasis = nodeListModalBasis[nodeListModalBasis.length - 2] ? nodeListModalBasis[nodeListModalBasis.length - 2] : elem.current;
  // console.log(parentModalBasis? parentModalBasis : elem.current);

  // console.log(document.querySelectorAll('.modal__basis'));


}, ) 

  return <>
  <div className='wrapper'>
    
    <MainPage listBlocks={listBlocks}/>
    <FormAddArticle/>
  </div> 
  
    
    
    </>
    
    
};

export default App
