import { Fragment, memo } from "react";
import { Notification } from "../Notification/Notification";
import { PictureItemLists } from "../PictureItemLists/PictureItemLists";

import './index.css'

export const PictureLists = memo(({ data, error, title, visible }) => {
    return (
        <div className='wrapper-item__pictures'>
            {
                error ? (
                    <>
                        {
                            visible && <Notification title={title} />
                        }
                    </>
                ) : (
                    <>
                        {
                            data && data?.map((item) => {
                                return (
                                    <Fragment key={item.id}>
                                        {
                                            visible && <PictureItemLists src={item.urls.regular} />
                                        }
                                    </Fragment>
                                )
                            })
                        }
                    </>
                )
            }
        </div>
    )
})

PictureLists.displayName = 'PictureLists'