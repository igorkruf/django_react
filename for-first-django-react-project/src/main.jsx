import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider } from "react-router";
import {router} from "./router/router.jsx"
import './index.css'
import App from './App.jsx'
// import FormAddArticle from './components/forms/form_add_article/formAddArticle.jsx';
// import FormEditArticle from './components/forms/form_edit_article/FormEditArticle.jsx';
// import NoFound404 from './components/page/no_found_404/no_found_404.jsx';

createRoot(document.getElementById('root')).render(
   
 <RouterProvider router={router}/>
  
)
