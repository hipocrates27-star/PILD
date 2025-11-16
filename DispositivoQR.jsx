import React from 'react';
import './dashboard.css';

const DispositivoQR = () => {
  return (
    <div className="card">
      <h2>Mi dispositivo QR</h2>

      <div className="opciones-submodulos">
        <a href="#" onClick={() => cargarModulo('modulos/submodulos/ver_qr.html')} className="link-submodulo">
          Ver código QR e ID único
        </a>

        <a href="#" onClick={() => cargarModulo('modulos/submodulos/estado_dispositivo.html')} className="link-submodulo">
          Estado del dispositivo
        </a>
      </div>
    </div>
  );
};

export default DispositivoQR;