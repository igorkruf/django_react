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