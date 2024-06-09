import { memo, useState } from "react";
import { Modal } from "../Modal/Modal";

import './index.css';

export const PictureItemLists = memo(({ src }) => {
    const [isOpen, setIsOpen] = useState(false);
    const showModal = () => setIsOpen(true);

    return (
        <>
            <div className='list-item'>
                <img src={src} alt="" onClick={showModal}/>
            </div>
            {
                isOpen && (
                    <Modal
                        src={src}
                        onClose={() => setIsOpen(false)}
                    />
                )
            }
        </>
    )
})

PictureItemLists.displayName = 'PictureItemLists'