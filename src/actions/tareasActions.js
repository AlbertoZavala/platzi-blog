import axios from "axios";
import { CARGANDO, TRAER_TODAS, ERROR, CAMBIO_USUARIO_ID, CAMBIO_USUARIO_TITULO, GUARDAR_TAREA, ACTUALIZAR, LIMPIAR } from "../types/tareasTypes";

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
        dispatch({
            type: GUARDAR_TAREA,            
        });
    }catch(error){        
        dispatch({
            type: ERROR,
            payload: 'Intente más tarde.'
        });
    }
}

export const editar = (tarea_editada) => async (dispatch) => {
    dispatch({
        type: CARGANDO,        
    });

    try{
        const respuesta = await axios.put(`https://jsonplaceholder.typicode.com/todos/${tarea_editada.id}`, tarea_editada);        
        dispatch({
            type: GUARDAR_TAREA,            
        });
    }catch(error){        
        dispatch({
            type: ERROR,
            payload: 'Intente más tarde.'
        });
    }
}

export const cambioCheck =  (usu_id, tar_id) => (dispatch, getState) => {
    const { tareas } = getState().tareasReducer;
    const seleccionada = tareas[usu_id][tar_id];

    const actualizadas = {
        ...tareas,        
    };

    actualizadas[usu_id] = {
        ...tareas[usu_id],
    };

    actualizadas[usu_id][tar_id] = {
        ...tareas[usu_id][tar_id],
        completed: !seleccionada.completed,
    }

    dispatch({
        type: ACTUALIZAR,
        payload: actualizadas,
    });
}

export const eliminar = (tar_id) => async (dispatch) => {
    dispatch({
        type: CARGANDO,
    });

    try{        
        const respuesta = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${tar_id}`);
        dispatch({
            type: TRAER_TODAS,
            payload: {},
        });
    }catch(error){        
        dispatch({
            type: ERROR,
            payload: 'Servicio no está disponible.',
        });
    }
}

export const limpiarForma = () => (dispatch) => {
    dispatch({
        type: LIMPIAR
    });
}