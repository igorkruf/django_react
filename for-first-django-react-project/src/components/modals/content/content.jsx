import { useState, useRef } from 'react';
import ModalBasis from '../basis/basis';
import BlockEditPage from '../../page/block_edit_page/block_edit_page';
import { createPortal } from 'react-dom';
import './content.css';

function ModalContent({content}){
  let contentModal = useRef();  
  let [openModal, setOpenModal] = useState(false);
    let elemBody =document.querySelector('body');
    let elem = useRef(elemBody); 
    let nodeListModalBasis =document.querySelectorAll('.modal__basis');
    console.log(nodeListModalBasis);
    let parentModalBasis = nodeListModalBasis[nodeListModalBasis.length - 1] ? nodeListModalBasis[nodeListModalBasis.length - 1] : elem.current;
    console.log(parentModalBasis);
    let openSubModalEdit = ()=>{
        console.log('Открываем субмодальное окно');
        contentModal.current = <BlockEditPage/>
        setOpenModal(true);
        elem.current.classList.add('modal-open');
    
      };
    
      let closeModal = ()=>{
        setOpenModal(false);
        elem.current.classList.remove('modal-open');
      }
      
    

    let doClose = (e)=>{
        e.stopPropagation();
        
        // let body = document.querySelector('body');
        // body.classList.add('modal-open');
    }

    return <>
    <div className="modal__content" onClick={doClose}>
    <div>{content && content}</div>
    
    </div>
   
    <div>
    {openModal && createPortal(<ModalBasis contentModal={contentModal.current}  doClose={closeModal}/>, parentModalBasis)}
    </div>
    </>
}

export default ModalContent;