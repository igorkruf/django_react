import { useState, useRef } from "react";
import BlockEditPage from "../block_edit_page/block_edit_page";
import { createPortal } from 'react-dom';
import ModalBasis from "../../modals/basis/basis";
import { getParrentModalBasis } from "../../../functions";

export default function MainPage({listBlocks}){
    let elemBody =document.querySelector('body');
    let elem = useRef(elemBody);
    let [openModal, setOpenModal] = useState(false);
    let contentModal = useRef();  
    let parentModalBasis = getParrentModalBasis();
    let openModalEdit = ()=>{
        console.log('Изменяем блок');
        contentModal.current = <BlockEditPage/>
        setOpenModal(true);
        elem.current.classList.add('modal-open');
        
      };
    
      let closeModal = ()=>{
        setOpenModal(false);
        elem.current.classList.remove('modal-open');
      }
      
      let itogListBlock = listBlocks.map((block, i)=>
        <div key={block.id} className="block">{block.content}<div className='block__menu'><span className='menu__item menu__item-edit' onClick={openModalEdit}>Изменить</span><span className='menu__item menu__item-del'> Удалить</span></div></div>
      )
    
    
    return <>
    <div className="block__wrapper">
      
        {itogListBlock}                          
    </div>
    
    <div>
      {openModal && createPortal(<ModalBasis contentModal = {contentModal.current} doClose={closeModal}/>, parentModalBasis)}
    
    </div>
    </>
}