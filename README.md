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
