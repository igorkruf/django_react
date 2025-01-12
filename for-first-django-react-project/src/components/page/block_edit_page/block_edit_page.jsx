import { useState, useRef } from "react";
import { createPortal } from 'react-dom';
import { getParrentModalBasis } from "../../../functions";
import ModalBasis from "../../modals/basis/basis";
import BlockEditSubPage from "../block_edit_sub_page/block_edit_sub_page";
import BlockDeleteSubPage from "../block_delete_sub_page/block_delete_sub_page";

export default function BlockEditPage(){
   
    let parentModalBasis = getParrentModalBasis();
    let [openModal, setOpenModal] = useState(false);
    let contentModal = useRef(); 
    let openSubModalEdit = ()=>{
        contentModal.current = <BlockEditSubPage/>
        setOpenModal(true);
    };

    let openSubModalDelete = ()=>{
        contentModal.current = <BlockDeleteSubPage/>
        setOpenModal(true);
    };

    let closeModal = ()=>{
        setOpenModal(false);
        
      }

    return <>
    <div>Страница редактирования блока</div>
    <button onClick={openSubModalEdit}>Open SubModal edit</button><button onClick={openSubModalDelete}>Open SubModal delete</button>
    
    
    <div>
    {openModal && createPortal(<ModalBasis contentModal={contentModal.current}  doClose={closeModal}/>, parentModalBasis)}
    </div>
    </>
}