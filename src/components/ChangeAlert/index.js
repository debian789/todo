import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({show, toggleShow}) {
    if (show) {
        return (
            <div>
                <p>Hubo cambios</p>
                <button onClick={() => {
                    toggleShow(false);
                }}>Actualizar</button>
            </div>
        )
    } else {
        return null;
    }

}

const ChangeAlertWithStorageLitener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageLitener}