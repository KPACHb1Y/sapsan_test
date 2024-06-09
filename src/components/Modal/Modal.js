import { memo } from "react";
import { ReactComponent as CrossModal } from "../../assets/crossModal.svg";

import './index.css'
export const Modal = memo(({ src, alt, onClose }) => {
    return (
        <div className="modal">
            <div className='modal-cross'>
                <span className="close" onClick={onClose}>
                    <CrossModal />
                </span>
            </div>
            <img className="modal-content" src={src} alt={alt}/>
        </div>
    )
})

Modal.displayName = 'Modal'