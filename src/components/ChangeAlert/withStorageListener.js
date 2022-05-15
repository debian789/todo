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


        const toggleShow = () => {
            props.sincronize()
            setStorageChange(false);

        }


        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export {withStorageListener};
