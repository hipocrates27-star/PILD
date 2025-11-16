import React from 'react';
import './dashboard.css';

const Contactos = () => {
  return (
    <div className="modulo">
      <h2>Contactos de Emergencia</h2>

      <form id="formContactos" className="formulario grid-dos-columnas">
        <div className="form-group">
          <label htmlFor="nombreContacto">Nombre del contacto</label>
          <input type="text" id="nombreContacto" placeholder=" " required />
        </div>

        <div className="form-group">
          <label htmlFor="tipoDocumento">Tipo de documento</label>
          <select id="tipoDocumento" required>
            <option value="" disabled selected>Seleccione</option>
            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
            <option value="Cédula de extranjería">Cédula de extranjería</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="numeroDocumento">Número de documento</label>
          <input type="text" id="numeroDocumento" placeholder=" " required />
        </div>

        <div className="form-group">
          <label htmlFor="parentesco">Parentesco / relación</label>
          <select id="parentesco" required>
            <option value="" disabled selected>Seleccione</option>
            <option value="Padre">Padre</option>
            <option value="Madre">Madre</option>
            <option value="Hermano/a">Hermano/a</option>
            <option value="Conyuge">Conyuge</option>
            <option value="Hijo/a">Hijo/a</option>
            <option value="Amigo/a">Amigo/a</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" id="telefono" placeholder=" " required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder=" " />
        </div>

        <div className="form-group">
          <label htmlFor="observaciones">Observaciones</label>
          <textarea id="observaciones" placeholder=" "></textarea>
        </div>

        <div className="botonera span-2">
          <button type="button" id="btnAgregarContacto" className="btn">Agregar contacto</button>
          <button type="submit" className="btn btn-guardar">Guardar cambios</button>
        </div>
      </form>

      <h3>Lista de contactos de emergencia</h3>
      <table id="listaContactos" className="lista-tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo de documento</th>
            <th>Número de documento</th>
            <th>Parentesco</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Observaciones</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Contactos se agregarán dinámicamente aquí */}
        </tbody>
      </table>
    </div>
  );
};

export default Contactos;