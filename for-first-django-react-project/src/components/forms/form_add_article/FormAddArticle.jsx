import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import {useFormik} from 'formik'
import { getCookie } from '../../../functions';

import './FormAddArticle.css'


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

function FormAddArticle() {
  let navigate = useNavigate();

  useEffect(()=>{

  },[])

 let formik = useFormik({
  initialValues: {
    title:'',
    content:'',
  },
  validate,
  onSubmit:async (values)=>{
    console.log(JSON.stringify(values, null, 2));
    let respose = await fetch('/api/add_article/', {
      method:"POST",
      body:JSON.stringify(values),
      headers:{ 
        "Content-type": "application/json; charset=UTF-8",
        'X-CSRFToken': csrftoken
      }
    });

    let result = await respose.json();
    if (result.status==true){
      formik.resetForm();
      navigate("/");    
    } else {
      console.log('Ошибка при добавлении Статьи в базу')
    }
    
    

  }
  
           
    

});

  return (
    <>
    <h1>Форма добавлениея статьи</h1>
    
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
      <button type="submit">Submit</button>

      
     
     
     </form>
    
    </>
  )
};

export default FormAddArticle;