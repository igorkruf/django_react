import { createBrowserRouter } from "react-router";
import App from "../App";
import FormAddArticle from "../components/forms/form_add_article/formAddArticle";
import FormEditArticle from "../components/forms/form_edit_article/FormEditArticle";
export let router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <FormAddArticle/>,
            },
            {
                path: "edit_article/:article_id",
                element: <FormEditArticle/>,
          },

        ],
      },
      {
        path:"*",
        element:<NotFoundPage/>
      }
]);

function NotFoundPage(){
    return <h1>Страница не найдена</h1>
}
