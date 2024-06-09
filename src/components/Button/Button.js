import { memo } from "react";

import './index.css'

export const Button = memo(({ onClickCallback }) => {
    const handleClick = () => {
        onClickCallback();
    }

    return (
        <button
            type='submit'
            className='btn'
            onClick={handleClick}
        >
            Искать
        </button>
    )
})

Button.displayName = 'Button'