import React from 'react';
import './dashboard.css';

const Ajustes = () => {
  return (
    <div className="card">
      <h2>Ajustes de Cuenta</h2>

      <div className="opciones-submodulos">
        <a
          href="#"
          onClick={() => cargarModulo('modulos/submodulos/cambiar_correo.html')}
          className="link-submodulo"
        >
          Cambiar Correo o Contraseña
        </a>

        <a
          href="#"
          onClick={() => cargarModulo('modulos/submodulos/notificaciones.html')}
          className="link-submodulo"
        >
          Preferencias de Notificaciones
        </a>

        <a
          href="#"
          onClick={() => cargarModulo('modulos/submodulos/eliminar_cuenta.html')}
          className="link-submodulo"
        >
          Eliminar Cuenta
        </a>
      </div>

      <hr />

      <div className="modo-oscuro-config" style={{ textAlign: 'center', marginTop: '1rem' }}>
        <label htmlFor="darkModeSwitch">Activar modo oscuro</label>
        <input type="checkbox" id="darkModeSwitch" style={{ marginLeft: '8px' }} />
      </div>
    </div>
  );
};

export default Ajustes;