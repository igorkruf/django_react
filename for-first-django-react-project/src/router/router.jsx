// import { createBrowserRouter } from "react-router";
import { createHashRouter } from "react-router-dom"
import App from "../App";
import Books from "../components/page/books/books.jsx";
import Book from "../components/page/books/book/book.jsx";

// export let router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         children: [
//             {
//                 index: true,
//                 element: <FormAddArticle/>,
//             },
//             {
//                 path: "api/",
//                 element: <NotFoundPage/>,
//           },

//         ],
//       },
//       {
//         path:"*",
//         element:<NotFoundPage/>
//       }
// ]);


export let router = createHashRouter([
      {
          path: "/",
          element: <App/>,
          children: [
              // {
              //     index: true,
              //     element: <FormAddArticle/>,
              // },
              {
                  path: "api/",
                  element: <NotFoundPage/>,
            },
            {
              path: "books/",
              element: <Books/>,
              children:[
                {
                  path: ":book_id/",
                  element: <Book />,
                },
              ]
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
