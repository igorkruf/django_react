import { StrictMode } from 'react'
import App from './App.jsx';
// import { MyFirstContext } from './contexts.js';
// import {RouterProvider, HashRouter } from "react-router";
import { RouterProvider } from 'react-router-dom';
import {router} from "./router/router.jsx"
import './index.css'
import {createRoot } from 'react-dom/client';

// import FormAddArticle from './components/forms/form_add_article/formAddArticle.jsx';
// import FormEditArticle from './components/forms/form_edit_article/FormEditArticle.jsx';
// import NoFound404 from './components/page/no_found_404/no_found_404.jsx';

createRoot(document.getElementById('root')).render(

<RouterProvider router={router} />


 
)
