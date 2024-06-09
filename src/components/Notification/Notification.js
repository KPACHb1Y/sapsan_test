import {memo} from "react";

import './index.css'

export const Notification = memo(({ title }) => {
    return <p className='notification'>{title}</p>
})

Notification.displayName = 'Notification'