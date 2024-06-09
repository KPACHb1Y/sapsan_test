import { memo } from "react";
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';
import { ReactComponent as CrossIcon } from "../../assets/crossIcon.svg";

import './index.css'

export const Input = memo(({ value, setValue }) => {
    const handleChange = event => {
        const inputValue = event.target.value;
        setValue(inputValue);
    }

    const handleClick = () => {
        setValue('');
    }

    return (
        <div className='wrapper-input'>
            <SearchIcon className='searchIcon' />
            <input
                type="text"
                className='input'
                value={value}
                placeholder='Телефоны, яблоки, груши...'
                onChange={(event) => handleChange(event)}
            />
            {
                value && <CrossIcon className='crossIcon' onClick={handleClick} />
            }
        </div>
    )
})

Input.displayName = 'Input'