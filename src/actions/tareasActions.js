import axios from "axios";
import { CARGANDO, TRAER_TODAS, ERROR, CAMBIO_USUARIO_ID, CAMBIO_USUARIO_TITULO, AGREGAR_TAREA } from "../types/tareasTypes";

export const traerTodas = () => async (dispatch) => {

    dispatch({
        type: CARGANDO,        
    });

    try{
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const tareas = {};
        
        respuesta.data.map((tar) => (
            tareas[tar.userId] = {
                ...tareas[tar.userId],
                [tar.id]: {
                    ...tar
                }
            }
        ));

        dispatch({
            type: TRAER_TODAS,
            payload: tareas
        });
    }catch(error){        
        dispatch({
            type: ERROR,
            payload: 'Información de tareas no disponible'
        });
    }
};

export const cambioUsuarioId = (usuario_id) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_ID,
        payload: usuario_id,
    });
}

export const cambioUsuarioTitulo = (titulo) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_TITULO,
        payload: titulo,
    });
}

export const agregar = (nueva_tarea) => async (dispatch) => {
    dispatch({
        type: CARGANDO,        
    });

    try{
        const respuesta = await axios.post('https://jsonplaceholder.typicode.com/todos', nueva_tarea);
        console.log(respuesta.data)
        dispatch({
            type: AGREGAR_TAREA,            
        });
    }catch(error){        
        dispatch({
            type: ERROR,
            payload: 'Intente más tarde.'
        });
    }
}