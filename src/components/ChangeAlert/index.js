import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="container-change-alert">
        <div className="container-change-message-alert">
          <p>Hubieron cambios es necesario actualizar</p>
          <button
            onClick={() => {
              toggleShow(false);
            }}
            >
            Aceptar
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
