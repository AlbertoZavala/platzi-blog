import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import Tabla from './../Publicaciones/Tabla';

import * as usuariosActions from './../../actions/usuariosActions';
import * as publicacionesActions from './../../actions/publicacionesActions';

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: publicacionesTraerPorUsuario } = publicacionesActions;

class Publicaciones extends Component {
  async componentDidMount(){
    if(!this.props.usuariosReducer.usuarios.length){
      await this.props.usuariosTraerTodos();
    }

    this.props.publicacionesTraerPorUsuario(this.props.match.params.key);
  }

  ponerContenido = () => {
    if(this.props.cargando){
      return <Spinner/>      
    }    
    if(this.props.error){
      return <Fatal mensaje={this.props.error} />;
    }
    
    return <Tabla />            
  }

  render() {
    console.log(this.props);    
    return (
      <div>
        <h1>Publicaciones de </h1>
        {/* { this.props.match.params.key } */}
        {this.ponerContenido()}
      </div>
    )
  }
}

const mapStateToProps = ({usuariosReducer, publicacionesReducer}) => {
  return { 
    usuariosReducer, 
    publicacionesReducer,
  };
};

const mapDispatchToProps = {
  usuariosTraerTodos,
  publicacionesTraerPorUsuario,
}

export default connect(mapStateToProps, mapDispatchToProps) (Publicaciones)