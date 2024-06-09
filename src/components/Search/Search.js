import { memo } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import './index.css'

export const Search = memo(({ value, setValue, visible, onClickCallback }) => {
    return (
        <>
            <div className={!visible ? 'wrapper-search' : 'wrapper-search visible'}>
                <Input
                    value={value}
                    setValue={setValue}
                />
                <Button
                    onClickCallback={onClickCallback}
                />
            </div>
        </>
    )
});

Search.displayName = 'Search'