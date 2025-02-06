https://reactrouter.docschina.org/routers/create-browser-router/  - router

Для SPA подойдёт hashrouter
App.jsx
```
import useIntersectionObserverOpacity from '../hooks/useIntersectionObserver';

function App() {
  let [listBlocks, setListBlocks] = useState([]);
  let dataFetch = useFetch('https://dog.ceo/api/breeds/image/random');
  let css_seletor = '.test-block';
  useIntersectionObserverOpacity(css_seletor);
  
  return (
  <StoresContext.Provider value={rootStore}>
     <FormAddFile/>
     {dataFetch.done && dataFetch.data && 
    <p>
      {dataFetch.data.message}
    </p>
    }
  <div class="wrapper ">
  <div class="test-block">Тестовый блок</div> 
    <div class="test-block">Тестовый блок</div> 
    <div class="test-block">Тестовый блок</div> 
    <div class="test-block">Тестовый блок</div> 
    <div class="test-block">Тестовый блок</div> 


  </div>
    
  </StoresContext.Provider>
   
  )
}

export default App

```

сам хук...
```
export default function useIntersectionObserverOpacity(selector){
    
    let options ={
        threshold: 0,
      }

    let cb = (entries)=>{
        entries.forEach((entry) => {
            
            if (entry.isIntersecting) {
                console.log('Элемент пересёк границу области и всё ещё соприкасается с ней!')
                observer.unobserve(entry.target);
              }
        })
        
    }
    let observer = new IntersectionObserver(cb, options);
    useEffect(()=>{
       let listObservebleBlocks = document.querySelectorAll(selector);
       listObservebleBlocks.forEach(block=>{
       observer.observe(block);
       }) 
       
    });

  
}
```
про просто CSS transition смотри 
```
import {useRef, useState} from 'react';
import { CSSTransition} from 'react-transition-group'
import './no_found_404.css';


export default function NoFound404(){
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    console.log('ddddddddddd');
    return (
        <CSSTransition
        nodeRef={nodeRef}
        in={inProp}
        classNames="fade"
        timeout={600}
       >
        <div >
        <h1 ref={nodeRef} className={inProp && 'sss'}>Страница не найzxczxzcдена</h1>
        <button
                type="button"
                onClick={() => setInProp(true)}
            >
                Click to Enter
            </button>
        </div>    
        </CSSTransition>
       
  
    )

}
```
https://blog.openreplay.com/how-to-add-animations-with-react-transition-group/      CSS transition group

