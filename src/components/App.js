import React from 'react';

const App = () => {
  const ponerFilas = () => [
    <tr>
      <td>José</td>
      <td>jose.alberto.zavala.flores@gmail.com</td>
      <td>www.zavala.com.mx</td>
    </tr>,
    <tr>
      <td>Alberto</td>
      <td>jose.alberto.zavala.flores@gmail.com</td>
      <td>www.zavala.com.mx</td>
    </tr>,
  ];

  return(
    <div className="margen">    
    <table className="tabla">
      <thead>
        <tr>
          <th>
            Nombre
          </th>
          <th>
            Correo
          </th>
          <th>
            Enlace
          </th>
        </tr>
      </thead>
      <tbody>
        
        {ponerFilas()}
        
      </tbody>
    </table>
    </div>
  );
}

export { App }