import React from 'react';
import {KEY_STORAGE} from '../../hooks/todoConst';

function useStorageListener(sincronize) {
    // return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage',(event) => {
            if (event.key === KEY_STORAGE) {
                setStorageChange(true);
            }
        })


        const toggleShow = () => {
            sincronize()
            setStorageChange(false);

        }

        return {
            show:  storageChange,
            toggleShow: toggleShow
        }

        /*
        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )*/
    //}
}

export {useStorageListener};
