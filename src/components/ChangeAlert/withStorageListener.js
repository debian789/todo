import React from 'react';
import {KEY_STORAGE} from '../../hooks/todoConst';

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage',(event) => {
            if (event.key === KEY_STORAGE) {
                setStorageChange(true);
            }
        })


        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={setStorageChange}
            />
        )
    }
}

export {withStorageListener};
