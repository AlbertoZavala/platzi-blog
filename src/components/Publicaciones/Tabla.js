import React from 'react';
import { connect } from 'react-redux';
import publicacionesReducer from '../../reducers/publicacionesReducer';
import publicacionesAction from '../Publicaciones';

const Tabla = (props) => {
  const ponerFilas = () => props.publicaciones.map((publicacion) => (
    <tr key={publicacion.id}>        
        <td>
          { publicacion.title }
        </td>
        <td>
          { publicacion.body }
        </td>        
      </tr>
    ));    

  return (
    <div>
      <table className="tabla">
            <thead>
              <tr>
                <th>Título</th>
                <th>Descripción</th>                
              </tr>
            </thead>
            <tbody>{ponerFilas()}</tbody>
          </table>
    </div>
  )
}

const mapStateToProps = (reducers) => {
  return reducers.publicacionesReducer;
}

export default connect(mapStateToProps, publicacionesAction) (Tabla);
