import { useState } from 'react';
import ModalContent from '../content/content';

import './basis.css';

function ModalBasis({doClose, contentModal}){
   

    return <>
    <div className="modal__basis" onClick={doClose}>
        <ModalContent content={contentModal}/>
    </div>
    
    </>
}

export default ModalBasis;