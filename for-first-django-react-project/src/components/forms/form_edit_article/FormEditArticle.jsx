import { useState, useEffect, useContext } from 'react'
import {useFormik} from 'formik'
import { getCookie } from '../../../functions';
import { useParams, useNavigate} from "react-router";
import './FormEditArticle.css'


// Для получения значения куки с конкретным именем (аргумент: name )
// function getCookie(name) {
//   const regex = new RegExp(`(?:(?:^|;\\s*)${name}=([^;]*))`);
//   const match = document.cookie.match(regex);
//   return match ? decodeURIComponent(match[1]) : null;
// }
let csrftoken = getCookie('csrftoken');


let validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length < 6) {
    errors.title = 'Must be 6 characters or more';
  }

  if (!values.content) {
    errors.content = 'Required';
  } 

  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }

  return errors;
};


function FormEditArticle({getListArticle}) {
   let myContext = useContext()
    console.log('fffffffffffffffffffffff');
    let [selectedArticle, setSelectedArticle] = useState();
    let {article_id} = useParams();
    let navigate = useNavigate();
    console.log(article_id);
    useEffect(()=>{
      async function getSelectedArticle(){
        let response = await fetch(`/api/article/edit/${article_id}`);
        let result = await response.json();
        setSelectedArticle(result)
      };
      getSelectedArticle();
   }, [article_id]);

  
  
  let formik = useFormik({
    
  initialValues: {
    id: selectedArticle?.id,
    title: selectedArticle?.title,
    content: selectedArticle?.content,
  },
  enableReinitialize: true,
  validate,
  onSubmit:async (values)=>{
    console.log(JSON.stringify(values, null, 2));
    let respose = await fetch(`/api/article/edit/${values.id}/`, {
      method:"PUT",
      body:JSON.stringify(values),
      headers:{ 
        "Content-type": "application/json; charset=UTF-8",
        'X-CSRFToken': csrftoken
      }
    });

    let result = await respose.json();
    if (result.status==true){
    //   formik.resetForm();
      navigate("/");
       
    } else {
       console.log('Ошибка при изменении статьи')
    }
    
    

  }
  
           
    

});

  return (
    <>
    <h1>Форма изменения статьи</h1>
    
    {/* <form onSubmit={(e)=>{e.preventDefault(); formik.handleSubmit(e)}} > */}
    <form className='content_incolumn' onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Заголовок статьи</label>
      <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title && <div>{formik.errors.title}</div>}
      <label htmlFor="content">Содержимое статьи</label>
      <textarea className='form-elem form-elem__textarea'
         id="content"
         name="content"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.content}
      />
      {formik.touched.content && formik.errors.content && <div>{formik.errors.content}</div>}
      <button type="submit">Принять изменения</button>

      
     
     
     </form>
    
    </>
  )
};

export default FormEditArticle;